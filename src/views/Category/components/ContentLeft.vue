<!-- 内容左组件 -->
<template>
  <div class="content-left">
    <div class="left" ref="ul">
      <ul>
        <li
          v-for="(list, index) in categoryLeftData"
          :key="list.category_id"
          @click="changeTop(index)"
        >
          <router-link :to="'/category/' + list.category_id">{{
            list.menu_name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    categoryLeftData() {
      return this.$store.state.categoryLeftData;
    },
  },
  //监控data中的数据变化

  watch: {},
  //方法集合
  methods: {
    // getListDatas() {
    //   Axios.get("/api/v1/category").then((res) => {
    //     // console.log(res.data.data);
    //     if (res.data.status == 200) {
    //       this.$store.dispatch("getData", res.data.data);
    //     }
    //   });
    // },
    changeTop(index) {
      // console.log(this.$refs.ul.style.scrollTop);
      this.$refs.ul.style.scrollTop = 3.8 * (index + 1) + "rem";
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getListDatas();
    this.$store.dispatch("actgetCategoryLeftData");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.content-left {
  height: 100%;
  .left {
    width: 8.4rem;
    height: 100%;
    background: #eee;
    position: relative;
    // top: 4.4rem;
    // left: 0;

    overflow-y: scroll;
    ul {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;

      li {
        // width: 100%;
        height: 3.8rem;
        text-align: center;
        line-height: 3.8rem;
        a {
          width: 100%;
          height: 100%;
          display: block;
        }
        .router-link-active {
          background: red;
          color: #fff;
        }
      }
    }
  }
}
</style>