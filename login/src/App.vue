<template>
  <div id="app">
    <div id="loginInfo">
      <mu-container class="login-container">
        <mu-row>
          <mu-col span="1" sm="2" md="3" xl="1"></mu-col>
          <mu-col span="7"class="main-content"></mu-col>
          <mu-col span="12" sm="8" md="6" xl="3">
            <mu-card class="card-info" v-loading="loading2"
                     data-mu-loading-overlay-color="rgba(0,0, 0, .4)" data-mu-loading-color="#fff"
                     data-mu-loading-text="login">
              <!--<h1>二十一世纪商务平台</h1>
              <h2>21st Business Platform</h2>-->
              <h1 v-if="active3 === 0">账号登录</h1>
              <h1 v-if="active3 === 1">微信扫码登录</h1>
              <!--账号登录-->
              <mu-form ref="form" :model="validateForm" class="mu-demo-form mu-transition-box " v-if="active3 === 0">
                <mu-form-item label="" help-text="" prop="username" :rules="usernameRules">
                  <mu-text-field v-model="validateForm.username" prop="username" placeholder="用户名"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="" prop="password" :rules="passwordRules">
                  <mu-text-field type="password" v-model="validateForm.password" prop="password"
                                 placeholder="密码"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="" prop="checkCode" :rules="checkCodeRules">
                  <mu-text-field class="from-checkCode" type="checkCode" v-model="validateForm.checkCode"
                                 prop="checkCode"
                                 placeholder="验证码"></mu-text-field>
                  <div class="from-check-wrap">
                    <img src="../src/assets/img/checkCode.png" alt="验证码">
                  </div>
                </mu-form-item>
                <mu-form-item>
                  <mu-button color="primary" @click="loading()">Login</mu-button>
                </mu-form-item>
              </mu-form>

              <!--微信登录-->
              <div class="wechat" v-if="active3 ===1">
                <img src="../src/assets/img/qrcode.jpg" alt="" style="width: 188px;height: 188px;">
              </div>

              <div id="outside-login">
                <div class="outside-login-title"><span class="text2">其他登录方式</span></div>
                <mu-tabs :value.sync="active3" center color="teal" indicator-color="transparent"
                         :inverse="true" :full-width="false">
                  <mu-tab :ripple="true">
                    <i class="fa fa-user text2"></i>
                  </mu-tab>
                  <mu-tab :ripple="true">
                    <i class="fa fa-wechat text2"></i>
                  </mu-tab>
                </mu-tabs>
              </div>
              <div class="login-content">
                <div class="login-content-item no-line"><a href="#" class="text2">立即注册</a></div>
                <div class="login-content-item "><a href="#" class="text2">忘记账号</a></div>
                <div class="login-content-item"><a href="#" class="text2">忘记密码</a></div>
              </div>
            </mu-card>
          </mu-col>
          <mu-col span="1" sm="2" md="3" xl="1"></mu-col>
        </mu-row>
      </mu-container>
    </div>
    <div id="footer">
      <div class="copyright">
        <mu-row>
          <mu-col span="1"></mu-col>
          <mu-col span="12" sm="12" xl="7">
          </mu-col>
          <mu-col span="12" sm="12" xl="3" class="copyright_content">
            <p class="text4 inline">Copyright © 2017-2018 Redpaper.</p>
            <p class="text4 inline">ALL Rights Reserved</p>
            <p class="recordCode"><a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank"
              class="text4"><i></i>京公网安备11000002000001号</a>
            </p>
          </mu-col>
          <mu-col span="1"></mu-col>
        </mu-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        checkCodeRules: [
          {validate: (val) => !!val, message: '必须填写验证码'},
          {validate: (val) => val.length === 4, message: '验证码长度为4'}
        ],
        validateForm: {
          username: '',
          password: '',
          checkCodeRules: '',
        },
        active3: 0,
        loading2: false,
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      clear() {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          checkCodeRules: '',
        };
      },
      loading() {
        this.loading2 = true;
        setTimeout(() => {
          this.loading2 = false;
        }, 2000)
      },
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 100%;
    }
  }

  #app {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #loginInfo {
    position: relative;
  }

  .login-container {
    position: relative;
  }

  .card-info {
    position: absolute;
    top: 60px;
    width: 100%;
    padding: 24px 24px 24px 24px;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
  }

  .card-info h1 {
    font-weight: normal;
  }

  .mu-form-item .mu-button {
    width: 100%;
    margin: 0;
  }

  .from-checkCode {
    width: calc(100% - 135px) !important;
  }

  .from-check-wrap {
    height: 40px;
    line-height: 40px;
    position: absolute;
    right: 0px;
    top: -8px;
  }

  .from-check-wrap img {
    cursor: pointer;
  }

  #footer {
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-right: -10px;
    bottom: 80px;
  }

  .copyright {
    font-size: 14px;
    color: #e9edf2;
  }

  .copyright a {
    font-size: 14px;
  }

  /*tab切换样式*/
  @media (min-width: 960px) {
    .mu-tab {
      min-width: 72px;
    }
  }

  .mu-tabs-inverse {
    background: transparent;
  }

  #outside-login .fa {
    font-size: 24px;
  }

  .mu-tab-active .fa-wechat {
    color: #25be03;

  }

  .mu-tab-active .fa-user {
    color: #12b7f5;
  }

  .wechat {
    margin-bottom: 20px;
  }

  .outside-login-title {
    margin-bottom: 10px;
    color: #999;
    line-height: 20px;
  }

  .login-content-item {
    position: relative;
    display: inline-block;
    padding: 0 15px;
    line-height: 20px;
  }

  .login-content-item:after {
    content: '';
    height: 100%;
    width: 1px;
    position: absolute;
    background-color: #e5e5e5;
    top: 0;
    left: -1px;
  }

  .login-content-item, .no-line:after {
    content: none;
  }

  .login-content-item {
    margin-top: 20px;
  }

  .login-content-item a:hover {
    color: #00a4ff;
  }

  .flex-wrapper {
    width: 100%;
  }

  .recordCode {
    text-align: center;
  }

  .recordCode i {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    background: url(../src/assets/img/ghs.png) no-repeat;
    background-size: 90% 90%;
    vertical-align: middle;
  }

  .copyright_content {
    text-align: center;
  }

  /*文字*/
  .text1 {
    color: #303133;
  }

  .text2 {
    color: #606266;
  }

  .text3 {
    color: #909399;
  }

  .text4 {
    color: #C0C4CC;
  }

  .inline {
    display: inline-block;
  }

  @media (max-width: 1273px) and (min-width: 1200px) {
    .login-content-item {
      padding: 0 10px;
    }
  }


  @media (max-width: 1199px) {
    .main-content{
      display: none;
    }
  }

  @media (max-width: 575px ) {
    .card-info {
      top: 8px;
    }

    .copyright {
      border: none;
      text-align: center;
    }

    #footer {
      bottom: 80px;
      height: 35px;
      line-height: 35px;
    }
  }

  /*小于414px换样式*/
  @media (max-width: 414px) {
    .login-content-item {
      display: block;
      position: static;
      margin-top: 10px;
    }

    #footer {
      bottom: 55px;
      height: 25px;
      line-height: 25px;
    }

    .inline {
      display: block;
    }
  }

</style>

