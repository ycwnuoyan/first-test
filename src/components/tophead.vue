<template>
  <div class="tophead">
    <div class="headcontent">
      <img src="../assets/icon/roit.png" class="logo" />
      <div class="navigation_bar">
         <ul>
           <li><router-link to="/index">首页</router-link></li>
           <li><router-link to="/allproducts">所有产品</router-link></li>
         </ul>
      </div>
      <div class="search_bar">
        <input placeholder="请输入商品名称搜索"/>
        <svg class="search_icon" aria-hidden="true">
            <use xlink:href="#iconicon-search"></use>
        </svg>
      </div>
      <div class="user_bar" v-show="false">
        <router-link to="/login">
          登录
        </router-link>
        <span>|</span>
        <router-link to="/register">
          注册
        </router-link>
        <router-link to="/shoppingcart">
          <p>0</p>
          <svg class="cart_icon" aria-hidden="true">
              <use xlink:href="#iconziyuan"></use>
          </svg>
        </router-link>
      </div>
      <div class="user_bar">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            17816120331<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command = "a">个人中心</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>|</span>
        <router-link to="/login">
          退出登录
        </router-link>
        <router-link to="/shoppingcart">
          <p>0</p>
          <svg class="cart_icon" aria-hidden="true">
              <use xlink:href="#iconziyuan"></use>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      handleCommand(command) {
        //this.$message('click on item ' + command);
        this.$router.push('/personalcenter')
      },
      goPersonal(){
        console.log(100)
        this.$router.push('/personalcenter')
      }
    }
  }
</script>
<style>
  .tophead .el-dropdown-link {
      cursor: pointer;
    }
  .tophead  .el-icon-arrow-down {
      font-size: 12px;
    }
  .tophead{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 68px;
    background-color: #FFFFFF;
    z-index: 99;
    border-bottom: 2px solid #F2F2F2;
    /*margin: 0 auto;*/
}
  .tophead .headcontent{
    width: 1140px;
    height: 68px;
    margin: 0 auto;
  }
  .tophead .logo{
    margin-top: 9px;
    float: left;
    width: 121px;
    height: 50px;
  }
  .tophead .navigation_bar{
    float: left;
    width: 30%;
    margin-left: 80px;
    height: 68px;
  }
  .navigation_bar ul{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .navigation_bar ul li{
    float: left;
    list-style: none;
    padding: 0 28px;
    height: 68px;
    line-height: 68px;
  }
  .navigation_bar ul li:hover{
    background-color: #E6D6C6;
  }
  .navigation_bar li:hover{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }
  .navigation_bar li:focus{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }
  .navigation_bar ul li a{
      color: #555;
  }
  .search_bar{
    float: left;
    width: 300px;

    height: 68px;
    line-height: 68px;
  }
  .search_bar input{
    border: 0;
    width: 80%;
    text-align: center;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #e6e6e6;
  }
  .search_bar input:hover{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }
  .search_bar input:focus{
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #E6D6C6
  }
  .search_icon {
    float: right;
    margin-top: 24px;
    width: 25px; height: 25px;
  }
  .user_bar{
    float: right;
    width: 20%;
    height: 100%;
    line-height: 68px;
  }
  .user_bar a{
    color: #555;
    font-size: 14px;
  }
  .cart_icon{
    float: right;
    margin-top: 24px;
    width: 20px; height: 20px;
  }
  .user_bar p{
    float: right;
    margin-left: 10px;
  }

</style>
