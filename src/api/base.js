import md5 from "js-md5";
import {getQueryVariable,getTime} from "./util"
let u = navigator.userAgent;
const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export default {
  getHelp(orderNumber,data) {
    if (isIOS) {
      try {
        window.webkit.messageHandlers.jumpAihelp.postMessage('');
      } catch (e) {        
        console.log(e);
      }
    }
  },
  logEvent(event,jsonInfo){
    if(isIOS){
      try {
        let message = {
          event: event,
          jsonParams: JSON.stringify(jsonInfo)
        };
        window.webkit.messageHandlers.logEvent.postMessage(message);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
};

