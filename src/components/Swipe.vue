<!-- 轮播图组件 -->
<template>
  <div class="swipe">
    <!-- :auto="2000"   间隔时间
      :show-indicators="true"   是否显示指示点
      :default-index="1"    初始化索引
      :continuous="true"   是否循环播放
    @change="handleChange"   绑定一个事件，参数index可以获取索引-->

    <mt-swipe
      :auto="2000"
      :show-indicators="true"
      :default-index="1"
      :continuous="true"
    >
      <mt-swipe-item v-for="swipe in swipeDatas" :key="swipe.swipe_id">
        <img :src="swipe.swipe_img" alt />
      </mt-swipe-item>
    </mt-swipe>
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
  //监听属性 类似于data概念
  computed: {
    swipeDatas() {
      return this.$store.state.swipeData;
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
  mounted() {
    this.$store.dispatch("acrgetHomeSwipeData");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.swipe {
  width: 100%;
  height: 12rem;
  margin-bottom: 1rem;
  .mint-swipe {
    border-radius: 0.5rem;
  }
  img {
    width: 100%;
    height: 12rem;
  }
}
</style>