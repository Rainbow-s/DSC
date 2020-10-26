<!-- 分类头部组件 -->
<template>
  <div class="category-header">
    <header>
      <a href="javascript:;" onclick="window.history.back()">
        <i class="iconfont icon-jiantou3"></i>
      </a>
      <form>
        <input
          type="search"
          name=""
          id=""
          placeholder="请输入关键字"
          @click="toSearch"
        />
        <i class="iconfont icon-sousuo2"></i>
      </form>
    </header>
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
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toSearch() {
      this.$router.push("/search");
      // this.$router.replace("/search");
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
.category-header {
  width: 100%;
  height: 4.4rem;

  header {
    width: 100%;
    height: 4.4rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 2;
    display: flex;
    border-bottom: 1px solid #ccc;
    a {
      display: block;
      width: 15%;
      height: 4.4rem;
      text-align: center;
      line-height: 4.4rem;
    }
    form {
      width: 80%;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #efefef;
        margin-top: 0.7rem;
        text-indent: 1rem;
        border-radius: 1.5rem;
      }
      i {
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>