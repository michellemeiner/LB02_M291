import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// # Usage of: VueX #
export default new Vuex.Store({
  state: {
    oldDiscount: 0,
    discount: 0,
  },

  // # Usage of: VueX getters #
  getters: {
    getDiscount(state) {
      return `${state.discount}`;
    },
    getOldDiscount(state) {
      return `${state.oldDiscount}`;
    }
  },

  // # Usage of: VueX mutations #
  mutations: {
    updateDiscount(state) {
      if (state.discount <= 90) {
        state.oldDiscount = state.discount
        state.discount = state.discount + 10;
      }
    },
    resetDiscount(state) {
      state.discount = 0;
      state.oldDiscount = 0;
    }
  },
})
