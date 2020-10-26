import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from "./router/index.js";
// 导入store模块
import store from "@/vuex/store.js"
// ly-tab  一个用于移动端的可触摸滑动具有回弹效果的可复用组件
import LyTab from "ly-tab";
Vue.use(LyTab)
    // 导入mint-ui
import mintUi from "mint-ui";
import "mint-ui/lib/style.css"
Vue.use(mintUi)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')