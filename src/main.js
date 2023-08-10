import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Bus from "../src/utils/eventBus";
Vue.prototype.$bus = new Bus(); // 将$bus挂载到vue实例的原型上
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
