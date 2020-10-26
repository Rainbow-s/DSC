<!-- 商品列表 -->
<template>
  <div class="list">
    <ul>
      <li v-for="list in lists" :key="list.goods_id">
        <!-- <router-link :to="'/goodsinfo?goods_id=' + list.goods_id"> -->
        <router-link :to="'/goodsinfo?goods_id=' + list.goods_id">
          <img
            :src="
              lists1 == false
                ? list.goods_img
                : 'http://192.168.0.103:3000/' + list.goods_img
            "
            alt=""
          />
          <h3>{{ list.goods_name }}</h3>
          <p>
            ￥<span>{{ list.shop_price }}</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: ["lists"],
  //监听属性 类似于data概念
  computed: {
    lists1() {
      return this.lists[0].goods_img.indexOf("http");
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.list {
  width: 100%;
  height: 100%;
  position: fixed;
  padding-top: 4.4rem;
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #efefef;
  overflow-y: scroll;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      // height: 30rem;
      text-align: center;
      // background: skyblue;
      img {
        width: 90%;
        // margin-left: 5%;
        margin-top: 5%;
      }
      h3 {
        overflow: hidden;
        text-align: left;
        font-size: 1.3rem;
        color: #333;
        width: 90%;
        margin-left: 5%;
        line-height: 2rem;
        height: 4rem;
        font-weight: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 5%;
      }
      p {
        text-align: left;
        margin-left: 5%;
        font-size: 1.2rem;
        color: red;
      }
      span {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }
}
</style>