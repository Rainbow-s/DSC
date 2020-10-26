// 定义路由模块
// 需要导入 vue模块  和vue-router
import Vue from "vue";
import VueRouter from "vue-router";
// 使用
Vue.use(VueRouter);
// 创建组件  新建 .vue文件  --导入文件（通常组件名称为大写字母开头）
import Home from "../views/Home/Home.vue"
import Cart from "../views/Cart/Cart.vue"
import Category from "../views/Category/Category.vue"
import Mine from "../views/Mine/Mine.vue"
import Search from "../views/Search/Search.vue"

// 配置首页的子组件
import Index from "../views/Home/children/Index.vue"
import Ele from "../views/Home/children/Ele.vue"
import Person from "../views/Home/children/Person.vue"
import Box from "../views/Home/children/Box.vue"
import Phone from "../views/Home/children/Phone.vue"
import Computer from "../views/Home/children/Computer.vue"
import House from "../views/Home/children/House.vue"
import Face from "../views/Home/children/Face.vue"
// 测试
import Demo from "../views/Demo/Demo.vue"
// 登录
import Xslogin from "../views/Login/Login.vue"
// 物品列表信息
import Listinfo from "../views/Category/components/Listinfo.vue"
import GoodsInfo from "../views/Goodsinfo/GoodsInfo.vue"
// 搜索列表数据
import SearchList from "../views/Search/SearchList.vue"
// 配置路由
const routes = [{
        path: "/home",
        component: Home,
        children: [{
            path: "index",
            component: Index
        }, {
            path: "ele",
            component: Ele
        }, {
            path: "person",
            component: Person
        }, {
            path: "box",
            component: Box
        }, {
            path: "phone",
            component: Phone
        }, {
            path: "computer",
            component: Computer
        }, {
            path: "house",
            component: House
        }, {
            path: "face",
            component: Face
        }, {
            path: "/home",
            redirect: "/home/index"
        }]
    },
    {
        path: "/cart",
        component: Cart,
    },
    {
        path: "/search",
        component: Search,
    }, {
        path: "/mine",
        component: Mine,
    }, {
        path: "/category/:cid",
        component: Category,
    }, {
        path: "/demo",
        component: Demo
    },
    {
        path: "/xslogin",
        component: Xslogin,
    },
    {
        path: "/listinfo",
        component: Listinfo
    },
    {
        path: "/goodsinfo",
        component: GoodsInfo,
    }, {
        path: "/searchlist",
        component: SearchList
    }, {
        path: "/",
        redirect: "/home",
    }
]

// 实例化一个路由对象
const router = new VueRouter({
    routes: routes,
    // mode: "history"
})

// 暴露出去
export default router