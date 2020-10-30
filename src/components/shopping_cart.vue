<template>
  <div class="shopping_cart">
    <div class="outer9">
        <div class="inter1">
            <h1>购物车</h1>
        </div>
        <div class="inter2">
            <div class="inter21">
                <input type="checkbox" class="checkAll"><span class="s1">全选</span>
                <span class="s2">商品名称</span><span class="s3">单价</span>
                <span class="count">数量</span><span class="total">小计</span><span class="del">操作</span>
            </div>
            <div class="inter22">
                <ul>
                    <li>
                        <input type="checkbox" class="check"><img src="../assets/images/s1.png" alt="">
                        <span class="s1">经典系列红色时钟</span><span class="money">¥</span>
                        <span class="price">580</span><input type="button" value="-" class="sub">
                        <span class="count">1</span><input type="button" value="+" class="add">
                        <span class="money1">¥</span><span class="total">580</span>
                        <span class="del">删除</span>
                    </li>
                    <li>
                        <input type="checkbox" class="check"><img src="../assets/images/s2.png" alt="">
                        <span class="s1">便携简约清扫扫帚</span><span class="money">¥</span>
                        <span class="price">580</span><input type="button" value="-" class="sub">
                        <span class="count">1</span><input type="button" value="+" class="add">
                        <span class="money1">¥</span><span class="total">580</span>
                        <span class="del">删除</span>
                    </li>
                    <li>
                        <input type="checkbox" class="check"><img src="../assets/images/s3.png" alt="">
                        <span class="s1">黑色陶瓷研磨器皿</span> <span class="money">¥</span>
                        <span class="price">150</span><input type="button" value="-" class="sub">
                        <span class="count">1</span><input type="button" value="+" class="add">
                        <span class="money1">¥</span><span class="total">150</span>
                        <span class="del">删除</span>
                    </li>
                </ul>
            </div>
            <div class="inter23">
                <div class="picture">
                    <img src="../assets/images/购物车.png" alt="">
                </div>
                <p>您的购物车还没有商品，快去挑选心爱的商品吧！</p>
                <a href=""><span>去逛逛</span></a>
            </div>
        </div>
        <div class="inter3">
            <div class="inter31">
                <div class="last">
                    <router-link to="/payment">确认结算</router-link>
                </div>
                <input type="checkbox" class="checkAll"><span class="s1">全选</span>
                <span class="ss1">删除</span><span class="ss2">清除下架商品</span>
                <div class="foot">
                    已选<span class="totalCount">0</span>件
                    合计(不含运费) : <span class="totalPrice">¥0</span>元<br>
                    <span class="ss3">已优惠 : <span class="ss4"> ¥0</span></span>
                </div>
            </div>
        </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from "./bottom.vue"
  import $ from 'jquery'
  export default{
    components:{
      bottom
    },
    mounted() {
      //全选
      $(".checkAll").click(function () {
          if($(this).prop("checked")){
              $(":checkbox").prop("checked",true);
          }
          else{
              $(":checkbox").prop("checked",false);
          }
          lTotal();
      });
      //单选
      $(".check").click(function () {
          console.log($(".outer9 ul :checked").length);
          console.log($(".outer9 ul li").length);
          if($(".outer9 ul :checked").length === $(".outer9 ul li").length){
              $(".checkAll").prop("checked",true);
          }
          else{
              $(".checkAll").prop("checked",false);
          }
          lTotal();
      });
      //数量加
      $("ul").on("click",".add",function () {
          var count = parseInt($(this).siblings(".count").html()) + 1;
          console.log(count);
          $(this).siblings(".count").html(count);
          total(this);
          lTotal();
      });
      //数量减
      $("ul").on("click",".sub",function () {
          var count = parseInt($(this).siblings(".count").html()) - 1;
          $(this).siblings(".count").html(count);
          total(this);
          lTotal();
      });
      //小计
      function total(ele) {
          var price = parseInt($(ele).siblings(".price").html());
          var count = parseInt($(ele).siblings(".count").html());
          var total = price * count;
          $(ele).siblings(".total").html(total);
      }
      //总计
      function lTotal() {
          var totalCount = 0;
          var totalPrice = 0;
          $("ul :checked").each(function () {
              totalCount += parseInt($(this).siblings(".count").html());
              totalPrice += parseInt($(this).siblings(".total").html());
          });
          $('.totalCount').html(totalCount);
          $('.totalPrice').html(totalPrice);
      }
      //删除
      $(".outer9 .del").click(function () {
          $(this).parents("li").remove();
          if( $(".outer9 ul li").length === 0){
              $(" .outer9 .inter3").hide();
              $(" .outer9 .inter22").hide();
              $(".outer9 .checkAll").prop('checked',false);
              $(" .outer9 .inter23").show();
          }
      });
      $(".outer9 .ss1").click(function () {
          ($("ul :checked")).parents("li").remove();
          if( $(".outer9 ul li").length === 0){
              $(" .outer9 .inter3").hide();
              $(" .outer9 .inter22").hide();
              $(" .outer9 .inter23").show();
          }
      });


    }
  }
</script>

