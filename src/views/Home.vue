<template>
  <div class="pay-list pl-16 pr-16 pt-4">
    <div v-if="channels.length">
    <div class="title flex-items-center fs-16 bold">
      <span class="num fc-white flex-justify-center flex-items-center">1</span>
      <span class="ml-8">{{$t("select")}}</span>
    </div>
    <div class="coins-main flex-wrap flex-between">
      <div
        class="coins-items mt-8 flex-between flex-items-center flex-column"
        v-for="(item,index) in skus"
        :key="item+index"
        :class="{'coins-preferential':item.placement==3,'coins-bg':item.coinsActive}"
        @click="selectCoins(index)"
      >
        <div class="time-box" v-if="isTime && item.placement==3">
          <div class="time fs-12 bold" v-if="(item.placement==3)">{{ time }}</div>
        </div>
        <div class="flex-between flex-items-center numbers">
          <div class="coins-number ml-10 flex-items-center">
            <img :src="require('../assets/images/ic_gems_gold_'+getPicName())" />
            <span class="fs-18 ml-2 bold">{{item.counts}}</span>
          </div>
          <div class="money mr-12 flex-items-center bold">
            <span
              class="off flex-items-center flex-justify-center"
              v-if="item.placement==3"
            >{{$t("one")}}</span>
            <span class="fs-12 ml-6">{{item.currency | symbol}}{{item.price}}</span>
          </div>
        </div>
        <div
          class="times flex-items-center flex-justify-center bold"
          v-if="item.placement!=3 && (item.rewardVipMonths !=0 || item.rewardVipDays !=0)"
          :class="{'times-bg':item.placement!=3}"
        >
          <span
            v-if="item.rewardVipMonths"
          >{{item.rewardVipMonths>1?$t("months").replace('%d',item.rewardVipMonths) : $t("month").replace('%d',item.rewardVipMonths)}}</span>
          <span v-else>{{$t("days").replace('%d',item.rewardVipDays)}}</span>
        </div>
      </div>
    </div>
    <div class="title flex-items-center fs-16 mt-16 bold">
      <span class="num fc-white flex-justify-center flex-items-center">2</span>
      <span class="ml-8">{{$t("payment")}}</span>
    </div>
    <div class="payment">
      <div
        class="list flex-between flex-items-center mt-8 pl-20 pr-16"
        :class="{'pay-active':item.payActive}"
        @click="selectMethod(index)"
        v-for="(item,index) in mychannels"
        :key="item+index"
      >
        <div class="icon">
          <img :src="item.icon" alt />
        </div>
        <div class="number flex-items-center bold fs-14">
          <i class="bold">+</i>
          <img :src="require('../assets/images/ic_gem_gold_'+getPicName())" alt class="coins-icon ml-2" />
          <span class="ml-2 bold">{{item.differ}}</span>
          <img src="../assets/images/ic_more.png" alt class="more ml-2" :class="{'armore':isAr}"/>
        </div>
      </div>
    </div>
    <div class="ai-help fc-hui6 flex-column fs-13 text-center">
      <div class="flex-justify-center">{{$t("contact")}}</div>
      <div class="fc-hui7 flex-justify-center mt-8" @click="getAiHelp">{{$t("customer")}}</div>
    </div>
    <Loading v-if="isLoading"/>
    </div>
    <Empty v-else/>
  </div>
  
