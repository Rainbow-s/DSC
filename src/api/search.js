import ajax from "./ajax.js"
// 定义一个全局变量
// const Base_URL = "/api";
// 请求数据
// 产品列表界面
//http://39.101.210.136:3000/api/v1/search?keywords=%E5%B0%8F%E7%B1%B3&size=10&page=1
export const searchList = (params) => {
    return ajax("http://39.101.210.136:3000/api/v1/search", params)
}