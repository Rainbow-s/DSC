// state 保存数据
const state = {
    num: 1,
    swipeData: [], //轮播图数据
    adsrc: "", //广告图片路径
    loading: false, //加载是否完成
    categoryLeftData: [], //分类页面 左边
    categoryRightData: [], //分类页面 右边
    userInfo: {}, //用户信息
    goodList: [], //商品列表
    goodsInfo: [], //商品详细信息
    // 购物车数据
    carts: localStorage['carts'] ? JSON.parse(localStorage['carts']) : [],
    // 是否全选
    checkAll: localStorage['checkAll'] ? JSON.parse(localStorage['checkAll']) : false,
    // 是否登录
    isLogin: localStorage['userInfo'] ? JSON.parse(localStorage['userInfo']) : "",
    // 搜索数据
    searchList: [],
}
export default state;