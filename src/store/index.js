import Vue from 'vue'
import Vuex from 'vuex'

import commonActions from './actions/actions'
import apiRequests from "@/store/actions/api-requests";
import mutations from "@/store/mutations/mutations";
import getters from "@/store/getters/getters";

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters,
  mutations,
  actions,
  modules: {}
})