</template>
<script>
import { _channels, _createOrder } from "../api/server";
import { getQueryVariable,symbol } from "../api/util";
import { mapState,mapMutations,mapActions} from 'vuex';
import Loading from '../components/Loading'
import Empty from './Empty.vue';
// import { x ,result} from "./aa";
export default {
  name: "home",
  data() {
    return {
      skus: [],
      channels: [],
      getTimer: null,
      isAr:window.lang=="ar"?'ar':false,
      time: null,
      skusIndex: 0,
      isTime: true,
      mychannels: [],
      isLoading:false
    };
  },
  components: {
    Loading,
    Empty
  },
  filters:{
    symbol(data){
      return symbol[data];
    }
  },
  mounted() {
    this.isLoading=false;
    // 获取产品列表
    this.getProductList();
    //页面展示打点
    this.base.logEvent("event_main_payment_page_show", "");
  },
  methods: {
    ...mapMutations({setOrderId:"SETORDERID",setPrice:"SETPRICE",setSymbol:"SETSYMBOL"}),
    getProductList(){
      // 获取列表
    _channels(JSON.stringify({ jid: getQueryVariable("jid") })).then((res) => {
      // res.data = x;
      if (res.data.status == 1) {
        let { skus, channels } = res.data;
        this.skus = Object.assign(skus);
        this.filterTimes(skus[0].count_down);
        this.channels = Object.assign(channels);
        
        // 初始化商品列表
        this.skus.forEach((item, index) => {
          this.$set(item, "coinsActive", false);
          if (index == 0) {
            this.$set(item, "coinsActive", true);
          }
        });
        this.channels.forEach((item, index) => {
          this.$set(item, "payActive", false);
        });
        //初始化渠道
        this.getMethods(this.skusIndex);
        //拉取打点
        this.base.logEvent("event_payment_infol_load_result", {
          result: "success",
          reason: "",
        });
      } else {
        this.base.logEvent("event_payment_infol_load_result", {
          result: "fail",
          reason: res.data.message,
        });
      }
    });
    },
    getPicName(){
      let pkgName=getQueryVariable('pkgName');
      return `${pkgName}.png`
    },
    getAiHelp() {
      this.base.getHelp();
    },
    getMethods(skusIndex) {
      this.mychannels = [];
      // 判断渠道
      this.channels.forEach((item, index) => {
        item.payInfos.forEach((x, i) => {
          if (this.skus[skusIndex].sku === x.sku) {
            this.mychannels.push(this.channels[index]);
            // 计算差值
            this.$set(
              this.channels[index],
              "differ",
              x.counts - this.skus[skusIndex].counts
            );
          }
        });
      });
      this.mychannels.forEach((item, index) => {
        this.$set(item, "payActive", false);
      });
      
      //选择商品打点
      this.paymentProduct();
      
    },
    paymentProduct(){
      //默认选择商品打点
      let paymentChannelArr = [];
      this.mychannels.forEach((item, index) => {
        paymentChannelArr.push(item.channelType + "_" + item.channelName);
      });
      let logEventData = {
        coins: this.skus[this.skusIndex].counts,
        price: `₹${this.skus[this.skusIndex].price}`,
        sku: this.skus[this.skusIndex].sku,
        payment_channel: paymentChannelArr.toString(),
      };
      this.base.logEvent("event_sku_choose", logEventData);
    },
    selectCoins(index) {
      // 选择商品
      this.skus.forEach((item, index) => {
        this.$set(item, "coinsActive", false);
      });
      //设置点击效果
      this.$set(this.skus[index], "coinsActive", true);
      this.skusIndex = index;
      
      // 判断渠道
      this.getMethods(index);
    },
    selectMethod(index) {
      // 选择支付方式
      this.mychannels.forEach((item, index) => {
        this.$set(item, "payActive", false);
      });
      //设置点击效果
      this.$set(this.mychannels[index], "payActive", true);
      //发送订单，跳转第三方
      let data = {
        jid: getQueryVariable("jid"),
        sku: this.skus[this.skusIndex].sku,
        channelName: this.mychannels[index].channelName,
        channelType: this.mychannels[index].channelType,
      };
      this.base.logEvent("event_payment_start_method_choose", {
            coins:this.skus[this.skusIndex].counts,
            price:this.skus[this.skusIndex].price,
            sku:this.skus[this.skusIndex].sku,
            channel_type:this.mychannels[index].channelType,
            channel_name:this.mychannels[index].channelName
        });
       this.isLoading=true;
       this.setSymbol(symbol[this.skus[this.skusIndex].currency])
       _createOrder(JSON.stringify(data)).then((res) => {
          if(res.data.status==1){
            this.isLoading=false;
            if(data.channelName=='CHECKOUT'){
              this.setOrderId(res.data.orderId);
              this.setPrice(this.skus[this.skusIndex].price);
              setTimeout(()=>{
                this.$router.push('/information');
              },200)
            }else{
              window.location.href=res.data.targetURL;
            }
            
            this.orderLogEvent(index,'','success',res.data.orderId)
          }else{
            this.orderLogEvent(index,res.data.message,'fail','')
          }
        });
      
    },
    orderLogEvent(index,reason,result,orderId){
      this.base.logEvent("event_payment_create_order_result", {
            coins:this.skus[this.skusIndex].counts,
            price:`₹${this.skus[this.skusIndex].price}`,
            sku:this.skus[this.skusIndex].sku,
            result:result,
            reason:reason,
            orderId:orderId,
            channel_type:this.mychannels[index].channelType,
            channel_name:this.mychannels[index].channelName
        });
    },
    countTime(data) {
      let hours =
        parseInt((data % (60 * 60 * 24)) / (60 * 60)) > 9
          ? parseInt((data % (60 * 60 * 24)) / (60 * 60))
          : "0" + parseInt((data % (60 * 60 * 24)) / (60 * 60));
      let minutes =
        parseInt((data % (60 * 60)) / 60) > 9
          ? parseInt((data % (60 * 60)) / 60)
          : "0" + parseInt((data % (60 * 60)) / 60);
      let seconds = data % 60 > 9 ? data % 60 : "0" + (data % 60);
      if (hours > 168) {
        this.isTime = false;
      }
      if (hours > 1) {
        let time = hours + ":" + minutes + ":" + seconds;
        this.time = this.$t("ends").replace("#", time);
      } else {
        let time = minutes + ":" + seconds;
        this.time = this.$t("ends").replace("#", time);
      }
      if (data < 1) {
        clearInterval(this.getTimer);
        this.skus.shift();
      }
    },
    filterTimes(data) {
      this.countTime(data);
      this.getTimer = setInterval(() => {
        data--;
        this.countTime(data);
      }, 1000);
    },
  },
};
</script>
<style lang="stylus">
.pay-list {
  .title {
    height: 44px;

    .num {
      width: 24px;
      height: 24px;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 50%;
    }
  }

  .coins-main {
    .coins-items {
      width: 164px;
      border: 2px solid #FFE3B0;
      border-radius: 13px;

      .coins-number {
        img {
          width: 42px;
          height: 28px;
        }

        span {
          color: #FF8500;
        }
      }

      .time-box {
        height: 20px;
        width: 100%;
        position: relative;
      }

      &.coins-preferential {
        width: 100%;
        position: relative;

        .coins-number {
          img {
            width: 54px;
            height: 36px;
          }

          span {
            font-size: 27px;
          }
        }

        .money {
          span {
            font-size: 14px;
          }

          .off {
            font-size: 12.73px;
            width: 70px;
            height: 20px;
            background: #FF4413;
            color: #fff;
            border-radius: 5.45px;
          }
        }

        .time {
          padding: 0px 20px;
          height: 20px;
          border-radius: 0 0 12.5px 12.5px;
          background: #FFF5E2;
          position: absolute;
          text-align: center;
          color: #FF8500;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          white-space: nowrap;
        }
      }

      &.coins-bg {
        background: #FFF2DA;
        border: 2px solid #FF8500;

        .times {
          height: 20px;
          width: 100%;
          background: #FF8500;
          color: #FFF;
        }

        &.coins-preferential {
          .time {
            padding: 0px 20px;
            height: 20px;
            background: #FF8500;
            color: #FFF;
          }
        }
      }

      .numbers {
        width: 100%;
        height: 47px;
      }

      .times {
        width: 100%;
        height: 20px;
        background: #FFF5E2;
        border-radius: 0 0 10px 10px;
        text-align: center;
        color: #FF8500;
      }
    }
  }

  .payment {
    .list {
      height: 64px;
      border-radius: 12px;
      border: 2px solid #e7e7e7;

      .icon {
        img {
          height: 30px;
        }
      }

      .number {
        color: #FF8500;

        .coins-icon {
          width: 18px;
          height: 18px;
        }

        .more {
          width: 16px;
          height: 16px;
        }
        .armore{
          transform rotate(180deg)
        }
      }

      &.pay-active {
        background: #E7E7E7;
      }
    }
  }

  .ai-help {
    position: absolute;
    width: 298px;
    bottom: 45px;
    left: 50%;
    transform:translateX(-50%)

    .fc-hui7 {
      text-decoration: underline;
    }
  }
  
}
</style>
