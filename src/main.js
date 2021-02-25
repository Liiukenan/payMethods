import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/reset.css"
import 'lib-flexible/flexible';
import base from './api/base'
import i18n from './api/lang'
Vue.prototype.base = base;
Vue.config.productionTip = false;
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");