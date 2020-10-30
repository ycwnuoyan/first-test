<template>
  <div class="register">
    <div class="outer7">
        <h4>注册</h4>
        <form action="">
            <div class="div">
                <input type="text" name="username" placeholder="手机/邮箱/用户名">
            </div>
            <div class="div div1">
                <input type="text" name="code" placeholder="手机验证码">
                <span class="sp2">获取验证码</span>
            </div>
            <div class="div">
                <input type="password" name="password" placeholder="设置密码">
            </div>
            <div class="div">
                <input type="password" name="repassword" placeholder="确认密码">
            </div>
            <div class="inter1">
                <span>已有账号，请</span><router-link to="/login">直接登录</router-link>
            </div>
            <input type="submit" value="注册" id="submit">
        </form>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from "./bottom.vue"
  export default{
    components:{
      bottom
    },
  }
</script>

<style>
  .register{
    position: absolute;
    top: 68px;
    width: 100%;
    background-image: url("../assets/images/background.png");
    background-repeat: no-repeat;
  }
  .outer7{
      width: 300px;
      /*height: 326px;*/
      background-color: #ffffff;
      margin: 100px auto;
      padding: 30px;
  }
  .outer7 h4{
      font-size: 18px;
      margin: 0 0 24px;
      font-weight: normal;
  }
  .outer7 form{
      width: 300px;
      /*height: 198px;*/
      /*background-color: #795da3;*/
  }
  .outer7 form .div,.div1{
      position: relative;
  }
  .outer7 form .div1{
      display: none;
  }
  .outer7 form input{
      margin-bottom: 20px;
      width: 100%;
      height: 42px;
      padding-left: 20px;
      border: 0.5px solid #e6e6e6;
      border-radius: 5px;
  }
  .outer7 form input:hover{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }
  .outer7 form input:focus{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }
  .outer7 form .sp2{
      position: absolute;
      top: 1px;
      right: 10px;
      width: 100px;
      /*height: 40px;*/
      line-height: 40px;
      text-align: center;
      border-left: 0.5px dashed #e6e6e6;
  }
  .outer7 form .inter1{
      width: 300px;
      height: 16px;
      /*background-color: #FF5000;*/
      font-size: 12px;
      margin-bottom: 10px;
  }
  .outer7 form .inter1 span{
      color: #b0b0b0;
  }
  .outer7 form .inter1 a{
      color: #333;
  }
  .outer7 form #submit{
      background: #C78A49;
      color: #ffffff;
      font-size: 18px;
  }
</style>
