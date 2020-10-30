<template>
  <div class="payment">
    <div class="payment_content">
      <div class="step_title">
        <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1" >提交订单</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 2" step="2" >支付</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 3" step="3">卖家发货</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 4" step="4">确认收货</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="5">评价</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="vcard" v-loading="loading">
                  <h3>确认订单信息</h3>
                  <ul class="card_title">
                    <li style="width: 40%;">商品</li>
                    <li style="width: 20%;">单价</li>
                    <li style="width: 20%;">数量</li>
                    <li style="width: 20%;">小计</li>
                  </ul>
                  <div class="product_info">
                    <div class="store_info">
                      <svg class="store_icon" aria-hidden="true">
                          <use xlink:href="#iconshangdian"></use>
                      </svg>
                      <p>店铺：青木南拳旗舰店</p>
                    </div>
                    <ul>
                      <li style="width: 38%;">
                        <img src="../assets/images/comimg/comimg_3.jpg" />
                        <p class="com_info">护童台灯写字护眼台灯学生书桌led保护视力儿童学习阅读灯萌芽灯</p>
                        <p class="com_brand">品牌：护童</p>
                        <p class="com_class">商品类型：ABS</p>
                      </li>
                      <li style="width: 20%;">999.00</li>
                      <li style="width: 20%;">×1</li>
                      <li style="width: 20%;">999.00</li>
                    </ul>
                    <div class="shopping_address">
                      <p>收货地址：</p>
                      <select>
                        <option class="optiont" value ="volvo">浙江省杭州市江干区白杨街道浙江理工大学生活二区</option>
                        <option value ="saab">浙江省杭州市江干区白杨街道浙江理工大学生活一区</option>
                        <option value="opel">浙江省杭州市江干区白杨街道浙江理工大学生活三区</option>
                      </select>
                      <span>+</span>
                    </div>
                    <div class="other_info">
                      <div class="merchant_message">
                        <p>给卖家留言：</p>
                        <input  placeholder="选填,请先和商家协商一致"/>
                      </div>
                      <div class="other_content">
                        <div class="store_discount">
                          <p>店铺优惠：</p>
                          <p style="color: #b8b8b8;">无</p>
                          <span>-0.00</span>
                        </div>
                        <div class="store_discount">
                          <p>运送方式：</p>
                          <p style="color: #b8b8b8;">普通配送 快递 免邮</p>
                          <span>-0.00</span>
                        </div>
                        <div class="store_discount">
                          <p>运费险：</p>
                          <p><input type="checkbox" value="汽车"/> ¥2.18购买</p>
                          <span>-0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button @click="nextStep"  class="confirm">提交订单</button>
                <button class="cancel" > 取消 </button>
              </v-stepper-content>
              <v-stepper-content step="2">
                <div class="vcard">
                  <div class="pay_order">
                    <div class="pay_info">
                      <p class="pay_title">订单信息</p>
                      <div class="pay_adress">
                        <span>收货地址:</span>
                        <p>Nanquan，86-17816120332，浙江省杭州市江干区白杨街道浙江理工大学生活二区，310002</p>
                      </div>
                      <div class="pay_adress">
                        <span>买家留言:</span>
                        <p>-</p>
                      </div>
                      <div class="pay_adress">
                        <span>订单编号:</span>
                        <p>1235421</p>
                      </div>
                      <div class="pay_adress">
                        <span>商家:</span>
                        <p>青木南拳旗舰店</p>
                      </div>
                    </div>
                    <div class="pay_content">
                      <p>请扫描下方二维码完成支付</p>
                      <img src="../assets/images/erwei.png" class="erwei"/>
                      <br/>
                      <img src="../assets/images/pay.png"  class="payway"/>
                    </div>
                  </div>
                  <div class="pay_orderinfo">
                    <ul class="pay_order_title">
                      <li style="width: 38%;">商品</li>
                      <li style="width: 15%;">单价</li>
                      <li style="width: 15%;">数量</li>
                      <li style="width: 15%;">优惠</li>
                      <li style="width: 15%;">状态</li>
                    </ul>
                    <ul class="pay_order_info">
                      <li style="width: 38%;">
                        <img src="../assets/images/comimg/comimg_3.jpg" />
                        <p class="com_info" style="margin-top: 15px;">护童台灯写字护眼台灯学生书桌led保护视力儿童学习阅读灯萌芽灯</p>
                        <p class="com_brand">品牌：护童</p>
                      </li>
                      <li style="width: 15%;">999.00</li>
                      <li style="width: 15%;">×1</li>
                      <li style="width: 15%;border-right: 1px solid #ebebeb;">0.00</li>
                      <li style="width: 15%;">未发货</li>
                    </ul>
                  </div>
                </div>
                <button @click="e1 = 3" class="confirm">已支付</button>
                <button class="cancel"> 取消 </button>
              </v-stepper-content>
              <v-stepper-content step="3">
                <div class="vcard" style="border: 1px solid #d5d5d5;">
                  <div class="pay_success_title">
                    <svg class="success_icon" aria-hidden="true">
                        <use xlink:href="#iconicon--yes"></use>
                    </svg>
                    <p>您已成功付款</p>
                  </div>
                  <ul class="pay_order_info" style="margin-top: 20px;height: 80px;border: 1px solid #dedede;">
                    <li style="width: 38%;">
                      <img src="../assets/images/comimg/comimg_3.jpg" />
                      <p class="com_info" style="margin-top: 15px;">护童台灯写字护眼台灯学生书桌led保护视力儿童学习阅读灯萌芽灯</p>
                      <p class="com_brand">品牌：护童</p>
                    </li>
                    <li style="width: 15%;">999.00</li>
                    <li style="width: 15%;">×1</li>
                    <li style="width: 15%;border-right: 1px solid #ebebeb;">0.00</li>
                    <li style="width: 15%;">未发货</li>
                  </ul>
                  <div class="success_info">
                    <p>收货地址：浙江省杭州市江干区白杨街道浙江理工大学生活二区——Nanquan——17816120332</p>
                    <tr>实付款：<span>¥999.00</span></tr>
                  </div>
                </div>
                <button @click="openMessage" class="confirm">提醒发货</button>
                <button class="cancel"> 取消 </button>
              </v-stepper-content>
              <v-stepper-content step="4">
                <div class="vcard"></div>
                <button @click="e1 = 5" class="confirm">提交订单</button>
                <button class="cancel"> 取消 </button>
              </v-stepper-content>
              <v-stepper-content step="5">
                <div class="vcard"></div>
                <button @click="e1 = 1" class="confirm">提交订单</button>
                <button class="cancel"> 取消 </button>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from "./bottom.vue"
  export default {
    components:{
      bottom
    },
      data () {
        return {
          e1: 3,
          loading: false
        }
      },
      methods:{
        nextStep(){
           this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.e1 = 2;
            }, 1000);
        },
        openMessage(){
          this.$alert('提醒发货成功，请等待卖家发货', '提示', {
            confirmButtonText: '确定',

          });
        }
      }
    }
