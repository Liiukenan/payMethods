<template>
  <div id="app" :class="ar">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
  </div>
</template>
<script>
import Loading from './components/Loading';
import { mapState,mapMutations,mapActions } from 'vuex';
import Vue from "vue";
export default {
  data() {
    return {
      ar:window.lang=="ar"?'ar':false,
      isIOS:false
    };
  },
  watch: {
  },
  methods: {
    getToken(token){
       Vue.prototype.token=token;
    },
  },
  created(){
    let u = navigator.userAgent;
    this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    window.getToken=this.getToken;
    if(this.isIOS){
      try {
        window.webkit.messageHandlers.getToken.postMessage('');
      } catch (error) {
        console.log(error);
      }
    }else{
      try {
        Vue.prototype.token=jsInteractive.getToken();
      } catch (error) {
        console.log(error);
      }
    }
     
  }
};
</script>