<style>
  .shopping_cart{
    position: absolute;
    top: 68px;
    width: 100%;
  }
  .outer9{
      width: 100%;
      height: 100%;
      background-color: #F2F2F2;
  }
  .outer9 .inter1{
      margin: 0 auto;
      width: 1120px;
      height: 94px;

  }
  .outer9 .inter1 h1{
      font-weight: normal;
      text-align: left;
      padding-top: 40px;

  }
  .outer9 .inter2{
      width: 1120px;
      height: 492px;
      /*background-color: #795da3;*/
      margin: 0 auto;
      margin-bottom: 10px;
  }
  .outer9 .inter2 .inter21{
      width: 1118px;
      height: 54px;
      line-height:54px;
      background-color: #ffffff;
      font-size: 12px;
      color: #666666;
      border: 0.5px solid #cccccc;
      margin-bottom: 10px;
  }
  .outer9 .inter2 .checkAll{
      margin-left: 25px;
      width: 16px;
      height: 16px;
  }
  .outer9 .inter2 .check{
      margin-left: 25px;
      width: 16px;
      height: 16px;
  }
  .outer9 .s1{
      margin-left: 10px;
  }
  .outer9 .inter2 .inter21 .s2{
      margin-left: 40px;
  }
  .outer9 .inter2 .inter21 .s3{
       margin-left: 500px;
  }
  .outer9 .inter2 .inter21 .count{
      margin-left: 75px;
  }
  .outer9 .inter2 .inter21 .total{
      margin-left: 95px;
  }
  .outer9 .inter2 .money1{
      margin-left: 90px;
  }
  .outer9 .inter2 .inter21 .del{
      margin-left: 90px;
  }
  .outer9 .inter2 .inter22{
      width: 1118px;
      height: 326px;
      line-height: 100px;
      font-size: 12px;
      color: #666666;
      text-align: center;
      /*display: none;*/
  }
  .outer9 .inter2 .inter22 img{
      width: 66px;
      height: 66px;
      margin-left: 10px;
  }
  .outer9 .inter2 .inter22 ul li{
      width: 1118px;
      height: 101px;
      margin-bottom: 10px;
      background-color: #ffffff;
      list-style: none;
      border: 0.5px solid #cccccc;
  }
  .outer9 .inter2 .inter22 .money{
      margin-left: 435px;
  }
  .outer9 .inter2 .inter22 .sub{
      margin-left: 70px;
  }
  .outer9 .inter2 .inter22 .add{
      margin-left: 5px;
  }
  .outer9 .inter2 .del{
      margin-left: 80px;
  }
  .outer9 .inter3{
      width: 1118px;
      height: 90px;
      margin: 0 auto 50px;
      background-color: #ffffff;
      border: 0.5px solid #cccccc;
      font-size: 12px;
      color: #666666;
      /*display: none;*/
  }
  .outer9 .inter3 .inter31{
      width: 1058px;
      height: 48px;
      line-height: 48px;
      margin: 20px auto;
  }
  .outer9 .inter3 .ss1{
      margin-left: 40px;
  }
  .outer9 .inter3 .ss2{
      margin-left: 40px;
  }
  .outer9 .inter3 .foot{
      display: inline-block;
      float: right;
      width: 280px;
      height: 59px;
      line-height: 20px;
      /*background-color:red;*/
  }
  .outer9 .inter3 .foot .totalCount{
      color: #f44;
      font-size: 18px;
      font-weight: 700;
      padding: 0 4px;
      line-height: 20px;
  }
  .outer9 .inter3 .foot .totalPrice{
      font-size: 24px;
      font-weight: 700;
      margin-right: 6px;
      color: #f44;
      line-height: 18px;
  }
  .outer9 .inter3 .foot .ss3{
      float: right;
      padding: 0 60px;
  }
  .outer9 .inter3 .foot .ss4{
      color: #666;
      font-size: 16px;

  }
  .outer9 .inter3 .last{
      float: right;
      background-color: #FF5151;
      width: 194px;
      height: 48px;
      line-height: 48px;
      text-align: center;
  }
  .outer9 .inter3 .last a{
      text-decoration: none;
      margin: 0 auto;
      font-size: 18px;
      color: #ffffff;
  }
  .outer9 .inter3 .checkAll{
      width: 16px;
      height: 16px;
  }

  .outer9 .inter23{
      width: 1118px;
      height: 524px;
      border: 0.5px solid #cccccc;
      text-align: center;
      display: none;
  }
  .outer9 .inter23 .picture{
      width: 1118px;
      height: 250px;
      /*background-color: yellow;*/
      text-align: center;
  }
  .outer9 .inter23 .picture img{
      width: 150px;
      height: 120px;
      margin: 110px;
  }
  .outer9 .inter23 p{
      color: #999;
      padding-bottom: 20px;
      font-size: 16px;
  }
  .outer9 .inter23 a{
      background: #c78a49;
      padding: 0 20px;
      height: 26px;
      line-height: 24px;
      margin: 0 auto;
  }
  .outer9 .inter23 span{
      font-size: 12px;
      color: #ffffff;text-align: center;
  }

</style>
