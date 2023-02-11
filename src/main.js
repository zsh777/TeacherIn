import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./assets/tailwindcss.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import i18n from "./assets/language/index.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

Vue.filter("formatUTC", function (originVal) {
  const date = new Date(originVal);
  const y = date.getFullYear();
  const m = "0" + (date.getMonth() + 1);
  const d = "0" + date.getDate();
  const h = date.getHours();
  const mm = date.getMinutes();
  const s = date.getSeconds();
  return `${y}-${m.substring(m.length - 2, m.length)}-${d.substring(d.length - 2, d.length)} ${h}:${mm}:${s}`; // 2021-09-14 19:36:10
});
Vue.filter("filterType", function (val) {
  if (val === 0) return "--";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "Pb"];
  const i = Math.floor(Math.log(val) / Math.log(k));
  return (val / Math.pow(k, i).toPrecision(3)).toFixed(1) + "" + sizes[i];
});
