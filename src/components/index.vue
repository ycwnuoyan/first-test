<template>
  <div class="index">
     <div class="lbt_content">
       <el-carousel indicator-position="outside">
           <el-carousel-item v-for="(item,index) in lbtlist" :key="index">
             <img :src="item.imgUrl"/>
           </el-carousel-item>
         </el-carousel>
     </div>
     <div class="outer1">
         <a href="" class="a1">新品推荐，精心挑选</a>
         <a href="" class="a2"><span >家居必备实用小单品</span></a>
         <div class="inter1">
             <a href="javascript:void(0)" class="zuo"><i class="icon iconfont icon-pc-zuo"></i></a>
             <a href="javascript:void(0)" class="you"><i class="icon iconfont icon-pc-you"></i></a>
             <div class="bbb">
                 <ul>
                     <li><a href=""><img src="../assets/images/png11.png" alt="" title="便携简约清扫扫帚"></a>
                         <a href=""><p>便携简约清扫扫帚</p></a>
                         <a href="" ><span>¥580.00</span></a>
                     </li>
                     <li><a href=""><img src="../assets/images/png12.png" alt="" title="简约多拼接彩色木制积木"></a>
                         <a href=""><p>简约多拼接彩色木制积木</p></a>
                         <a href=""><span>¥300.00</span></a>
                     </li>
                     <li><a href=""><img src="../assets/images/png3.png" alt="" title="黑桃自然花香蜡烛"></a>
                         <a href=""><p>黑桃自然花香蜡烛</p></a>
                         <a href=""><span>¥580.00</span></a>
                     </li>
                     <li><a href=""><img src="../assets/images/png2.png" alt="" title="简约时尚水泥花瓶"></a>
                         <a href=""><p>简约时尚水泥花瓶</p></a>
                         <a href=""><span>¥450.00</span></a>
                     </li>
                     <li><a href=""><img src="../assets/images/png13.png" alt="" title="简约木制餐盘"></a>
                         <a href=""><p>简约木制餐盘</p></a>
                         <a href=""><span>¥300.00</span></a>
                     </li>
                     <li><a href=""><img src="../assets/images/png14.png" alt="" title="不锈钢咖啡水壶"></a>
                         <a href=""><p>不锈钢咖啡水壶</p></a>
                         <a href=""><span>¥400.00</span></a>
                     </li>
                     <li><a href=""><img src="../assets/images/png15.png" alt="" title="经典系列计算机"></a>
                         <a href=""><p>经典系列计算机</p></a>
                         <a href=""><span>¥580.00</span></a>
                     </li>
                 </ul>
             </div>
         </div>
     </div>
     <div class="outer2">
         <p class="outer2_p1"><a href="">专题活动，现实促销</a></p>
         <div class="inter2">
             <p>严选材质，用心设计，精致家居生活</p>
         </div>
         <div class="inter3">
             <div class="left">
                 <a href=""><img src="../assets/images/pic1.jpg" alt=""></a>
                 <span class="border1"></span>
             </div>
             <div class="right1">
                 <a href=""><img src="../assets/images/pic2.jpg" alt=""></a>
                 <span class="border2"></span>
             </div>
             <div class="right2">
                 <a href=""><img src="../assets/images/pic3.jpg" alt=""></a>
                 <span class="border3"></span>
             </div>
         </div>
     </div>
     <div class="box">
         <p class="p1"><a href="">青竹良品，你的家居首选</a></p>
         <div class="box1">
             <p>天然之源，诚挚之礼，严格质检</p>
         </div>
         <div class="box2">
             <ul>
                 <div class="start">
                     <a href=""><img src="../assets/images/png1.png" alt=""></a>
                     <a href="" class="a1"></a>
                 </div>
                 <div class="start1">
                     <a href=""><img src="../assets/images/png6.png" alt=""></a>
                     <a href="" class="a2"></a>
                 </div>
                 <div class="end">
                     <li class="l1"><a href="查看详情.html"><img src="../assets/images/png2.png" alt=""></a>
                         <a href=""><p class="p11">简约时尚水泥花瓶</p></a>
                         <p class="p22">¥450.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                     <li><a href="查看详情.html"><img src="../assets/images/png3.png" alt=""></a>
                         <a href=""><p class="p11">黑陶器具</p></a>
                         <p class="p22">¥450.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                     <li><a href="查看详情.html"><img src="../assets/images/png4.png" alt=""></a>
                         <p class="p11"><a href="">经典系列时钟</a></p>
                         <p class="p22">¥580.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                     <li><a href="查看详情.html"><img src="../assets/images/png5.png" alt=""></a>
                         <p class="p11"><a href="">不锈钢夹子</a></p>
                         <p class="p22">¥120.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                     <li class="l1"><a href="查看详情.html"><img src="../assets/images/png7.png" alt=""></a>
                         <p class="p11"><a href="">黑桃自然花香蜡烛</a></p>
                         <p class="p22">¥580.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                     <li><a href="查看详情.html"><img src="../assets/images/png8.png" alt=""></a>
                         <p class="p11"><a href="">简单大容量瓷碗</a></p>
                         <p class="p22">¥150.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                     <li><a href="查看详情.html"><img src="../assets/images/png9.png" alt=""></a>
                         <p class="p11"><a href="">不锈钢汤勺</a></p>
                         <p class="p22">¥120.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                     <li><a href="查看详情.html"><img src="../assets/images/png10.png" alt=""></a>
                         <p class="p11"><a href="">不锈钢大号汤勺</a></p>
                         <p class="p22">¥120.00</p>
                         <a href="" class="a11"><div class="d11">查看详情</div></a>
                     </li>
                 </div>
             </ul>
         </div>

     </div>
     <div class="outer3">
         <p class="p1"><a href="">全球大牌优选，买手用心挑选</a></p>
         <div class="inter1">
             <p>全球好货 原装正品 海外直邮 自有保税仓</p>
         </div>
         <div class="inter2">
             <div class="left">
                 <a href=""><img src="../assets/images/pic4.jpg" alt=""></a>
                 <span class="border1"></span>
             </div>
             <div class="mid">
                 <div class="mid1">
                     <a href=""><img src="../assets/images/pic5.jpg" alt=""></a>
                     <span class="border2"></span>
                 </div>
                 <div class="mid2">
                     <a href=""><img src="../assets/images/pic6.jpg" alt=""></a>
                     <span class="border3"></span>
                 </div>
             </div>
             <div class="right">
                 <a href=""><img src="../assets/images/pic7.jpg" alt=""></a>
                 <span class="border4"></span>
             </div>
         </div>
         <div class="inter3">
             <ul>
                 <li>
                     <a href="" class="a1"><img src="../assets/images/pic8.png" alt=""></a>
                     <a href=""><p>自然生活，精选用料</p></a>
                 </li>
                 <li>
                     <a href="" class="a1"><img src="../assets/images/pic9.png" alt=""></a>
                     <a href=""><p>源点生活</p></a>
                 </li>
                 <li>
                     <a href="" class="a1"><img src="../assets/images/pic10.png" alt=""></a>
                     <a href=""><p>puree好设计好生活</p></a>
                 </li>
                 <li>
                     <a href="" class="a1"><img src="../assets/images/pic11.png" alt=""></a>
                     <a href=""><p>家居精品之选</p></a>
                 </li>
                 <li class="last">
                     <a href="" class="a1"><img src="../assets/images/pic12.png" alt=""></a>
                     <a href=""><p>木香，手工制作</p></a>
                 </li>
             </ul>
         </div>
     </div>
     <div class="outer4">
         <p class="p1"><a href="">良品体验</a></p>
         <div class="inter1">
             <p>用户反馈，是我们改进的目标</p>
         </div>
         <div class="inter2">
             <ul>
                 <li>
                     <div class="top1">
                         <a href=""><img src="../assets/images/end1.png" alt=""></a>
                     </div>
                     <div class="bottom">
                         <div class="bottom1">
                             <b>天草陶石咖啡杯套装</b>
                             <span class="s1">¥299</span>
                             <div class="p2">
                                 <p>使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化。</p>
                             </div>
                             <span class="s2">alice 2016-12-16 09:59</span>
                         </div>
                     </div>
                 </li>
                 <li>
                     <div class="top2">
                         <a href=""><img src="../assets/images/end2.png" alt=""></a>

                     </div>
                     <div class="bottom">
                         <div class="bottom1">
                             <b>骨瓷印花餐具</b>
                             <span class="s1">¥699</span>
                             <div class="p2">
                                 <p>使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化。</p>
                             </div>
                             <span class="s2">王先生 2016-12-17 09:59</span>
                         </div>
                     </div>
                 </li>
                 <li>
                     <div class="top3">
                         <a href=""><img src="../assets/images/end3.png" alt=""></a>
                     </div>
                     <div class="bottom">
                         <div class="bottom1">
                             <b>黑色帆布双肩包</b>
                             <span class="s1">¥299</span>
                             <div class="p2">
                                 <p>挺好的，尺码真的很正！背部拉链设计，放心出行，为短途商旅贴心设计。防水尼龙与牛皮的优雅结合，轻便小巧，简约百搭，防水尼龙，可折叠双肩背包。</p>
                             </div>
                             <span class="s2">爱丽丝 2016-12-10 07:59</span>
                         </div>
                     </div>
                 </li>
                 <li>
                     <div class="top4">
                         <a href=""><img src="../assets/images/end4.png" alt=""></a>
                     </div>
                     <div class="bottom">
                         <div class="bottom1">
                             <b>桌面书籍收纳组合套装</b>
                             <span class="s1">¥199</span>
                             <div class="p2">
                                 <p>挺好的，特别暖，尺码真的很正！就是靴口太小了，要提着穿，心好累哦，本来都是一脚蹬来着，不过看在你这么暖的份上就原谅你了哈哈哈。真的可以媲美油叽叽，很开心。------三石是我男神</p>
                             </div>
                             <span class="s2">小蚂蚁 2016-12-15 08:00</span>
                         </div>
                     </div>
                 </li>
             </ul>
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
    data(){
      return{
        lbtlist:[
          {imgUrl:"http://10.105.216.32/nanquanweb/images/start.png"},
          {imgUrl:"http://10.105.216.32/nanquanweb/images/start1.png"},
          {imgUrl:"http://10.105.216.32/nanquanweb/images/start2.png"},
        ],
      }
    }
  }
