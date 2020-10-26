import ajax from "./ajax.js";
// 定义一个全局变量 --全局路径
const Base_URL = "http://localhost:3000/api"


// 请求数据

// 首页轮播图
// export const getHomeSwipe = () => {
//     return ajax(Base_URL + "/v1/index/swipe")
// }

//分类页左边数据
export const categoryLeft = () => {
        return ajax(Base_URL + "/v1/category")
    }
    // 分类右边数据
export const categoryRight = (cid) => {
        return ajax(Base_URL + `/v1/category/categorylist/${cid}`)
    }
    // 首页轮播图
export const getHomeSwipe = () => {
    return ajax(Base_URL + "/v1/index/swipe")
}