import Vue from "vue";
import Vuex from "vuex";
Vue.config.devtools = true;
Vue.use(Vuex);
// import createPersistedState from "vuex-persistedstate"
export default new Vuex.Store({
  state: {
    orderId:null,
    price:null,
    symbol:null
  },
  mutations: {
    SETORDERID(state,data){
      state.orderId=data;
    },
    SETPRICE(state,data) {
      state.price=data;
    },
    SETSYMBOL(state,data) {
      state.symbol=data;
    }
  },
  actions: {
    
  },
  // plugins: [createPersistedState({
  //   storage:window.sessionStorage,
  //       reducer(val)  {
  //           return {
  //               // 只储存state中的token
  //               list: val.list,
  //               loading:val.loading,
  //               showRetry:val.showRetry,
  //               date:val.date,
  //               isAihelp:val.isAihelp
  //           }
  //       }
  //   })]
});
