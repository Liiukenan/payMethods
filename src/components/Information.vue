<!-- 卡支付 -->
<template>
  <div class="information">
    <div class="title pl-17 pr-12 flex-start flex-items-center">
      <img src="../assets/images/ic_info_protection.png" alt />
      <div class="payinfo flex-items-center ml-8 fc-hui6">
        {{$t("fillCont")}}

      </div>
    </div>
    <div class="line-box"></div>
    <div class="number">
      <div class="card bold pl-24 flex-items-center fs-16">{{$t("number")}}</div>
      <form
        id="payment-form"
        method="POST"
        action="https://merchant.com/charge-card"
        class="ml-16 mr-16"
      >
        <div class="one-liner">
          <div class="card-frame">
            <!-- form will be added here -->
          </div>
          <!-- add submit button -->
          <button id="pay-button" class="fs-18" disabled>{{$t("pay").replace('@',price).replace('#',symbol)}}</button>
          <!-- <button @click="write('4242424242424242')">测试</button> -->
        </div>
        <p class="success-payment-message"></p>
      </form>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import { _history , _ckoPayment} from "../api/server";
import { getQueryVariable,symbol} from "../api/util";
import {mapState} from "vuex"
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
      ...mapState(['orderId','price','symbol'])
  },
  watch: {},
  methods: {
    write(n) {
      var cont = document.getElementById("checkout-frames-expiry-date");
      console.log(document.querySelector("body"));
      Frames.init({
        publicKey: "pk_test_76aea50e-8850-4d5a-afc3-67216c22de82",
        localization: {
          cardNumberPlaceholder: "1234",
          expiryMonthPlaceholder: "MM",
          expiryYearPlaceholder: "YY",
          cvvPlaceholder: "CVV",
        },
      });
    },
    init() {
      // 初始化
      var payButton = document.getElementById("pay-button");
      var form = document.getElementById("payment-form");
      Frames.addEventHandler(
        Frames.Events.CARD_VALIDATION_CHANGED,
        function (event) {
          console.log("CARD_VALIDATION_CHANGED: %o", event);
          payButton.disabled = !Frames.isCardValid();
        }
      );
     
      Frames.addEventHandler(Frames.Events.CARD_TOKENIZED,  (event)=> {
        let data={
            jid:getQueryVariable('jid'),
            order_id:this.orderId,
            cko_token:event.token
        }
        console.log(this.orderId)
         _ckoPayment(JSON.stringify(data)).then((res) => {
              if(res.data.status==1){
                window.location.href=res.data.targetURL;
              }
        });

      });

      form.addEventListener("submit", function (event) {
        payButton.disabled = true; // disables pay button once submitted
        event.preventDefault();
        Frames.submitCard();
      });
      Frames.init({
        publicKey: "pk_test_76aea50e-8850-4d5a-afc3-67216c22de82",
        localization: {
          cardNumberPlaceholder: this.$t("number"),
          expiryMonthPlaceholder: "MM",
          expiryYearPlaceholder: "YY",
          cvvPlaceholder: "CVV",
        },
        style: {
          base: {
            color: "black",
            fontSize: "14px",
          },
          autofill: {
            backgroundColor: "yellow",
          },
          valid: {
            color: "black",
          },
          invalid: {
            color: "black",
          },
          placeholder: {
            base: {
              color: "rgba(0,0,0,0.20)",
            },
          },
        },
      });
    },
    history(){
        let date=`${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`;
        let data = {
            jid: getQueryVariable("jid"),
            hx5:md5(getQueryVariable("jid") + date),
            date:date

        };
        _history(JSON.stringify(data)).then((res) => {
        //   if(res.data.status==1){
            
        //   }else{
        //   }
        });
    }
  },
  mounted() {
    //  初始化页面
      this.init();
    // 卡号历史
    //   this.history();
  }
};
</script>
<style lang='stylus' scoped>
.information {
  .title {
    .payinfo {
      height: 56px;
    }

    img {
      width: 40px;
    }
  }

  .line-box {
    height: 8px;
    background: #F2F2F2;
  }

  .number {
    .card {
      height: 40px;
    }
  }

  .card-frame {
    width: value;
  }

  iframe {
    width: 100%;
  }

  .one-liner {
    display: flex;
    flex-direction: column;
  }

  #pay-button {
    background: #FF8500;
    box-shadow: 0 2px 0 0 #D87100;
    border-radius: 6px;
    border-radius: 6px;
    position: absolute;
    bottom: 50px;
    width: 300px;
    height: 46px;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
  }

  #pay-button:active {
    background-color: #0B2A49;
    box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.4);
  }

  #pay-button:hover {
    background-color: #15406B;
    box-shadow: 0 2px 5px 0 rgba(19, 57, 94, 0.4);
  }

  #pay-button:disabled {
    background-color: #ccc;
    box-shadow: none;
  }

  #pay-button:not(:disabled) {
    cursor: pointer;
  }

  .card-frame {
    border: 1px solid rgba(255, 133, 0, 0.5);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 8px;
    height: 40px;
    box-shadow: 0 1px 3px 0 rgba(19, 57, 94, 0.2);
  }

  .card-frame.frame--rendered {
    opacity: 1;
  }

  .card-frame.frame--rendered.frame--focus {
    border: solid 1px #13395E;
    box-shadow: 0 2px 5px 0 rgba(19, 57, 94, 0.15);
  }

  .card-frame.frame--rendered.frame--invalid {
    border: solid 1px #D96830;
    box-shadow: 0 2px 5px 0 rgba(217, 104, 48, 0.15);
  }

  .success-payment-message {
    color: #13395E;
    line-height: 1.4;
  }

  .token {
    color: #b35e14;
    font-size: 0.9rem;
    font-family: monospace;
  }
}
</style>