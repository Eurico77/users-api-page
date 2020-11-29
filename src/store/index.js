import Vue from 'vue';
import Vuex from 'vuex';

import Users from './Users';

Vue.use(Vuex);

const modules = {
  Users,
};

export default new Vuex.Store({
  modules,
});
