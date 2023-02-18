import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Preview from "../views/PreviewView.vue";
import Preview2 from "../views/PreviewView2.vue";
import Preview3 from "../views/PreviewView3.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/preview2",
    children: [
      {
        path: "/preview2",
        name: "preview2",
        component: Preview2,
      },
      {
        path: "/preview3/:name",
        name: "preview3",
        component: Preview3,
      },
    ],
  },
  {
    path: "/preview/:url",
    name: "preview",
    component: Preview,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
// 缓存原型上的push函数
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
  if (onComplete === undefined && onAbort === undefined) {
    return originPush.call(this, location, onComplete, onAbort).catch(() => {});
  } else {
    // 如果有指定任意回调函数, 通过call调用源push函数处理
    originPush.call(this, location, onComplete, onAbort);
  }
};

// replace同理处理
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete === undefined && onAbort === undefined) {
    return originReplace
      .call(this, location, onComplete, onAbort)
      .catch(() => {});
  } else {
    originReplace.call(this, location, onComplete, onAbort);
  }
};
