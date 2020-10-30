<template>
  <div class="personal_center">
    <div class="personal_content">
      <div class="lead_list">
        <h3>个人中心</h3>
        <p class="line1"></p>
        <div class="pc_cart">
          <svg class="pc_cart_icon" aria-hidden="true">
              <use xlink:href="#iconziyuan"></use>
          </svg>
          <p>我的购物车</p>
          <span>0</span>
        </div>
        <p class="line2"></p>
        <div class="order_manage">
          <div class="om_title" @click="orderManage">
            <svg class="pc_om_icon" aria-hidden="true">
                <use xlink:href="#icondingdan"></use>
            </svg>
            <p>订单管理</p>
            <i v-if="openomType" class="el-icon-arrow-down"></i>
            <i v-else class="el-icon-arrow-up"></i>
          </div>
          <ul class="om_list" ref="omList">
            <li>所有订单</li>
            <li>待付款</li>
            <li>待发货</li>
            <li>待收货</li>
            <li>待评价</li>
          </ul>
        </div>
        <div class="personal_info">
          <div class="om_title" @click="pinfoManage">
            <svg class="pc_pi_icon" aria-hidden="true">
                <use xlink:href="#icongerenxinxi-"></use>
            </svg>
            <p>个人资料</p>
            <i v-if="openpiType" class="el-icon-arrow-down"></i>
            <i v-else class="el-icon-arrow-up"></i>
          </div>
          <ul class="om_list" ref="piList">
            <li>个人信息</li>
            <li>地址管理</li>
            <li>安全设置</li>
            <li>消息提示设置</li>
          </ul>
        </div>
        <div class="after_sale">
          <div class="om_title" @click="asaleManage">
            <svg class="pc_as_icon" aria-hidden="true">
                <use xlink:href="#iconshouhoufuwu"></use>
            </svg>
            <p>售后服务</p>
            <i v-if="openasType" class="el-icon-arrow-down"></i>
            <i v-else class="el-icon-arrow-up"></i>
          </div>
          <ul class="om_list" ref="asList">
            <li>退款/退换</li>
            <li>意见/投诉</li>
          </ul>
        </div>
        <div class="browsing_history">
          <div class="om_title" @click="bhistoryManage">
            <svg class="pc_as_icon" aria-hidden="true">
                <use xlink:href="#iconliulan"></use>
            </svg>
            <p>浏览历史</p>
            <i v-if="openbhType" class="el-icon-arrow-down"></i>
            <i v-else class="el-icon-arrow-up"></i>
          </div>
          <ul class="om_list" ref="bhList">
            <li>我的收藏</li>
            <li>我的足迹</li>
          </ul>
        </div>
        <div class="online_servive">
          <div class="om_title" @click="oserviveManage">
            <svg class="pc_as_icon" aria-hidden="true">
                <use xlink:href="#iconkefu"></use>
            </svg>
            <p>在线客服</p>
            <i v-if="openosType" class="el-icon-arrow-down"></i>
            <i v-else class="el-icon-arrow-up"></i>
          </div>
          <ul class="om_list" ref="osList">
            <li>商品咨询</li>
            <li>意见反馈</li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="container_title">
          <h4>订单管理 / Order</h4>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有订单" name="first">
              <ul class="all_order_title">
                <li style="width: 40%;">商品</li>
                <li style="width: 8%;">单价</li>
                <li style="width: 8%;">数量</li>
                <li style="width: 8%;">商品操作</li>
                <li style="width: 12%;">合计</li>
                <li style="width: 12%;">交易状态</li>
                <li style="width: 12%;border-right: 0;">交易操作</li>
              </ul>
              <div class="order_info">
                <div class="oinfo_title">
                  <p>订单编号：154632</p>
                  <p>成交时间：2020-10-21</p>
                </div>
                <div class="oinfo_content">
                  <div class="content_1">
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_1.jpg" />
                        <p class="com_info">科恩纳石英石水槽单槽厨房洗菜盆洗碗池家用花岗岩台下盆阶梯式</p>
                        <p class="com_brand">品牌：科恩纳</p>
                        <p class="com_class">商品类型：石英</p>
                      </li>
                      <li style="width: 12.3%;">1280.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;"></li>
                    </ul>
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_2.jpg" />
                        <p class="com_info">洗脸盆水龙头冷热卫生间单孔台上304不锈钢家用洗手旋转面盆龙头</p>
                        <p class="com_brand">品牌：沐鸟</p>
                        <p class="com_class">商品类型：不锈钢</p>
                      </li>
                      <li style="width: 12.3%;">236.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;"></li>
                    </ul>
                  </div>
                  <div class="content_2">
                    <ul class="content_2_ul">
                      <li style="width: 33.1%;">
                        <p>合计：1526.00</p>
                        <span>含运费：10.00</span>
                      </li>
                      <li style="width: 33%;line-height: 190px;">
                        <a>交易成功</a>
                        <a>订单详情</a>
                        <a>查看物流</a>
                      </li>
                      <li style="width: 33%;border-right: 0;">
                        <button>删除订单</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="order_info">
                <div class="oinfo_title">
                  <p>订单编号：154632</p>
                  <p>成交时间：2020-10-21</p>
                </div>
                <div class="oinfo_content">
                  <div class="content_1">
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_3.jpg" />
                        <p class="com_info">护童台灯写字护眼台灯学生书桌led保护视力儿童学习阅读灯萌芽灯</p>
                        <p class="com_brand">品牌：护童</p>
                        <p class="com_class">商品类型：ABS</p>
                      </li>
                      <li style="width: 12.3%;">999.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款</li>
                    </ul>
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_4.jpg" />
                        <p class="com_info">护童台灯写字灯护眼台灯学生书桌led插电保护视力儿童学习阅读灯</p>
                        <p class="com_brand">品牌：护童</p>
                        <p class="com_class">商品类型：合金</p>
                      </li>
                      <li style="width: 12.3%;">999.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款</li>
                    </ul>
                  </div>
                  <div class="content_2">
                    <ul class="content_2_ul">
                      <li style="width: 33.1%;line-height: 210px;">
                        <p>合计：2008.00</p>
                        <span>含运费：10.00</span>
                      </li>
                      <li style="width: 33%;line-height: 190px;">
                        <a>交易成功</a>
                        <a>订单详情</a>
                        <a>查看物流</a>
                      </li>
                      <li style="width: 33%;border-right: 0;">
                        <button>删除订单</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待付款" name="second">
              <ul class="all_order_title">
                <li style="width: 40%;">商品</li>
                <li style="width: 8%;">单价</li>
                <li style="width: 8%;">数量</li>
                <li style="width: 8%;">商品操作</li>
                <li style="width: 12%;">合计</li>
                <li style="width: 12%;">交易状态</li>
                <li style="width: 12%;border-right: 0;">交易操作</li>
              </ul>
              <div class="order_info">
                <div class="oinfo_title">
                  <p>订单编号：154632</p>
                  <p>成交时间：2020-10-21</p>
                </div>
                <div class="oinfo_content">
                  <div class="content_1">
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_3.jpg" />
                        <p class="com_info">护童台灯写字护眼台灯学生书桌led保护视力儿童学习阅读灯萌芽灯</p>
                        <p class="com_brand">品牌：护童</p>
                        <p class="com_class">商品类型：ABS</p>
                      </li>
                      <li style="width: 12.3%;">999.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;"></li>
                    </ul>
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_4.jpg" />
                        <p class="com_info">护童台灯写字灯护眼台灯学生书桌led插电保护视力儿童学习阅读灯</p>
                        <p class="com_brand">品牌：护童</p>
                        <p class="com_class">商品类型：合金</p>
                      </li>
                      <li style="width: 12.3%;">999.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;"></li>
                    </ul>
                  </div>
                  <div class="content_2">
                    <ul class="content_2_ul">
                      <li style="width: 33.1%;">
                        <p>合计：2008.00</p>
                        <span>含运费：10.00</span>
                      </li>
                      <li style="width: 33%;line-height: 205px;">
                        <a>等待买家付款</a>
                        <a>取消订单</a>
                      </li>
                      <li style="width: 33%;border-right: 0;">
                        <button>删除订单</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </el-tab-pane>
            <el-tab-pane label="待发货" name="third">
              <ul class="all_order_title">
                <li style="width: 40%;">商品</li>
                <li style="width: 8%;">单价</li>
                <li style="width: 8%;">数量</li>
                <li style="width: 8%;">商品操作</li>
                <li style="width: 12%;">合计</li>
                <li style="width: 12%;">交易状态</li>
                <li style="width: 12%;border-right: 0;">交易操作</li>
              </ul>
              <div class="order_info">
                <div class="oinfo_title">
                  <p>订单编号：154632</p>
                  <p>成交时间：2020-10-21</p>
                </div>
                <div class="oinfo_content">
                  <div class="content_1">
                    <ul class="content_1_ul">
                        <li style="width: 62.2%;">
                          <img src="../assets/images/comimg/comimg_1.jpg" />
                          <p class="com_info">科恩纳石英石水槽单槽厨房洗菜盆洗碗池家用花岗岩台下盆阶梯式</p>
                          <p class="com_brand">品牌：科恩纳</p>
                          <p class="com_class">商品类型：石英</p>
                        </li>
                        <li style="width: 12.3%;">1280.00</li>
                        <li style="width: 12.3%;">×1</li>
                        <li style="width: 12.3%;cursor: pointer;">退款</li>
                      </ul>
                      <ul class="content_1_ul">
                        <li style="width: 62.2%;">
                          <img src="../assets/images/comimg/comimg_2.jpg" />
                          <p class="com_info">洗脸盆水龙头冷热卫生间单孔台上304不锈钢家用洗手旋转面盆龙头</p>
                          <p class="com_brand">品牌：沐鸟</p>
                          <p class="com_class">商品类型：不锈钢</p>
                        </li>
                        <li style="width: 12.3%;">236.00</li>
                        <li style="width: 12.3%;">×1</li>
                        <li style="width: 12.3%;cursor: pointer;">退款</li>
                      </ul>
                    </div>
                    <div class="content_2">
                      <ul class="content_2_ul">
                        <li style="width: 33.1%;">
                          <p>合计：1526.00</p>
                          <span>含运费：10.00</span>
                        </li>
                      <li style="width: 33%;line-height: 205px;">
                        <a>买家已付款</a>
                        <a>订单详情</a>
                      </li>
                      <li style="width: 33%;border-right: 0;">
                        <button>提醒发货</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待收货" name="fourth">
              <ul class="all_order_title">
                <li style="width: 40%;">商品</li>
                <li style="width: 8%;">单价</li>
                <li style="width: 8%;">数量</li>
                <li style="width: 8%;">商品操作</li>
                <li style="width: 12%;">合计</li>
                <li style="width: 12%;">交易状态</li>
                <li style="width: 12%;border-right: 0;">交易操作</li>
              </ul>
              <div class="order_info">
                <div class="oinfo_title">
                  <p>订单编号：154632</p>
                  <p>成交时间：2020-10-21</p>
                </div>
                <div class="oinfo_content">
                  <div class="content_1">
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_1.jpg" />
                        <p class="com_info">科恩纳石英石水槽单槽厨房洗菜盆洗碗池家用花岗岩台下盆阶梯式</p>
                        <p class="com_brand">品牌：科恩纳</p>
                        <p class="com_class">商品类型：石英</p>
                      </li>
                      <li style="width: 12.3%;">1280.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款/退货</li>
                    </ul>
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_2.jpg" />
                        <p class="com_info">洗脸盆水龙头冷热卫生间单孔台上304不锈钢家用洗手旋转面盆龙头</p>
                        <p class="com_brand">品牌：沐鸟</p>
                        <p class="com_class">商品类型：不锈钢</p>
                      </li>
                      <li style="width: 12.3%;">236.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款/退货</li>
                    </ul>
                  </div>
                  <div class="content_2">
                    <ul class="content_2_ul">
                      <li style="width: 33.1%;">
                        <p>合计：1526.00</p>
                        <span>含运费：10.00</span>
                      </li>
                      <li style="width: 33%;line-height: 160px;">
                        <a>卖家已发货</a>
                        <a>订单详情</a>
                        <a>查看物流</a>
                        <a>延长收货</a>
                      </li>
                      <li style="width: 33%;border-right: 0;">
                        <button>确认收货</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待评价" name="fiveth">
              <ul class="all_order_title">
                <li style="width: 40%;">商品</li>
                <li style="width: 8%;">单价</li>
                <li style="width: 8%;">数量</li>
                <li style="width: 8%;">商品操作</li>
                <li style="width: 12%;">合计</li>
                <li style="width: 12%;">交易状态</li>
                <li style="width: 12%;border-right: 0;">交易操作</li>
              </ul>
              <div class="order_info">
                <div class="oinfo_title">
                  <p>订单编号：154632</p>
                  <p>成交时间：2020-10-21</p>
                </div>
                <div class="oinfo_content">
                  <div class="content_1">
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_3.jpg" />
                        <p class="com_info">护童台灯写字护眼台灯学生书桌led保护视力儿童学习阅读灯萌芽灯</p>
                        <p class="com_brand">品牌：护童</p>
                        <p class="com_class">商品类型：ABS</p>
                      </li>
                      <li style="width: 12.3%;">999.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款/退货</li>
                    </ul>
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_4.jpg" />
                        <p class="com_info">护童台灯写字灯护眼台灯学生书桌led插电保护视力儿童学习阅读灯</p>
                        <p class="com_brand">品牌：护童</p>
                        <p class="com_class">商品类型：合金</p>
                      </li>
                      <li style="width: 12.3%;">999.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款/退货</li>
                    </ul>
                  </div>
                  <div class="content_2">
                    <ul class="content_2_ul">
                      <li style="width: 33.1%;">
                        <p>合计：2008.00</p>
                        <span>含运费：10.00</span>
                      </li>
                      <li style="width: 33%;line-height: 190px;">
                        <a>交易成功</a>
                        <a>订单详情</a>
                        <a>查看物流</a>
                      </li>
                      <li style="width: 33%;border-right: 0;">
                        <button>评价商品</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="order_info">
                <div class="oinfo_title">
                  <p>订单编号：154632</p>
                  <p>成交时间：2020-10-21</p>
                </div>
                <div class="oinfo_content">
                  <div class="content_1">
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_1.jpg" />
                        <p class="com_info">科恩纳石英石水槽单槽厨房洗菜盆洗碗池家用花岗岩台下盆阶梯式</p>
                        <p class="com_brand">品牌：科恩纳</p>
                        <p class="com_class">商品类型：石英</p>
                      </li>
                      <li style="width: 12.3%;">1280.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款/退货</li>
                    </ul>
                    <ul class="content_1_ul">
                      <li style="width: 62.2%;">
                        <img src="../assets/images/comimg/comimg_2.jpg" />
                        <p class="com_info">洗脸盆水龙头冷热卫生间单孔台上304不锈钢家用洗手旋转面盆龙头</p>
                        <p class="com_brand">品牌：沐鸟</p>
                        <p class="com_class">商品类型：不锈钢</p>
                      </li>
                      <li style="width: 12.3%;">236.00</li>
                      <li style="width: 12.3%;">×1</li>
                      <li style="width: 12.3%;cursor: pointer;">退款/退货</li>
                    </ul>
                  </div>
                  <div class="content_2">
                    <ul class="content_2_ul">
                      <li style="width: 33.1%;">
                        <p>合计：1526.00</p>
                        <span>含运费：10.00</span>
                      </li>
                      <li style="width: 33%;line-height: 190px;">
                        <a>交易成功</a>
                        <a>订单详情</a>
                        <a>查看物流</a>
                      </li>
                      <li style="width: 33%;border-right: 0;">
                        <button>评价商品</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
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
        openomType:0,
        openpiType:0,
        openasType:0,
        openbhType:0,
        openosType:0,
        activeName: 'first',
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      orderManage(){
        if(this.openomType == 0){
          this.$refs.omList.style.display = "block";
          this.openomType = 1;
        }else{
          this.$refs.omList.style.display = "none";
          this.openomType = 0;
        }

      },
      pinfoManage(){
        if(this.openpiType == 0){
          this.$refs.piList.style.display = "block";
          this.openpiType = 1;
        }else{
          this.$refs.piList.style.display = "none";
          this.openpiType = 0;
        }
      },
      asaleManage(){
        if(this.openasType == 0){
          this.$refs.asList.style.display = "block";
          this.openasType = 1;
        }else{
          this.$refs.asList.style.display = "none";
          this.openasType = 0;
        }
      },
      bhistoryManage(){
        if(this.openbhType == 0){
          this.$refs.bhList.style.display = "block";
          this.openbhType = 1;
        }else{
          this.$refs.bhList.style.display = "none";
          this.openbhType = 0;
        }
      },
      oserviveManage(){
        if(this.openosType == 0){
          this.$refs.osList.style.display = "block";
          this.openosType = 1;
        }else{
          this.$refs.osList.style.display = "none";
          this.openosType = 0;
        }
      }
    }
  }
