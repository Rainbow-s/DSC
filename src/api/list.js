import ajax from "./ajax.js"
// 定义一个全局变量
const Base_URL = "http://192.168.0.103:3000/api"

// 请求数据
// 产品列表界面
//api/v1/category/goodslist?cat_id=1107
export const getGoodList = (params) => {
        return ajax(Base_URL + "/v1/category/goodslist", params)
    }
    // 产品详情页
    ///api/v1/category/goodsdetail?goods_id=621
export const getGoodsDetail = (params) => {
    return ajax(Base_URL + "/v1/category/goodsdetail", params)
}