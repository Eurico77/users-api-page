/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333/api';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
