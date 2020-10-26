// 同步   mutation 里面定义的方法是用来修改state
import { MessageBox } from "mint-ui"
const mutations = {
    addNum(state) {
        console.log(state);
        ++state.num
    },
    addNumX(state, data) {
        state.num += data
    },
    // 获取轮播图图片
    getSwipeData(state, data) {
        state.swipeData = data
    },
    // 获取分类内容左边数据
    getCategoryLeftData(state, data) {
        state.categoryLeftData = data;
    },
    // 获取分类内容右边数据
    getCategoryRightData(state, data) {
        state.categoryRightData = data
    },
    // 获取用户登录信息
    getUserInfo(state, data) {
        state.userInfo = data
        if (data) {
            state.isLogin = data.user_name
        }
        localStorage.setItem('userInfo', JSON.stringify(state.isLogin))
    },
    // 获取商品列表信息
    getGoodLists(state, data) {
        state.goodList = data
    },
    // 获取商品详细信息
    getGoodsInfo(state, data) {
        state.goodsInfo = data
    },
    // 设置购物车中的数据
    setCartDatas(state, data) {
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 商品增加
    addCart(state, index) {
        console.log(state.carts[index]);
        state.carts[index].value++;


        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    // 商品减少
    jianCart(state, index) {
        if (state.carts[index].value <= 1) {
            state.carts[index].value = 1;
            MessageBox({
                title: "提示",
                message: "至少要购买一个"
            })
        } else {
            state.carts[index].value--;

        }
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    // 直接在输入框输入数字修改物品数量
    changeFn(state, data) {
        console.log(data);
        if (data.val <= 1) {
            state.carts[data.index].value = 1;

            MessageBox({
                title: "提示",
                message: "最少要购买一件哦"
            })
        } else {
            state.carts[data.index].value = data.val;
        }
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    // 改变选中状态
    changeSelect(state, data) {
        state.carts[data.index].isSelect = !state.carts[data.index].isSelect
        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })
        state.checkAll = isCheck;
        localStorage.setItem('checkAll', JSON.stringify(state.checkAll))
        localStorage.setItem('carts', JSON.stringify(state.carts))

    },
    // 删除选中的商品
    dele(state, index) {
        MessageBox.confirm("真的不要了吗").then(() => {
            state.carts.splice(index, 1)
            state.checkAll = false;
            localStorage.setItem('carts', JSON.stringify(state.carts))
            localStorage.setItem('checkAll', JSON.stringify(state.checkAll))

        }, () => {
            console.log("取消");
        })

    },
    // 设置是否全选
    selectAllFn(state) {

        state.checkAll = !state.checkAll
        console.log(state.checkAll);
        state.carts.forEach(item => {
            console.log(item);
            item.isSelect = state.checkAll
        })
        localStorage.setItem('carts', JSON.stringify(state.carts))
        localStorage.setItem('checkAll', JSON.stringify(state.checkAll))
    },
    // 获取搜索数据
    searchList(state, data) {
        state.searchList = data
    }


}
export default mutations