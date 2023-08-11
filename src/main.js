import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Bus from "@/utils/eventBus";
import "@/utils/directive.js";
import myPlugins from "@/utils/vuePlugins";
const defaultSrc = require("@/static/image/loading.gif");

Vue.use(myPlugins, { defaultSrc: defaultSrc });
Vue.prototype.$bus = new Bus(); // 将$bus挂载到vue实例的原型上
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
