// 导入获取分类页左边右边数据的模板
import { categoryLeft } from "@/api/index.js"
import { categoryRight, getHomeSwipe } from "@/api/index.js";
// 导入获取商品列表数据的模板
import { getGoodList, getGoodsDetail } from "@/api/list.js"
// 获取搜索的数据
import { searchList } from "@/api/search.js"
import state from "./state.js"
const actions = {

    actAddNum(mutation) {
        mutation.commit("addNum")
    },
    // 获取首页轮播图数据
    async acrgetHomeSwipeData(context) {
        const result = await getHomeSwipe();
        console.log(result.data.data);
        context.commit("getSwipeData", result.data.data)
    },
    // 获取分类页左边数据
    async actgetCategoryLeftData(mutation) {
        const result = await categoryLeft();
        // console.log(result);

        if (result.status == 200) {
            mutation.commit("getCategoryLeftData", result.data.data)
        }
    },
    // 获取分类页面右边数据
    async actgetCategoryRightData(context, cid) {
        const resultR = await categoryRight(cid);
        // console.log(resultR.status);

        if (resultR.status == 200) {
            state.loading = true;
            context.commit("getCategoryRightData", resultR.data.data)
            var arr = state.categoryLeftData.filter((item) => {
                return item.category_id == cid;
            });
            // console.log(arr);
            state.adsrc = arr[0].menu_img;
        } else {
            state.loading = false;

        }
        // console.log(state.loading);
    },
    // 获取用户信息
    actgetUserInfo(context, data) {
        context.commit("getUserInfo", data)
        console.log(state.isLogin);
    },
    // 获取商品列表的信息
    async actgetGoodList(context, data) {
        const result = await getGoodList(data)
            // console.log(result.data.data);
        context.commit("getGoodLists", result.data.data)
            // console.log(state.goodList);
    },
    // 获取商品的详细信息
    async actgetGoodsInfo(context, data) {
        const result = await getGoodsDetail(data);
        console.log(result.data.data);
        context.commit("getGoodsInfo", result.data.data[0])
        console.log(state.goodsInfo);
    },
    // 设置购物车数据
    actsetCartDatas(context, data) {
        context.commit('setCartDatas', data)
    },
    // 获取搜索的数据
    async actgetSearchList(context, data) {
        const result = await searchList(data);
        console.log(result);
        context.commit('searchList', result.data.data)
    }

}
export default actions;