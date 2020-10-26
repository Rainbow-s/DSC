<!-- 商品详情页组件 -->
<template>
  <div class="goods-info">
    <Head title="商品详情" />
    <!-- <h2>商品详情页</h2> -->
    <!-- 轮播图 -->
    <div class="goods-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="goodsInfo.goods_img" alt="" />
          </div>
          <div class="swiper-slide">
            <img :src="goodsInfo.goods_img" alt="" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="goods-content">
      <h2>{{ goodsInfo.shop_price }}</h2>
      <div class="goods-name">{{ goodsInfo.goods_name }}</div>
    </div>
    <!-- 底部区域 -->
    <div class="footer">
      <div class="kefu">
        <i class="iconfont icon-kefu"></i>
        <p>客服</p>
      </div>
      <div class="love">
        <i class="iconfont icon-shoucang"></i>
        <p>收藏</p>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <em>{{ goodsnum }}</em>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="add-cart" @click="addCart(goodsInfo)">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Head from "@/components/Head.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    goodsInfo() {
      return this.$store.state.goodsInfo;
    },
    goodsnum() {
      let goodNum = 0;
      this.$store.state.carts.forEach((item) => {
        goodNum += item.value;
      });
      return goodNum;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addCart(data) {
      //把商品信息存储到localstorage
      // console.log(data);
      // console.log(this.$store.state.carts);
      var isCart = this.$store.state.carts.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });
      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          goods_img: data.goods_img,
          value: 1,
          isSelect: false,
        };
      }

      this.$store.dispatch("actsetCartDatas", cartData);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actgetGoodsInfo", {
      goods_id: this.$route.query.goods_id,
    });
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-aliheve缓存功能，这个函数会触发
};
</script>
<style lang="less">
.goods-info {
  width: 100%;
  .swiper-container {
    width: 100%;
    height: 37.5rem;
    border-bottom: 1px solid #efefef;
    margin-bottom: 2rem;
    img {
      width: 100%;
      height: 37.5rem;
    }
  }
  .goods-content {
    width: 100%;
    h2 {
      font-size: 2rem;
      margin-left: 3%;
      margin-bottom: 2rem;
      color: red;
      font-weight: normal;
      &::before {
        font-size: 1.2rem;
        content: "￥";
      }
    }
    .goods-name {
      width: 90%;
      margin-left: 5%;
      font-size: 1.4rem;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 4.9rem;
    // background: red;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      // width: 20%;
      flex: 1;
      text-align: center;
      i {
        font-size: 2rem;
      }
    }
    .cart {
      position: relative;
      a {
        display: flex;
        display: block;
        text-align: center;
        em {
          position: absolute;
          top: 0;
          font-style: normal;
          right: 1rem;
          min-width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          background: red;
          color: #fff;
        }
      }
    }
    .add-cart {
      flex: 2;
      background: #f55;
      color: #fff;
      font-size: 1.4rem;
      height: 4.4rem;
      line-height: 4.4rem;
    }
    .buy {
      flex: 2;
      background: #ff976a;
      line-height: 4.4rem;
      color: #fff;
      font-size: 1.4rem;
      height: 4.4rem;
    }
  }
}
</style>