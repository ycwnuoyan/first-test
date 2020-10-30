<template>
  <div class="bottom">
    <div class="outer5">
        <div class="inter1">
            <div class="left">
                <a href=""><img src="../assets/images/logo.png" alt=""></a>
                <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>
            </div>
            <div class="center">
                <dl>
                    <dt><a href="">关于我们</a></dt>
                    <dd><a href="">我的品牌</a></dd>
                    <dd><a href="">公司动态</a></dd>
                    <dd><a href="">经历发展</a></dd>
                    <dd><a href="">商品推广</a></dd>
                </dl>
                <dl>
                    <dt><a href="">支付方式</a></dt>
                    <dd><a href="">微信支付</a></dd>
                    <dd><a href="">支付宝</a></dd>
                    <dd><a href="">百度钱包</a></dd>
                    <dd><a href="">货到付款</a></dd>
                </dl>
                <dl>
                    <dt><a href="">相关服务</a></dt>
                    <dd><a href="">退货政策</a></dd>
                    <dd><a href="">购物流程</a></dd>
                    <dd><a href="">客服服务</a></dd>
                    <dd><a href="">商务合作</a></dd>
                </dl>
            </div>
            <div class="right">
                <img src="../assets/images/weixin.png" alt="">
                <img src="../assets/images/weibo.png" alt="">
                <span>微信公众号</span>
                <span>微博公众号</span>
            </div>
        </div>
        <hr>
        <div class="inter2">

        </div>
    </div>
  </div>

</template>

<script>
</script>

<style>
  *{
      margin: 0 auto;
      padding: 0;
  }
  img{
      vertical-align: middle;
  }
  a{
      text-decoration: none;
  }
  .outer5{
      width: 100%;
      height: 390px;
      
      background-color: #FAF8F8;
  }
  .outer5 .inter1{
      width: 1140px;
      height: 228px;
      /*background-color: #55a532;*/
      padding-top: 58px;
  }
  .outer5 .inter1 .left{
      float: left;
      width: 307px;
      height: 160px;
      /*background-color: #FF5000;*/
      margin-right: 30px;
  }
  .outer5 .inter1 .left img{
      width: 110px;
      height: 28px;
  }
  .outer5 .inter1 .left p{
      font-size: 12px;
      margin-top: 10px;
      color: #999999;
  }
  .outer5 .inter1 .center{
      float: left;
      width: 490px;
      height: 178px;
      /*line-height: 30px;*/
      /*background-color: #795da3;*/
      margin-right: 30px;
  }
  .outer5 .inter1 .center dl{
      float: left;
      width: 153px;
      height: 156px;
      font-size: 12px;
      line-height: 30px;
  }
  .outer5 .inter1 .center dl:nth-child(1){
      padding-left: 30px;
  }
  .outer5 .inter1 .center dl dt{
      font-size: 14px;
  }
  .outer5 .inter1 .center dl a{
      color: #666;
  }
  .outer5 .inter1 .right{
      float: right;
      width: 274px;
      height: 139px;
      /*background-color: lightcoral;*/
  }
  .outer5 .inter1 .right img{
      float: left;
      width: 120px;
      height: 120px;
      padding-right: 8px;
      padding-left: 8px;
  }
  .outer5 .inter1 .right span{
      float: left;
      font-size: 14px;
      color: #666;
      padding-left: 30px;
      padding-right: 35px;
  }
  .outer5 .inter1 .left p:hover,.outer5 .inter1 dt a:hover,.outer5 .inter1 dd a:hover,.outer5 .inter1 .right span:hover{
      color: #D5A879;
  }

  .outer5 hr{
      border: 0.5px solid #e6e6e6;
  }
</style>
