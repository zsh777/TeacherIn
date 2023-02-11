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
        path: "/preview2/:name",
        name: "preview3",
        component: Preview3,
      },
    ],
  },
  {
    path: "/preview",
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

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this.addRoute, location).catch((err) => err);
// };
