import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
});