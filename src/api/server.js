import axios from 'axios';
import {getQueryVariable} from './util'
/*第一层if判断生产环境和开发环境*/

axios.defaults.timeout = 30000;
if (process.env.NODE_ENV === 'production') {
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境
    axios.defaults.baseURL = 'http://api-cs.fachat.net/'; //路径
  } else {
    //test 测试环境
    axios.defaults.baseURL = 'http://54.222.148.146:47000/'; //路径
  }
} else { //dev 开发环境 
  axios.defaults.baseURL = 'http://api-cs.livchatvideo.com/';
}

export function _mylist(data){
    return axios.post('common_service/pay_records',data);
}
export function _refresh(data){
    return axios.post('http://api-tp-p.livchatvideo.com/payment/reconfirm_by_h5',data);
}

// http://54.222.148.146:81/payment/reconfirm_by_h5


// http://vshow-api-tp-p.1-1.io/payment/reconfirm_by_h5


