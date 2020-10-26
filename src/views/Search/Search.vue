<!-- 搜索组件 -->
<template>
  <div class="search">
    <div class="search-head">
      <a href="javascript:;" onclick="window.history.back()"
        ><i class="iconfont icon-jiantou3"></i
      ></a>
      <form>
        <input type="text" v-model="Keywords" />
      </form>
      <!-- <a href="javascript:;" @click="searchList">搜索</a> -->
      <div @click="searchList" class="sss">
        <a href="javascript:;">搜索</a>
      </div>
    </div>
    <div class="search-box">
      <div class="title">
        <span>最近搜索</span>
        <a href="javascript:;">
          <i class="iconfont icon-shanchu"></i>
        </a>
      </div>
      <div class="tag">
        <span> <a href="javascript:;">暂无</a></span>
      </div>
    </div>
    <div class="search-box hot">
      <div class="title">
        <span>热搜</span>
      </div>
      <div class="tag">
        <span> <a href="javascript:;">周大福</a></span>
        <span> <a href="javascript:;">内衣</a></span>
        <span> <a href="javascript:;">Five Plus</a></span>
        <span> <a href="javascript:;">手机</a></span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      Keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchList() {
      if (this.Keywords != "") {
        this.$router.push("/searchlist");
        this.$store.dispatch("actgetSearchList", { keywords: this.Keywords });
      }
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
.search {
  width: 100%;
  height: 4.4rem;

  background: #fff;
  .search-head {
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
        border: 1px solid #ddd;
        margin-top: 0.7rem;
        text-indent: 1rem;
        border-radius: 1.5rem;
      }
    }
    .sss {
      width: 15%;
      a {
        width: 100%;
      }
    }
  }
  .search-box {
    margin-top: 5.4rem;
    .title {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 1.5rem;
        margin-left: 3%;
      }
      a {
        margin-right: 3%;
      }
    }
    .tag {
      margin-top: 1rem;
      width: 94%;
      margin-left: 3%;
      display: flex;
      flex-wrap: wrap;
      span {
        margin-left: 2%;
        margin-right: 2%;
        a {
          height: 2rem;
          line-height: 2rem;
          font-size: 1.3rem;
          border-radius: 3px;
          display: block;
          width: 100%;
          color: #686868;
          white-space: nowrap;
          text-overflow: ellipsis;
          background-color: #f0f2f5;
          padding: 0 1rem;
          overflow: hidden;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
      }
    }
  }
  .hot {
    margin-top: 3rem;
  }
}
</style>