<!-- 内容右组件 -->
<template>
  <div class="content-right">
    <div class="right" v-show="show">
      <div class="right-ad">
        <a href="javascript:;">
          <img :src="this.$store.state.adsrc" alt="" />
        </a>
      </div>
      <div v-for="lists in categoryRightData" :key="lists.cat_id">
        <h3>- {{ lists.cat_name }} -</h3>
        <ul>
          <li v-for="list in lists.child" :key="list.cat_id">
            <router-link :to="'/listinfo?cat_id=' + list.cat_id">
              <a href="javascript:;">
                <img
                  src="https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg"
                  alt=""
                />
              </a>
              <p>{{ list.cat_name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading" v-show="!show">加载中</div>
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
    categoryRightData() {
      return this.$store.state.categoryRightData;
    },
    show() {
      return this.$store.state.loading;
    },
  },
  //监控data中的数据变化

  //方法集合
  methods: {
    // getData(cid) {
    //   Axios.get(`/api/v1/category/categorylist/${cid}`).then((res) => {
    //     // console.log(res.data.data);
    //     if (res.status == 200) {
    //       this.categoryRightData = res.data.data;
    //       var arr = this.$store.state.categoryLeftData.filter((item) => {
    //         return item.category_id == cid;
    //       });
    //       this.adsrc = arr[0].menu_img;
    //     }
    //   });
    // },
    getData(cid) {
      this.$store.dispatch("actgetCategoryRightData", cid);
    },
  },
  watch: {
    $route(to) {
      console.log(to);
      var cid = to.params.cid;
      this.getData(cid);

      // var arr = this.$store.state.categoryRightData.filter((item) => {
      //   return item.category_id == cid;
      // });
      // console.log(arr);
      // this.adsrc = arr[0].menu_img;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.$route);
    this.getData("858");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.content-right {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .right {
    .right-ad {
      width: 100%;
      margin-bottom: 1rem;
      a {
        img {
          width: 90%;
          margin-left: 5%;
        }
      }
    }
    div {
      h3 {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        font-weight: normal;
        margin-bottom: 1rem;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
      }
      li {
        width: 33%;
        height: 8.2rem;
        margin-bottom: 1rem;
        a {
          img {
            width: 5.2rem;
            height: 5.2rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
</style>