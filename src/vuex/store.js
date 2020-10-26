import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex); //使用vuex

import state from "./state.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
const store = new Vuex.Store({
        state,
        mutations,
        actions,
    })
    // 暴露
export default store