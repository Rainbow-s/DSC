<!-- 手机登录组件 -->
<template>
  <div class="xs-login">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="login-inner">
      <div class="login-tab">
        <a href="javascript:;" :class="{ active: actFlag }" @click="changeAct">
          短信登录</a
        >
        <a href="javascript:;" :class="{ active: !actFlag }" @click="changeAct"
          >账号登录</a
        >
      </div>
      <!-- 短信登录 -->
      <div v-if="loginFlag">
        <section>
          <input
            type="tel"
            placeholder="请输入手机号"
            maxlength="11"
            v-model="phone"
          />
          <button class="getCode" v-if="!num" @click="getCodeFn">
            获取验证码
          </button>
          <button class="getCode" v-else>已发送{{ num }}s</button>
        </section>
        <section>
          <input type="text" placeholder="验证码" />
        </section>
      </div>
      <!-- 账号密码登录 -->
      <div v-else>
        <section>
          <input
            type="text"
            placeholder="用户名/手机号/邮箱"
            v-model="user_name"
          />
        </section>
        <section>
          <input
            type="password"
            placeholder="请输入密码"
            v-if="hidepsd"
            v-model="pass"
          />
          <input type="text" placeholder="请输入密码" v-else v-model="pass" />
          <button
            v-if="hidepsd"
            class="iconfont icon-yincang"
            @click="changeHide"
          ></button>
          <button
            v-else
            class="iconfont icon-xianshi"
            @click="changeHide"
          ></button>
        </section>
        <section>
          <input
            type="text"
            name=""
            id=""
            v-model="captcha"
            placeholder="验证码"
          />

          <img
            ref="captcha"
            alt=""
            src="http://localhost:3000/api/v1/users/captcha"
            @click="getCaptcha"
          />
        </section>
      </div>
      <!-- 登录按钮 -->
      <button class="login-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginFlag: true,
      actFlag: true,
      num: 0,
      hidepsd: true,
      phone: "",
      user_name: "",
      pass: "",
      captcha: "",
      timer: "",
      loginData: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
    istruePhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeHide() {
      //改变显示隐藏密码
      this.hidepsd = !this.hidepsd;
    },
    changeAct() {
      // 改变登录方式按钮
      this.actFlag = !this.actFlag;
      this.loginFlag = !this.loginFlag;
    },
    getCaptcha() {
      //验证码图片
      this.$refs.captcha.src =
        "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
    },
    getCodeFn() {
      //获取验证码
      if (this.istruePhone) {
        this.num = 10;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机号格式不正确",
          duration: 3000,
        });
      }
    },
    // 获取用户信息
    async login() {
      //登录方法
      if (!this.user_name) {
        Toast({
          message: "用户名/邮箱/手机号",
        });
        return;
      } else if (!this.pass) {
        Toast({
          message: "密码不正确",
        });
        return;
      } else if (!this.captcha) {
        Toast({
          message: "验证码不正确",
        });
        return;
      }
      // else {
      //   Toast("欢迎" + this.user_name + "回来");
      // }
      const result = await loginuser(this.user_name, this.pass, this.captcha);
      console.log(result);

      if (result.data.status == 200) {
        this.$store.dispatch("actgetUserInfo", result.data.data[0]);
        this.$router.push("/mine");
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
.xs-login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 10rem;
    height: 10rem;
    border: 5px solid skyblue;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .login-inner {
    width: 85%;
    .login-tab {
      width: 100%;
      height: 4.4rem;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      a {
        display: block;
        width: 45%;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        color: #fff;
        background: #ccc;
      }
      .active {
        background: #f00;
      }
    }
    section {
      margin-top: 1rem;
      position: relative;
      input {
        width: 100%;
        height: 4.4rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-indent: 1rem;
      }
      button {
        position: absolute;
        top: 50%;
        right: 1rem;
        background: transparent;
        transform: translateY(-50%);
        color: #666;
      }
      img {
        position: absolute;
        right: 10px;
        top: 50%;
        height: 4rem;
        transform: translateY(-50%);
        background: transparent;
        font-size: 1.4rem;
        color: #666;
      }
    }
    .login-btn {
      width: 100%;
      background: #f00;
      color: #fff;
      font-size: 1.4rem;
      height: 4.4rem;
      margin-top: 1rem;
    }
  }
}
</style>