<template>
  <div class="registwrap">
    <div class="header">
      <div class="getBack">
        <router-link to="main">
          <a href="javascript:;" class="back"></a>
        </router-link>
        <a href="javascript:;" class="regist">注册</a>
      </div>
      <div class="logo">
          <img src="./logo.png">
      </div>
    </div>
    <div class="login">
      <mt-navbar v-model="selected" class="top">
        <mt-tab-item id="1" class="left">普通登录</mt-tab-item>
        <mt-tab-item id="2" class="right">手机动态密码登录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" class="bottom">
        <mt-tab-container-item id="1" class="input">
          <ul>
            <li>
              <span class="nameIcon"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" name="username" class="text">
            </li>
            <li>
              <span class="passwordIcon"></span>
              <input type="text" placeholder="输入密码" name="username" class="text">
            </li>
          </ul>
        </mt-tab-container-item>

        <mt-tab-container-item id="2" class="input">
          <ul>
            <li>
              <span class="phoneIcon"></span>
              <input type="text" placeholder="已注册的手机号" name="username" class="text" v-model="phone">
            </li>
            <li>
              <span class="imgverify"></span>
              <input type="text" placeholder="请输入图片内容" name="username" class="text">
              <span style="display:block;position: absolute;top:5px;right:0px;">
                <img src="./seccode.png">
              </span>
            </li>
            <li>
              <span class="dpasswordIcon"></span>
              <input type="text" placeholder="动态密码" name="username" class="text" v-model="code">
              <a href="javascript:;" class="get_phonepass" @click="sendCode">获取动态密码</a>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
      <div class="forget">
        <a href="javascript:;">忘记密码？</a>
      </div>
      <div class="button">
        <a href="javascript:;" @click="login">登录</a>
      </div>
      <!--<p>登录状态：{{status}}</p>-->
    </div>
    <div class="advertising">
      <div class="partners">
        <span class="partners">合作网站登录</span>
      </div>
      <ul class="partnersUl">
        <li class="partnersLi">
          <a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https%3A%2F%2Fwap.epet.com%2Fwappms%2Fpms.html%3Ffw%3D0" class="partnersA">
            <img src="//static.epetbar.com/mpet/images/login/login_ico4.png" class="partnersImg">
          </a>
        </li>
        <li class="partnersLi">
          <a href="https://passport.epet.com/Oauth.html?type=2&returnurl=https%3A%2F%2Fwap.epet.com%2Fwappms%2Fpms.html%3Ffw%3D0" class="partnersA">
            <img src="//static.epetbar.com/mpet/images/login/login_ico2.png" class="partnersImg">
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import Vue from  'vue'
  import { Navbar, TabItem } from 'mint-ui';
  import axios from 'axios'

  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  export default {
    data () {
      return {
        selected:'1',
        phone: '',
        code: '',
        status: '未登陆'
      }
    },
    methods: {
      sendCode() {
        const url = `/api1/sendcode?phone=${this.phone}`
        axios.get(url).then(response => {
          console.log('sendcode result ', response.data)
        })
        console.log('aaaa')
      },

      login() {
        axios.post('/api1/login', {phone: this.phone, code: this.code}).then(response => {
          console.log('login result ', response.data)
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            this.status = `登陆成功: ${user.phone}`
          } else {
            this.status = `登陆失败, 请输入正确的手机号和验证码`
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .registwrap
    .header
      position relative
      display block
      background url("./bg.png") no-repeat
      background-size 100% 100%
      height 175px
      .getBack
        height: 50px;
        line-height: 50px;
        position: relative;
        padding: 0 1em;
        .back
          background url("./arrow.png")no-repeat
          background-size 12px 17px
          folat left
          width: 22px;
          height: 20px;
          position: absolute;
          margin-top: 16px;
        .regist
          float right
          font-size 16px
          color: #ffffff
      .logo
        padding: 1em 0 2em 0;
        position: relative
        img
          display block
          margin auto
          vertical-align: middle;
          width 20%
    .login
      position: relative
      top -44px
      .top
        background rgba(255,255,255,.3)
        .left
          color white
          font-size 15px
          padding:16px 0
        .right
          color white
          font-size 15px
          padding:16px 0
      .bottom
        margin: 1em 4% 1em 4%;
        padding: 0 1.6%;
        .input
          ul
            li
              position: relative
              border-bottom: #e2e2e2 solid 1px;
              padding: 12px 0 12px 30px;
              .nameIcon
                float left
                display: inline;
                position absolute
                top 12px
                width: 17px;
                height: 21px;
                background: url(./user.png) no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .passwordIcon,.imgverify
                float: left;
                display: inline;
                position: absolute;
                top: 12px;
                width: 17px;
                height: 21px;
                background: url('./lock.png') no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .dpasswordIcon
                float: left;
                display: inline;
                position: absolute;
                top: 12px;
                width: 17px;
                height: 21px;
                background: url('./lock.png') no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .phoneIcon
                float left
                display: inline;
                position absolute
                top 13px
                width: 17px;
                height: 21px;
                background: url(./phone.png) no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .text
                display: block;
                height: 21px;
                width: 100%;
                font-size: 14px;
                border: none;
                padding: 0px;
                color: #666;
                font-family: "Microsoft Yahei",tahoma,arial;
                outline: none
              .get_phonepass
                background: #fff;
                color: #ff4259;
                border: 1px solid #eb4c33;
                position: absolute;
                right: 0;
                top: 0.5em;
                border-radius: 3px;
                width: 100px;
                text-align: center;
                padding: 0.3em 0;
      .forget
        padding-left: 2em;
        padding-right: 2em;
        height 20px
        a
          float right
      .button
        margin-top 10px
        a
          display: block;
          letter-spacing: 5px;
          margin: 0 4%;
          border-radius: 5px;
          background: #2ec975;
          font-size: 15px;
          padding: .6em 0;
          text-align: center;
          color #fff
    .advertising
      margin-top 50px
      .partners
        color: #d7d7d7;
        margin-top: 0.5em;
        font-size: 16px;
        text-align: center;
    .partnersUl
      padding 1.5em 0
      .partnersLi
        width: 33.3%;
        padding: 0 1.2em;
        float: left;
        display: inline;
        .partnersA
          display: block;
          .partnersImg
            width: 60%;
            height: auto;
            display: block;
            margin: auto;
            max-width: 176px;



</style>
