import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})