<!-- 秒杀 -->
<template>
  <div class="miao-sha">
    <div class="wrap">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp"
        alt=""
      />
    </div>
    <div class="time">{{ day }}天 {{ hour }}时 {{ minute }}分 {{ sec }} 秒</div>
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
    return {
      day: "0",
      hour: "0",
      minute: "0",
      sec: "0",
      timer: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    timeFn() {
      var date = +new Date();
      //   设置一个截止时间
      var endTime = +new Date("2020-11-10 0:00:00");
      var oTime = endTime - date;
      if (oTime > 0) {
        this.day = Math.floor(oTime / 1000 / 60 / 60 / 24);
        this.hour = Math.floor((oTime / 1000 / 60 / 60) % 24);
        this.minute = Math.floor((oTime / 1000 / 60) % 60);
        this.sec = Math.floor((oTime / 1000) % 60);
        this.day = String(this.day).padStart(2, "0");
        this.hour = String(this.hour).padStart(2, "0");
        this.minute = String(this.minute).padStart(2, "0");
        this.sec = String(this.sec).padStart(2, "0");
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.timeFn, 1000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.miao-sha {
  width: 100%;
  height: 5.2rem;
  margin: 1rem 0 1rem 0;
  //   background: rebeccapurple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #efefef;
  .wrap {
    img {
      height: 3rem;
      width: 10rem;
    }
  }
  .time {
    font-size: 1.4rem;
    color: #f00;

    font-weight: 700;
  }
}
</style>