</script>

<style>
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
  .order_info ul{
    list-style: none;
  }
  .content_2_ul li button{
    width: 80px;
    height: 30px;
    border: 0;
    color: #FFFFFF;
    margin-top: 100px;
    background-color: #ff0000;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #aaaaaa;
  }
  .content_2_ul li button:hover{
    border-color: #9d0000;
    outline: 0;
    cursor: pointer;
    -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 8px #9d0000;
    box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 10px #9d0000
  }
  .content_2_ul li a{
    width: 100%;
    height: 20px;
    cursor:pointer;
    float: left;
    font-size: 14px;
  }
  .content_2_ul li a:hover{
    color: #aa5500;
  }
  .content_2_ul li p{
    width: 100%;
    height: 20px;
    font-size: 15px;
  }
  .content_2_ul li span{
    width: 100%;
    color: #989898;
    height: 30px;
    font-size: 13px;
  }
  .content_2_ul li {
    float: left;
    height: 240px;
    border-bottom: 1px solid #dadada;
  }
  .content_1_ul li img{
    width: 80px;
    height: 80px;
    float: left;
    border: 1px solid #dadada;
    margin: 20px;
  }
  .content_1_ul li img:hover{
    cursor: pointer;
  }
  .content_1_ul li {
    float: left;
    height: 120px;
    line-height: 120px;
    border-bottom: 1px solid #dadada;
  }
  .content_1{
    width: 64%;
    height: 100%;
  }
  .content_2{
    width: 36%;
    height: 100%;
  }
  .oinfo_content{
    width: 100%;
    display: flex;
    height: 240px;
    border: 1px solid #dadada;
  }
  .oinfo_title{
    width: 100%;
    height: 40px;

  }
  .oinfo_title p{
    float: left;
    margin: 10px;
    font-size: 15px;
  }
  .order_info{
    width: 99%;
    height: auto;
    background-color: #ffffff;
  }
  .all_order_title{
    list-style: none;
    width: 99%;
    display: flex;
    line-height: 30px;
    border: 1px solid #dadada;
  }
  .all_order_title li{
    font-size: 14px;
    border-right: 1px solid #dadada;
  }

  .personal_content .el-tabs__content{
  }
 .personal_content .el-tabs__active-bar{
    background-color: #aa5500;
  }
  .personal_content .el-tabs__nav {
    width: 100%;
  }
  .personal_content .el-tabs__item{
    width: 20%;
    color: #000;
  }
  .personal_content .el-tabs__item .is-top .is-active{
    color: #aa5500;

  }
  .personal_content .el-tabs__item:hover{
    color: #aa5500;
    background-color: #f7e7d6;
    border-color: #E6D6C6;
    outline: 0;
    -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 8px #E6D6C6;
    box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 10px #E6D6C6
  }
  .personal_content .el-tabs__item:focus{
    color: #aa5500;
  }
  .container_title h4{
    float: left;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 500;
  }
  .container_title{
    width: 100%;
    height: 30px;
    margin-top: 15px;
    border-bottom: 1px  solid #e7e7e7;
  }
  .container{
    width: 100%;
    height: 100%;
  }
  .after_sale{
    width: 100%;
    height: auto;
  }
  .personal_info{
    width: 100%;
    height: auto;
  }
  .om_list{
    list-style: none;
    display: none;
  }
  .om_list li{
    margin: 10px;
    font-size: 13px;
    color: #959595;
    cursor:pointer;
  }
  .om_list li:hover{
    text-decoration: underline;
    color: #aa5500;
  }
  .pc_as_icon{
    float: left;
    margin-left: 25px;
    margin-top: 5px;
    width: 28px; height: 28px;
  }
  .pc_pi_icon{
    float: left;
    margin-left: 30px;
    margin-top: 5px;
    width: 20px; height: 20px;
  }
  .pc_om_icon{
    float: left;
    margin-left: 30px;
    margin-top: 5px;
    width: 20px; height: 20px;
  }
  .om_title i{
    margin-top: 8px;
  }
  .om_title p{
    float: left;
    margin-top: 5px;
    font-size: 15px;
    margin-left: 10px;
  }
  .om_title{
    cursor:pointer;
    width: 100%;
    height: 30px;
    margin-top: 10px;
  }
  .order_manage{
    width: 100%;
    height: auto;
  }
  .om_title:hover{
      background-color: #f7e7d6;
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 10px #E6D6C6
  }
  .om_title:hover li{
      display: block;
  }

  .line2{
    width: 90%;
    height: 1px;
    margin-top: 10px;
    background-color: #efefef;
  }
  .pc_cart_icon{
    float: left;
    margin-left: 10px;
    margin-top: 5px;
    width: 20px; height: 20px;
  }
  .pc_cart span{
    display: inline-block;
    width: 15px;
    height: 15px;
    color: #FFFFFF;
    float: left;
    margin-left: 10px;
    margin-top: 8px;
    text-align: center;
    font-size: 11px;
    border-radius: 50%;
    background-color: #ff0000;
  }
  .pc_cart p{
    float: left;
    margin-top: 5px;
    font-size: 15px;
    margin-left: 10px;
  }
  .pc_cart{
    cursor:pointer;
    width: 100%;
    height: 30px;
    margin-top: 10px;
  }
  .pc_cart:hover{
      background-color: #f7e7d6;
      border-color: #E6D6C6;
      outline: 0;
      -webkit-box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 8px #E6D6C6;
      box-shadow: inset 0 0 0 rgba(0,0,0,.075),0 0 10px #E6D6C6
  }

  .lead_list{
    float: left;
    height: 100%;
    width: 180px;
    margin: 5px;
    border-right: 1px solid #eeeeee;
  }
  .personal_center h3{
    color: #555;
    margin-top: 10px;
    font-size: 16px;

  }
  .personal_center{
    position: absolute;
    top: 68px;
    width: 100%;

    background-color: #F2F2F2;
  }
  .personal_content{
    width: 1140px;
    height: 800px;
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #fff;
  }
  .personal_content h1{
    font-size: 20px;
    font-weight: 500;
  }
  .lead_list .line1{
    width: 90%;
    height: 2px;
    margin-top: 5px;
    background-color: #000000;
  }
</style>
