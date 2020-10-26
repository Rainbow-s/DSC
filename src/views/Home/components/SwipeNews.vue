<!-- 滚动新闻 -->
<template>
  <div class="swipe-news">
    <div class="news-title">
      <img :src="img" alt="" />
    </div>
    <ul ref="ul" :class="{ 'news-list': true, trans: flag == true }">
      <li v-for="list in newsData" :key="list.id">
        {{ list.title }}
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import img from "@/assets/images/news-title.png";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      img: img,
      flag: false,
      timer: "",
      newsData: [
        {
          id: "1",
          title: "新闻1",
        },
        {
          id: "2",
          title: "新闻2",
        },
        {
          id: "3",
          title: "新闻3",
        },
        {
          id: "4",
          title: "新闻4",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    Scrollnews() {
      var ul = this.$refs.ul;
      ul.style.marginTop = "-5rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.newsData.push(this.newsData[0]); //将数组的第一个元素添加到数组末尾
        this.newsData.shift();
        ul.style.marginTop = "0";
        this.flag = !this.flag;
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.Scrollnews, 2000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.swipe-news {
  display: flex;
  height: 5rem;
  border: 1px solid #efefef;
  margin-top: 10px;
  overflow: hidden;
  .news-title {
    img {
      height: 3rem;
      margin-top: 1rem;
    }
  }
  .trans {
    transition: all 0.5s;
  }
  .news-list {
    margin-left: 2rem;
    li {
      height: 5rem;
      line-height: 5rem;
      font-size: 1.4rem;
    }
  }
}
</style>