</script>

<style>
  .index{
    position: absolute;
    top: 68px;
    width: 100%;
    height: 1000px;
  }
  .lbt_content{
    width: 100%;
    height: 600px;

  }
  .index .el-carousel__item h3 {
      color: #475669;

      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
  .el-carousel__container{
    height: 600px;
  }
  .index .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

  .index .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .outer1{
        margin: 50px auto;
    }
  .outer1 .a1{
      display: block;
      font-size: 24px;
      /*background-color: gold;*/
      width: 1140px;
      height: 31px;
      text-align: center;
      font-weight: bold;
      color: #000000;
      margin :0 auto;
  }
  .outer1 .a2{
      display: block;
      /*background-color: gainsboro;*/
      height: 35px;
      line-height: 35px;
      width: 1140px;
      text-align: center;
      margin :0 auto 15px;
  }
  .outer1 span{
      font-size: 14px;
      color: #999999;
  }
  .outer1 .inter1{
      position: relative;
      width: 1140px;
      margin :0 auto;

  }
  .outer1 .inter1 .bbb{
      position: relative;
      width: 1140px;
      height: 365px;
      overflow: hidden;
      margin :0 auto 15px;
  }
  .outer1 .inter1 i{
       font-size: 30px;
  }
  .outer1 .inter1 .zuo{
      position: absolute;
      top: 35%;
      left: -30px;
  }
  .outer1 .inter1 .you{
      position: absolute;
      top:35%;
      right: -30px;
  }
  .inter1 ul{
      position: relative;
      width: 1995px;
      height: 365px;
      left: 5px;
      /*left: -275px;*/
      transition: all 0.5s;
  }
  .inter1 ul li{
      list-style: none;
      float: left;
      width: 285px;
      height: 100%;
  }
  .inter1 img{
      width: 275px;
      height: 275px;
      padding-right: 10px;
      padding-bottom: 10px;
  }
  .inter1 ul li p{
      height: 20px;
      line-height: 20px;
      /*background-color: #795da3;*/
      margin: 10px auto 4px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      color: #000000;
  }
  .inter1 ul li span{
      display: block;
      /*width: 100%;*/
      text-align: center;
      font-size: 14px;
      color: #DB2E2E;
  }
  .outer2{
      margin: 50px auto 15px;
  }
  .outer2 .outer2_p1{
      display: block;
      font-size: 24px;
      /*background-color: gold;*/
      height: 31px;
      text-align: center;
      font-weight: bold;
  }
  .outer2 a{
      text-decoration: none;
      color: #000000;
  }
  .outer2 .inter2 p{
      /*background-color: gainsboro;*/
      height: 35px;
      line-height: 35px;
      width: 100%;
      font-size: 14px;
      color: #999999;
      text-align: center;
  }
  .inter3{
      position: relative;
      margin: 0 auto;
      /*background-color: whitesmoke;*/
      height: 384px;
      width: 1140px;
      overflow: hidden;
  }
  .inter3 .left{
      position: absolute;
      top: 4px;
      left: 0;
      /*background-image: url("images/pic1.jpg");*/
      width: 680px;
      height: 380px;
      overflow: hidden;
  }
  .inter3 .left .border1,.inter3 .right1 .border2,.inter3 .right2 .border3{
      border: 2px solid #FFFFFF;
      position: absolute;
      top: 0;
      left: 0;
      width: 99.5%;
      height: 99%;
      pointer-events: none;
  }
  .inter3 :hover .border1,.inter3 :hover .border2,.inter3 :hover .border3{
      transform: scale(0.96,0.93);
      transition: 0.5s;
  }
  .inter3 .right1{
      position: absolute;
      top: 4px;
      right: 0;
      /*background-image: url("images/pic2.jpg");*/
      width: 450px;
      height: 185px;
      overflow: hidden;
  }
  .inter3 .right2{
      position: absolute;
      right: 0;
      bottom: 0;
      /*background-image: url("images/pic3.jpg");*/
      width: 450px;
      height: 185px;
      overflow: hidden;
  }
  .inter3 img:hover{
      transform: scale(1.2);
      transition: 0.5s;
  }
  .box{
      margin: 50px auto;
  }
  .box .p1{
      display: block;
      font-size: 24px;
      /*background-color: gold;*/
      height: 31px;
      text-align: center;
      font-weight: bold;
  }
  .box a{
      text-decoration: none;
      color: #000000;
  }
  .box1 p{
      /*background-color: gainsboro;*/
      height: 35px;
      line-height: 35px;
      width: 100%;
      font-size: 14px;
      color: #999999;
      text-align: center;
  }
  .box2{
      position: relative;
      height: 640px;
      width: 100%;
      max-width: 1140px;
      margin: 15px auto;
  }
  .box2 ul li{
      width: 220px;
      height: 310px;
      padding: 0;
      list-style: none;
      float: left;
      margin-left: 10px;
      margin-bottom: 10px;
      text-align: center;
      background-color: #F9F9F9;
      position: relative;
      overflow: hidden;
  }
  .box2 .start,.start1{
      width: 220px;
      height: 310px;
      margin-bottom: 10px;
      background-color: rgba(0,0,0,0);
  }
  .box2 ul .start a img{
      position: absolute;
      top: 0;
      left: 0;
  }
  .box2 ul .start1 a img{
      position: absolute;
      top: 320px;
      left: 0;
  }
  .box2 .start .a1{
      position: absolute;
      top: 0;
      left: 0;
      width: 220px;
      height: 310px;
      background-color: rgba(0,0,0,0.1);
      display: none;
      pointer-events: none;
  }

  .box2 .start:hover .a1{
      /*background-color: rgba(0,0,0,.1);*/
      display: block;
  }
  .box2 .start1 .a2{
      position: absolute;
      top: 0;
      left: 0;
      width: 220px;
      height: 310px;
      background-color: rgba(0,0,0,0.1);
      display: none;
      pointer-events: none;
  }
  .box2 .start1:hover .a2{
      /*background-color: rgba(0,0,0,.1);*/
      display: block;
      top: 50%;
  }
  .box2 .end{
      position: absolute;
      top: 0;
      left: 220px;

  }
  .box2 ul li a img{
      width: 220px;
      height: 220px;
      margin-bottom: 18px;
      /*background-color: rgba(0,0,0,0);*/
  }
  .box2 .p11{
      /*display: block;*/
      font-weight: bold;
      color: #333;
      font-size: 12px;
      height: 32px;
      /*background-color: grey;*/
      line-height: 32px;

  }
  .box2 .p22{
      font-size: 14px;
      /*background-color: #FFFFFF;*/
      height: 39px;
      line-height: 39px;
      color: #E02B41;
  }

  .box2 ul li .a11{
      position: absolute;
      top: 0;
      left: 0;
      width: 220px;
      height: 310px;
      background-color: rgba(0,0,0,0.1);
      display: none;
      pointer-events: none;
  }
  .box2 ul li .d11{
      position: relative;
      top: 50%;
      left: 50%;
      margin-left: -75px;
      margin-top: -25px;
      width: 150px;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      color: #FFFFFF;
      background-color: #C78A49;
      text-align: center;
  }
  .box2 ul li:hover .a11{
      display: block;
  }
  .box3{
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      /*background-color: #C78A49;*/
      pointer-events: none;
      z-index: 999;
  }
  .box3 a{
      position: absolute;
      top: 80%;
      left:45%;
      /*margin-top: -75px;*/
      /*margin-left: -100px;*/
      margin: 0 auto;
  }
  .box3 a img{
      padding: 10px;
  }
  .box3 a span{
      text-align: center;
      font-size: 14px;
      height: 46px;
      color: #FFFFFF;
      background-color: #262626;
      padding:15px 15px;
      border-radius: 5px;
  }
  .outer3{
      margin: 0px auto;
  }
  .outer3 .p1{
      display: block;
      font-size: 24px;
      /*background-color: palegoldenrod;*/
      /*height: 31px;*/
      text-align: center;
      font-weight: bold;
  }
  .outer3 a{
      color: #000;
  }
  .outer3 .inter1{
      /*background-color: #cccccc;*/
      font-size: 14px;
      color: #999999;
      text-align: center;
      /*height: 35px;*/
      line-height: 35px;
      /*width: 100%;*/
  }
  .outer3 .inter2{
      width: 1140px;
      height: 358px;
      margin: 0 auto;
      margin-top: 15px;
      /*background-color: #e9e9e9;*/
      overflow: hidden;
  }
  .outer3 .inter2 .left{
      position: relative;
      float: left;
      width: 504px;
      height: 358px;
      margin-bottom: 14px;
      margin-right: 14px;
      overflow: hidden;
  }
  .outer3 .inter2 .mid{
      width: 411px;
      float: left;
  }
  .outer3 .inter2 .mid1{
      position: relative;
      width: 411px;
      height: 172px;
      margin-bottom: 14px;
      margin-right: 14px;
      overflow: hidden;
  }
  .outer3 .inter2 .mid2{
      position: relative;
      width: 411px;
      height: 172px;
      margin-bottom: 14px;
      margin-right: 14px;
      overflow: hidden;
  }
  .outer3 .inter2 .right{
      position: relative;
      float: right;
      width: 197px;
      height: 358px;
      margin-right: 0;
      overflow: hidden;
  }
  .outer3 .inter2 .left .border1,.outer3 .inter2 .mid1 .border2,.outer3 .inter2 .mid2 .border3,.outer3 .inter2 .right .border4{
      position: absolute;
      top: 0;
      left: 0;
      width: 99.3%;
      height: 99%;
      border: 2px solid #FFFFFF;
      pointer-events: none;
  }
  .outer3 .inter2 .left:hover .border1{
       transform: scale(0.95,.94);
       transition: 0.5s;
   }
  .outer3 .inter2 .mid1:hover .border2{
      transform: scale(0.95,.91);
      transition: 0.5s;
  }
  .outer3 .inter2 .mid2:hover .border3{
      transform: scale(0.95,.9);
      transition: 0.5s;
  }
  .outer3 .inter2 .right:hover .border4{
      transform: scale(0.9,.95);
      transition: 0.5s;
  }
  .outer3 .inter2 img:hover{
      transform: scale(1.2);
      transition: 0.5s;
  }


  .outer3 .inter3{
      width: 1140px;
      height: 167px;
      /*background-color: #cccccc;*/
      margin: 20px auto;
      /*overflow: hidden;*/
  }
  .outer3 .inter3 ul li{
      float: left;
      list-style: none;
      margin-right: 22px;
      margin-bottom: 22px;
      width: 210px;
      height: 139px;

  }
  .outer3 .inter3 ul .last{
      margin-right: 0;
  }
  .outer3 .inter3 ul li .a1{
      display: inline-block;
      border: 1px solid #cccccc;
      width: 208px;
      height: 90px;
      text-align: center;
      /*background-color: #bd2c00;*/
      overflow: hidden;
  }
  .outer3 .inter3 ul li img{
      height: 88px;
      width: 176px;
      overflow: hidden;
  }
  .outer3 .inter3 ul li p{
      margin: 15px;
      text-align: center;
      color: #5d5d5d;
      font-size: 14px;
      height: 15px;
  }
  .outer3 .inter3 ul a:hover img{
      transform: translate(-50px,0);
      transition: 0.5s;
  }
  .outer4{
      margin: 0 auto;
      text-align: center;
      background-color: #F4F0EA;
      height: 613px;
  }
  .outer4 .p1{
      display: block;
      font-size: 24px;
      /*background-color: palegoldenrod;*/
      /*height: 31px;*/
      text-align: center;
      font-weight: bold;
      padding-top: 50px;
  }
  .outer4 p a{
      color: #000;
  }
  .outer4 .inter1{
      /*background-color: #cccccc;*/
      font-size: 14px;
      color: #999999;
      text-align: center;
      /*height: 35px;*/
      line-height: 35px;
  }
  .outer4 .inter2{
      width: 1140px;
      height: 432px;
      padding: 20px 15px;
      margin: 0 auto;
  }
  .outer4 .inter2 ul li{
      position: relative;
      float: left;
      margin-right: 12px;
      list-style: none;
      width: 276px;
      height: 432px;
      background-color: #FFFFFF;
      overflow: hidden;
  }
  .outer4 .inter2 ul li:nth-child(4){
      margin-right: 0;
  }
  .outer4 .inter2 ul li img{
      width: 276px;
      height: 276px;
  }
  .outer4 .inter2 img:hover{
      transform: scale(1.05);
      transition: 0.5s;
  }
  .outer4 .inter2 .bottom{
      position: absolute;
      top: 267px;
      left: 5px;
      float: left;
      width: 266px;
      height: 164px;
      background-color: #FFFFFF;
  }
  .outer4 .inter2 .bottom1{
      padding: 20px 15px;
      width: 236px;
      height: 124px;
  }
  .outer4 .inter2 .bottom b{
      color: #333333;
      font-size: 14px;
  }
  .outer4 .inter2 .bottom .s1{
       float: right;
       color: #c78a49;
       font-size: 14px;
  }
  .outer4 .inter2 .bottom .p2{
      padding-bottom: 14px;
  }
  .outer4 .inter2 .bottom p{
      overflow: hidden;
      font-size: 12px;
      color: #4d4d4d;
      display: block;
      /* background-color: palegoldenrod; */
      height: 64px;
      padding-top: 14px;
  }
  .outer4 .inter2 .bottom .s2{
      font-size: 13px;
      line-height: 1;
      color: #777777;
  }
</style>
