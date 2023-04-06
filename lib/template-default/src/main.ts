// IE兼容及优化
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import router from '@/router';
import store from '@/store';

// antd
import antd from './antd';
antd();

// moment
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// extend
import './extends/validator.extend';
import './extends/vue.extend';

import App from '@/App.vue';
import 'ant-design-vue/dist/antd.less';
import '@/styles/reset.less';
import '@/styles/common.less';

Vue.prototype.moment = moment;
Vue.prototype.cancelRequest = function () {
  if (window['cancelAxios']) {
    window['cancelAxios']();
  }
};
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
