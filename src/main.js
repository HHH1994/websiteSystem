// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {Row,Col,Button,Input} from 'iview';
import 'iview/dist/styles/iview.css';
import '../theme/HHH.scss';
import axios from './http/http'

Vue.config.productionTip = false;
/*iview按需引用*/
Vue.component("Row",Row);
Vue.component("Col",Col);
Vue.component("Button",Button);
Vue.component("Input",Input);
/*axios*/
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
