(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-650857c1"],{"0206":function(e,t,s){e.exports=s.p+"img/ic_gem_gold_com.cherru.pro.video.chat.65a9e24b.png"},"2de9":function(e,t,s){e.exports=s.p+"img/ic_gem_gold_com.videochat.livechat.134353b4.png"},"379b":function(e,t,s){e.exports=s.p+"img/ic_repair.6c1b7fbe.png"},"3fd4":function(e,t,s){var n={"./ic_gems_gold_com.cherru.pro.video.chat.png":"6343","./ic_gems_gold_com.videochat.livechat.png":"aabb"};function i(e){var t=c(e);return s(t)}function c(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id="3fd4"},"4fc1":function(e,t,s){},5319:function(e,t,s){"use strict";var n=s("d784"),i=s("825a"),c=s("7b0b"),a=s("50c4"),r=s("a691"),o=s("1d80"),l=s("8aa5"),u=s("14c3"),h=Math.max,d=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,s){return[function(s,n){var i=o(this),c=void 0==s?void 0:s[e];return void 0!==c?c.call(s,i,n):t.call(String(i),s,n)},function(e,c){var o=s(t,e,this,c);if(o.done)return o.value;var f=i(e),m=String(this),p="function"===typeof c;p||(c=String(c));var g=f.global;if(g){var _=f.unicode;f.lastIndex=0}var b=[];while(1){var y=u(f,m);if(null===y)break;if(b.push(y),!g)break;var A=String(y[0]);""===A&&(f.lastIndex=l(m,a(f.lastIndex),_))}for(var k="",x=0,O=0;O<b.length;O++){y=b[O];for(var C=String(y[0]),w=h(d(r(y.index),m.length),0),I=[],E=1;E<y.length;E++)I.push(v(y[E]));var j=y.groups;if(p){var $=[C].concat(I,w,m);void 0!==j&&$.push(j);var T=String(c.apply(void 0,$))}else T=n(C,m,w,I,j,c);w>=x&&(k+=m.slice(x,w)+T,x=w+C.length)}return k+m.slice(x)}];function n(e,s,n,i,a,r){var o=n+e.length,l=i.length,u=p;return void 0!==a&&(a=c(a),u=m),t.call(r,u,(function(t,c){var r;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return s.slice(0,n);case"'":return s.slice(o);case"<":r=a[c.slice(1,-1)];break;default:var u=+c;if(0===u)return t;if(u>l){var h=f(u/10);return 0===h?t:h<=l?void 0===i[h-1]?c.charAt(1):i[h-1]+c.charAt(1):t}r=i[u-1]}return void 0===r?"":r}))}}))},6343:function(e,t,s){e.exports=s.p+"img/ic_gems_gold_com.cherru.pro.video.chat.4d5cb423.png"},"6ad3":function(e,t,s){"use strict";var n=s("6b10"),i=s.n(n);i.a},"6b10":function(e,t,s){},aabb:function(e,t,s){e.exports=s.p+"img/ic_gems_gold_com.videochat.livechat.d0c2e221.png"},bb51:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pay-list pl-16 pr-16 pt-4"},[e.channels.length?n("div",[n("div",{staticClass:"title flex-items-center fs-16 bold"},[n("span",{staticClass:"num fc-white flex-justify-center flex-items-center"},[e._v("1")]),n("span",{staticClass:"ml-8"},[e._v(e._s(e.$t("select")))])]),n("div",{staticClass:"coins-main flex-wrap flex-between"},e._l(e.skus,(function(t,i){return n("div",{key:t+i,staticClass:"coins-items mt-8 flex-between flex-items-center flex-column",class:{"coins-preferential":3==t.placement,"coins-bg":t.coinsActive},on:{click:function(t){return e.selectCoins(i)}}},[e.isTime&&3==t.placement?n("div",{staticClass:"time-box"},[3==t.placement?n("div",{staticClass:"time fs-12 bold"},[e._v(e._s(e.time))]):e._e()]):e._e(),n("div",{staticClass:"flex-between flex-items-center numbers"},[n("div",{staticClass:"coins-number ml-10 flex-items-center"},[n("img",{attrs:{src:s("3fd4")("./ic_gems_gold_"+e.getPicName())}}),n("span",{staticClass:"fs-18 ml-2 bold"},[e._v(e._s(t.counts))])]),n("div",{staticClass:"money mr-12 flex-items-center bold"},[3==t.placement?n("span",{staticClass:"off flex-items-center flex-justify-center"},[e._v(e._s(e.$t("one")))]):e._e(),n("span",{staticClass:"fs-12 ml-6"},[e._v(e._s(e._f("symbol")(t.currency))+e._s(t.price))])])]),3==t.placement||0==t.rewardVipMonths&&0==t.rewardVipDays?e._e():n("div",{staticClass:"times flex-items-center flex-justify-center bold",class:{"times-bg":3!=t.placement}},[t.rewardVipMonths?n("span",[e._v(e._s(t.rewardVipMonths>1?e.$t("months").replace("%d",t.rewardVipMonths):e.$t("month").replace("%d",t.rewardVipMonths)))]):n("span",[e._v(e._s(e.$t("days").replace("%d",t.rewardVipDays)))])])])})),0),n("div",{staticClass:"title flex-items-center fs-16 mt-16 bold"},[n("span",{staticClass:"num fc-white flex-justify-center flex-items-center"},[e._v("2")]),n("span",{staticClass:"ml-8"},[e._v(e._s(e.$t("payment")))])]),n("div",{staticClass:"payment"},e._l(e.mychannels,(function(t,i){return n("div",{key:t+i,staticClass:"list flex-between flex-items-center mt-8 pl-20 pr-16",class:{"pay-active":t.payActive},on:{click:function(t){return e.selectMethod(i)}}},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.icon,alt:""}})]),n("div",{staticClass:"number flex-items-center bold fs-14"},[n("i",{staticClass:"bold"},[e._v("+")]),n("img",{staticClass:"coins-icon ml-2",attrs:{src:s("f2ee")("./ic_gem_gold_"+e.getPicName()),alt:""}}),n("span",{staticClass:"ml-2 bold"},[e._v(e._s(t.differ))]),n("img",{staticClass:"more ml-2",class:{armore:e.isAr},attrs:{src:s("bc3d"),alt:""}})])])})),0),n("div",{staticClass:"ai-help fc-hui6 flex-column fs-13 text-center"},[n("div",{staticClass:"flex-justify-center"},[e._v(e._s(e.$t("contact")))]),n("div",{staticClass:"fc-hui7 flex-justify-center mt-8",on:{click:e.getAiHelp}},[e._v(e._s(e.$t("customer")))])]),e.isLoading?n("Loading"):e._e()],1):n("Empty")],1)},i=[],c=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("e25e"),s("5319"),s("159b"),s("ade3")),a=s("aa22"),r=s("6ace"),o=s("2f62"),l=s("3a5e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fail flex-justify-center flex-items-center flex-column"},[n("img",{staticClass:"repair",attrs:{src:s("379b"),alt:"",srcset:""}}),n("div",{staticClass:"empty-content fs-16 mt-20"},[e._v(" "+e._s(e.$t("sorry"))+" ")])])},h=[],d={components:{},data:function(){return{}},computed:{},watch:{},methods:{},mounted:function(){}},f=d,m=(s("6ad3"),s("2877")),p=Object(m["a"])(f,u,h,!1,null,"39b1164e",null),v=p.exports;function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach((function(t){Object(c["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var b={name:"home",data:function(){return{skus:[],channels:[],getTimer:null,isAr:"ar"==window.lang&&"ar",time:null,skusIndex:0,isTime:!0,mychannels:[],isLoading:!1}},components:{Loading:l["a"],Empty:v},filters:{symbol:function(e){return r["b"][e]}},mounted:function(){this.isLoading=!1,this.getProductList(),this.base.logEvent("event_main_payment_page_show","")},methods:_({},Object(o["b"])({setOrderId:"SETORDERID",setPrice:"SETPRICE",setSymbol:"SETSYMBOL"}),{getProductList:function(){var e=this;Object(a["a"])(JSON.stringify({jid:Object(r["a"])("jid")})).then((function(t){if(1==t.data.status){var s=t.data,n=s.skus,i=s.channels;e.skus=Object.assign(n),e.filterTimes(n[0].count_down),e.channels=Object.assign(i),e.skus.forEach((function(t,s){e.$set(t,"coinsActive",!1),0==s&&e.$set(t,"coinsActive",!0)})),e.channels.forEach((function(t,s){e.$set(t,"payActive",!1)})),e.getMethods(e.skusIndex),e.base.logEvent("event_payment_infol_load_result",{result:"success",reason:""})}else e.base.logEvent("event_payment_infol_load_result",{result:"fail",reason:t.data.message})}))},getPicName:function(){var e=Object(r["a"])("pkgName");return"".concat(e,".png")},getAiHelp:function(){this.base.getHelp()},getMethods:function(e){var t=this;this.mychannels=[],this.channels.forEach((function(s,n){s.payInfos.forEach((function(s,i){t.skus[e].sku===s.sku&&(t.mychannels.push(t.channels[n]),t.$set(t.channels[n],"differ",s.counts-t.skus[e].counts))}))})),this.mychannels.forEach((function(e,s){t.$set(e,"payActive",!1)})),this.paymentProduct()},paymentProduct:function(){var e=[];this.mychannels.forEach((function(t,s){e.push(t.channelType+"_"+t.channelName)}));var t={coins:this.skus[this.skusIndex].counts,price:"₹".concat(this.skus[this.skusIndex].price),sku:this.skus[this.skusIndex].sku,payment_channel:e.toString()};this.base.logEvent("event_sku_choose",t)},selectCoins:function(e){var t=this;this.skus.forEach((function(e,s){t.$set(e,"coinsActive",!1)})),this.$set(this.skus[e],"coinsActive",!0),this.skusIndex=e,this.getMethods(e)},selectMethod:function(e){var t=this;this.mychannels.forEach((function(e,s){t.$set(e,"payActive",!1)})),this.$set(this.mychannels[e],"payActive",!0);var s={jid:Object(r["a"])("jid"),sku:this.skus[this.skusIndex].sku,channelName:this.mychannels[e].channelName,channelType:this.mychannels[e].channelType};this.base.logEvent("event_payment_start_method_choose",{coins:this.skus[this.skusIndex].counts,price:this.skus[this.skusIndex].price,sku:this.skus[this.skusIndex].sku,channel_type:this.mychannels[e].channelType,channel_name:this.mychannels[e].channelName}),this.isLoading=!0,this.setSymbol(r["b"][this.skus[this.skusIndex].currency]),Object(a["c"])(JSON.stringify(s)).then((function(n){1==n.data.status?(t.isLoading=!1,"CHECKOUT"==s.channelName?(t.setOrderId(n.data.orderId),t.setPrice(t.skus[t.skusIndex].price),setTimeout((function(){t.$router.push("/information")}),200)):window.location.href=n.data.targetURL,t.orderLogEvent(e,"","success",n.data.orderId)):t.orderLogEvent(e,n.data.message,"fail","")}))},orderLogEvent:function(e,t,s,n){this.base.logEvent("event_payment_create_order_result",{coins:this.skus[this.skusIndex].counts,price:"₹".concat(this.skus[this.skusIndex].price),sku:this.skus[this.skusIndex].sku,result:s,reason:t,orderId:n,channel_type:this.mychannels[e].channelType,channel_name:this.mychannels[e].channelName})},countTime:function(e){var t=parseInt(e%86400/3600)>9?parseInt(e%86400/3600):"0"+parseInt(e%86400/3600),s=parseInt(e%3600/60)>9?parseInt(e%3600/60):"0"+parseInt(e%3600/60),n=e%60>9?e%60:"0"+e%60;if(t>168&&(this.isTime=!1),t>1){var i=t+":"+s+":"+n;this.time=this.$t("ends").replace("#",i)}else{var c=s+":"+n;this.time=this.$t("ends").replace("#",c)}e<1&&(clearInterval(this.getTimer),this.skus.shift())},filterTimes:function(e){var t=this;this.countTime(e),this.getTimer=setInterval((function(){e--,t.countTime(e)}),1e3)}})},y=b,A=(s("c219"),Object(m["a"])(y,n,i,!1,null,null,null));t["default"]=A.exports},bc3d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMAPRUlDDuC25oAAABISURBVDjLYxg5wNkEuziLoKACVglmQUEhHBJQLZhG4dKiiEsL09DU4oBLiwFJEgijCFuOcO7Q0IBIDISTDyLBEUqimIl6RAEAnmsK8TMMvIsAAAAASUVORK5CYII="},c219:function(e,t,s){"use strict";var n=s("4fc1"),i=s.n(n);i.a},f2ee:function(e,t,s){var n={"./ic_gem_gold_com.cherru.pro.video.chat.png":"0206","./ic_gem_gold_com.videochat.livechat.png":"2de9"};function i(e){var t=c(e);return s(t)}function c(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id="f2ee"}}]);