<template>
  <div class="login">
    <div class="outer6">
        <h4>登录</h4>
        <form action="">
            <div class="div">
                <input type="text" name="username" placeholder="手机/邮箱/用户名">
                <!-- <span id="s1">手机/邮箱/用户名</span> -->
            </div>
            <div  class="div">
                <input type="password" name="password" placeholder="登录密码">
               <!-- <span id="s2">登录密码</span> -->
            </div>
            <div class="inter1">
                <router-link to="/register" class="registerbtn">注册</router-link>
                <a href="./忘记密码.html" class="right">忘记密码</a>
            </div>
            <input type="submit" value="登录" id="submit">
        </form>
        <div>

        </div>
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
  .login{
    position: absolute;
    top: 68px;
    width: 100%;
    background-image: url("../assets/images/background.png");
    background-repeat: no-repeat;
  }
  .outer6{
      width: 300px;
      height: 306px;
      background-color: #ffffff;
      margin: 100px auto;
      padding: 30px;
  }
  .outer6 h4{
      font-size: 18px;
      margin: 0 0 24px;
      font-weight: normal;
  }
  .outer6 form{
      width: 300px;
      height: 198px;
      /*background-color: #795da3;*/
  }
  .outer6 form .div{
      position: relative;
  }
  .outer6 form input{
      margin-bottom: 20px;
      width: 100%;
      height: 42px;
      border: 0.5px solid #e6e6e6;
      padding-left: 20px;
      border-radius: 5px;
  }
  .outer6 form input:hover{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }
  .outer6 form input:focus{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }

  .outer6 form .inter1{
      width: 300px;
      height: 16px;
      font-size: 12px;
      margin-bottom: 10px;
  }
  .outer6 form .inter1 a{
      color: #333;
  }
  .outer6 form .inter1 .registerbtn{
    float: left;
    margin-left: 20px;
  }
  .outer6 form .inter1 .right{
      float: right;
  }
  .outer6 form #submit{
      background: #C78A49;
      color: #ffffff;
      font-size: 18px;
  }
</style>
