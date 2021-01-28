import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import MintUI from 'mint-ui'
import "./assets/css/reset.css"
import 'lib-flexible/flexible';
import base from './api/base'
import i18n from './api/lang'

import FastClick from 'fastclick'
FastClick.attach(document.body);
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
Vue.prototype.window = window;
Vue.prototype.base = base;
Vue.prototype.http = axios;
Vue.config.productionTip = false;
import { DatetimePicker } from 'mint-ui';
import vueFeedback from 'vue-feedback';
Vue.use(vueFeedback)
Vue.component(DatetimePicker.name, DatetimePicker);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");