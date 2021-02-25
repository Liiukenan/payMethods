import axios from 'axios';
import {getQueryVariable} from './util'
/*第一层if判断生产环境和开发环境*/

axios.defaults.timeout = 30000;
export function getpkg() {
  let pkgName=getQueryVariable('pkgName');
  switch (pkgName) {
    case 'com.videochat.livechat':
      return 'https://api-tp-p.livchatvideo.com/'
    case 'com.cherru.pro.video.chat':
      return 'https://api-tp-p.cherruvideo.com/'
  }
}
if (process.env.NODE_ENV === 'production') {
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境
    axios.defaults.baseURL = getpkg(); //路径
  } else {
    //test 测试环境
    axios.defaults.baseURL = 'https://www.fastmock.site/mock/efdd8393c708477a63a3461fb7d77ed0/paythods'; //路径
  }
} else { //dev 开发环境 
  axios.defaults.baseURL = 'https://www.fastmock.site/mock/efdd8393c708477a63a3461fb7d77ed0/paythods';
  // axios.defaults.baseURL = getpkg(pkgName);
}

export function _channels(data){
   return axios.post('payment/web/payment-channels',data);
}
export function _createOrder(data){
    return axios.post('payment/web/create-order',data);
}
export function _history(data){
  return axios.post('payment/web/cko-card-history',data);
}

export function _ckoPayment(data){
  return axios.post('payment/web/cko-payment',data);
}