</script>

<style>
  .el-button{
    border: 0;
    box-shadow: 1px 1px 5px #b6b6b6;
    background-color: #efefef;
  }
  .el-button:hover{
    background-color: #aa5500;
  }
  .success_info p{
    float: left;
    width: 100%;
    margin-top: 60px;
    font-size: 15px;
    color: #aa5500;
  }
  .success_info span{
    color: #FF0000;
  }
  .success_info tr{
    float: left;
    width: 100%;
    margin-top: 30px;
    font-size: 15px;
    color: #aa5500;
  }
  .success_info{
    width: 80%;
    height: 200px;
    margin-top: 20px;
    border: 1px solid #ebebeb;
  }
  .pay_success_title p{
    float: left;
    margin-left: 20px;
  }
  .success_icon{
    width: 40px;
    height: 40px;
    margin-top: 5px;
    float: left;
    margin-left: 20px;
  }
  .pay_success_title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #caf8db;
  }
  .pay_order_info li img{
    width: 60px;
    height: 60px;
    float: left;
    margin: 10px;
    border: 1px solid #dadada;
  }
  .pay_order_info{
    list-style: none;
    height: 74%;4
    border:1px solid #F2F2F2;
  }
  .pay_order_info li{
    float: left;
    line-height: 80px;
    font-size: 14px;
  }
  .pay_order_title li{
    float: left;
    font-size: 15px;
    height: 30px;
    line-height: 30px;

  }
  .pay_order_title{
    list-style: none;
    height: 26%;
    border:1px solid #F2F2F2;
  }
  .pay_orderinfo{
    width: 100%;
    height: 28%;
    margin-top: 2%;
    border:1px solid #F2F2F2;
  }
  .erwei{
    margin-top: 20px;
    width: 120px;
    height: 120px;
  }
  .payway{
    width: 186px;
    height: 113px;
  }
  .pay_adress span{
    width: 60px;
    height: 100%;
    float: left;
    text-align: right;
    font-size: 14px;
    margin: 5px;
    color: #878787;
  }
  .pay_adress p{
    width: 240px;
    float: left;
    font-size: 14px;
    text-align: left;
    margin: 5px;
    color: #878787;
  }
  .pay_adress{
    width: 100%;
    height: auto;
    float: left;
    margin-top: 20px;
  }
  .pay_title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    background-color: #ebebeb;
  }
  .pay_content p{
    margin-top: 3px;
  }
  .pay_content{
    width: 70%;
    height: 100%;
    border: 1px solid #F2F2F2;
  }
  .pay_info{
    width: 30%;
    height: 100%;
    float: left;
    background-color: #fdfdfd;
    border: 1px solid #F2F2F2;
  }
  .pay_order{
    display: flex;
    width: 100%;
    height: 70%;
    border: 1px solid #F2F2F2;
  }
  .shopping_address span{
    float: right;
    margin-right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 24px;
    cursor: pointer;
    box-shadow:1px 1px 3px #ababab;
    background-color: #dfdfdf;
  }
  .shopping_address select{
    border: 1px solid #dedede;
    float: left;
    height: 100%;
    width: 400px;

    font-size: 14px;
    color: #aa5500;
  }
  .shopping_address p{
    font-size: 15px;
    float: left;
  }
  .shopping_address{
    width: 100%;
    height: 20px;
    line-height: 20px;
  }
  .store_discount span{
    color: #FF0000;
    font-weight: 600;
  }
  .store_discount p{
    float: left;
    width: 45%;
  }
  .store_discount{
    width: 100%;
    text-align: left;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }
  .other_content{
    width: 48%;
    height: 98%;
    border: 1px solid #ffffff;
  }
  .merchant_message input{
    width: 90%;
    height: 80%;
    text-align: center;
    font-size: 15px;
    background-color: #FFFFFF;
    border: 1px solid #dedede;
  }
  .merchant_message p{
    float: left;
    margin-left: 30px;
    font-size: 15px;
  }
  .merchant_message{
    width: 50%;
    height: 98%;
    border: 1px solid #ffffff;
  }
  .other_info{
    display: flex;
    width: 100%;
    height: 170px;
    margin-top: 10px;
    background-color: #e9feff;
    border-bottom: 1px solid #aa5500;
  }
  .product_info ul{
    list-style: none;
    height: 120px;
  }
  .product_info ul li img{
    width: 80px;
    height: 80px;
    float: left;
    border: 1px solid #dadada;
    margin: 20px;
  }
  .com_info{
    width:100%;
    height: 40px;
    margin-top: 20px;
    text-align: left;
    font-size: 15px;
    line-height: 16px;

  }
  .com_info:hover{
    color: #aa5500;
    border-color: #E6D6C6;
    cursor: pointer;
  }
  .com_brand{
    width: 100%;
    height: 20px;
    color: #989898;
    text-align: left;
    font-size: 12px;
    line-height: 16px;

  }
  .com_class{
    width: 100%;
    height: 20px;
    color: #989898;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
  }
  .product_info ul li{
    font-size: 15px;
    float: left;
    height: 120px;
    line-height: 120px;
  }
  .store_info p{
    font-size: 14px;
    width: 100%;
    text-align: left;
  }
  .store_icon{
    float: left;
    width: 20px;
    height: 20px;
  }
  .product_info{
    width: 100%;
    height: 85%;
    border: 1px solid #aa5500;
  }
  .card_title{
    height: 50px;
    list-style: none;
  }
  .card_title li{
    font-size: 15px;
    float: left;
    padding: 10px;
    border-bottom: 2px solid #aa5500;
  }
  .vcard h3{
    width: 100%;
    text-align: left;
    font-size: 16px;
    color: #aa5500;
  }
  .v-stepper__content .cancel{
    background-color: #FFFFFF;
    margin-left: 20px;
  }
  .v-stepper__content .confirm{
    width: 100px;
    height: 35px;
    color: #FFFFFF;
    border-radius: 5px;
    background-color: #ff0000;
    box-shadow:1px 1px 3px #aa5500;
  }
  .v-stepper__content .confirm:hover{
    border-color: #9d0000;
    outline: 0;
    cursor: pointer;
    -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 8px #9d0000;
    box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 10px #9d0000
  }
  .vcard{

    width: 100%;
    height: 400px;
    margin-bottom: 20px;
  }
  .v-stepper__wrapper{
    height: 500px;
  }
  .v-stepper__items{
    width: 100%;
    height: 500px;
  }
  .v-stepper__header{
    width: 80%;
    border: 0;
    margin-left: 10%;
    box-shadow:0px 0px 0px #000000;
  }
  .v-stepper__step__step{
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background-color: #42B983;
  }
  .payment{
    position: absolute;
    top: 68px;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #F2F2F2;
  }
  .payment_content{
    width: 1140px;
    margin: 0 auto;
    background-color: #FFFFFF;
  }
</style>
