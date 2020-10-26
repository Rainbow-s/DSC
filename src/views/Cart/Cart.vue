<!-- 购物车组件 -->
<template>
  <div class="cart">
    <!-- <h2>购物车</h2> -->
    <Head title="购物车" />
    <div class="cart-content">
      <ul>
        <li v-for="(list, index) in carListDatas" :key="list.goods_id">
          <!-- 选中框 -->
          <div class="select" @click="changeSelect(index)">
            <i class="iconfont icon-danxuankuang" v-if="list.isSelect"></i>
            <i
              class="iconfont icon-danxuankuangxuanzhong"
              style="color: red"
              v-else
            ></i>
          </div>
          <!-- 商品图片 -->
          <div class="goods-img">
            <img :src="list.goods_img" alt="" />
          </div>
          <!-- 右边内容 -->

          <div class="right-content">
            <div class="goods-title">{{ list.goods_name }}</div>
            <div class="goods-wrap">
              <span class="goods-price">{{ list.shop_price }}</span>
              <div class="carts-num">
                <a href="javascript:;" @click="jianCart(index)">-</a>
                <input
                  type="text"
                  value="1"
                  ref="val"
                  v-model="list.value"
                  @input="changeFn(index)"
                />
                <a href="javascript:;" @click="addCart(index)">+</a>
                <i class="dele iconfont icon-shanchu1" @click="dele(index)"></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="gobuy">
        <div class="selectall" @click="selectAllFn">
          <i class="iconfont icon-danxuankuang" v-if="selectAll"></i>
          <i
            class="iconfont icon-danxuankuangxuanzhong"
            style="color: red"
            v-else
          ></i>
        </div>
        <div class="allprice">
          合计：<span>{{ total }}</span>
        </div>
        <div class="tobuy">
          <button>去结算({{ num }})</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Head,
  },
  data() {
    //这里存放数据
    return {
      // selectAll: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    carListDatas() {
      return this.$store.state.carts;
    },
    selectAll() {
      return this.$store.state.checkAll;
    },
    // 总价
    total() {
      let totalPrice = 0;
      this.$store.state.carts.forEach((item) => {
        if (!item.isSelect) {
          totalPrice += item.value * item.shop_price;
        }
      });
      return totalPrice;
    },
    // 商品总数量
    num() {
      let goodNum = 0;
      this.$store.state.carts.forEach((item) => {
        if (!item.isSelect) {
          goodNum += item.value;
        }
      });
      return goodNum;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 商品增加
    addCart(index) {
      this.$store.commit("addCart", index);
    },
    // 商品减少
    jianCart(index) {
      this.$store.commit("jianCart", index);
    },
    // 直接输入
    changeFn(index) {
      console.log(this.$refs.val[index].value);
      this.$store.commit("changeFn", {
        index,
        val: this.$refs.val[index].value,
      });
    },
    // 改变选中状态
    changeSelect(index) {
      this.$store.commit("changeSelect", { index });
    },
    // 删除商品
    dele(index) {
      this.$store.commit("dele", index);
    },
    // 全选
    selectAllFn() {
      this.$store.commit("selectAllFn");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.cart-content {
  width: 100%;
  height: calc(100% - 4.4rem - 4.9rem);
  position: fixed;
  overflow-y: scroll;
  top: 4.4rem;
  left: 0;
  ul {
    margin-top: 1rem;
    width: 100%;
    // height: 10rem;
    background: #fff;
    li {
      border: 1px solid #efefef;
      width: 100%;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .select {
        width: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .goods-img {
        display: flex;
        align-items: center;
        width: 20%;
        img {
          width: 100%;
          // height: 7rem;
        }
      }
      .right-content {
        width: 65%;
        margin-left: 3%;
        margin-right: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .goods-title {
          font-size: 1.2rem;
          height: 4rem;
          line-height: 2rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-bottom: 1rem;
        }
        .goods-wrap {
          display: flex;
          justify-content: space-between;
          .goods-price {
            font-size: 1.4rem;
            color: red;
            font-weight: bold;
            &::before {
              content: "￥";
            }
          }
          .carts-num {
            // border: 1px solid #efefef;
            // background: #fff;
            float: right;

            a {
              width: 2rem;
              float: left;
              height: 2rem;
              text-align: center;
              line-height: 2rem;
              font-size: 1.4rem;
              background: #efefef;
            }
            input {
              width: 3rem;
              height: 2rem;
              float: left;
              text-align: center;
            }
            .dele {
              margin-left: 1.5rem;
              margin-right: 1rem;
              color: #999;
            }
          }
        }
      }
    }
  }
  .gobuy {
    width: 100%;
    height: 4.9rem;
    border-top: 1px solid #efefef;
    position: fixed;
    bottom: 4.9rem;
    left: 0;
    display: flex;
    align-items: center;
    .selectall {
      width: 10%;
      margin-right: 10%;
      text-align: center;
    }
    .allprice {
      width: 40%;
      margin-left: 10%;
      span {
        color: red;
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
    .tobuy {
      width: 30%;
      height: 4.4rem;
      button {
        width: 100%;
        height: 100%;
        background: #ff4444;
        color: #fff;
      }
    }
  }
}
</style>