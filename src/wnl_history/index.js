/* eslint-disable */
import $ from 'jquery';
import './history.css';

const ua = window.navigator.userAgent;
let browser = {
  isWx() {
    if (ua.match(/micromessenger/i)) {
      return true;
    }
    return false;
  },
  isWnl() {
    return ua.toLowerCase().indexOf('wnl') > -1;
  }
};
function utf16to8(str) {
  let out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if ((c >= 0x0001) && (c <= 0x007F)) {
          out += str.charAt(i);
      } else if (c > 0x07FF) {
          out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
          out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
      } else {
          out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
      }
  }
  return out;
}
function getQueryValue(key) {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg) || window.location.hash.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}
function paramfunc(str) {
  window[str] = getQueryValue(str) || window.localData[str];
  let reg = (regName => '/' + window[regName] + '/i')(str);
  if (reg.indexOf(str) !== -1) {
    window[str] = '';
  } else if (window[str] === 'null' || window[str] === null || window[str] === undefined) {
    window[str] = '';
  }
}
const wnlHistory = {
  params: ['userId', 'deviceId', 'posId', 'pToken', 'pushToken', 'mac', 'imei', 'idfa', 'boundId', 'couponId', 'channel', 'openid', 'unionid', 'nickName'],
  init() {
    this.initParams();
    this.initHistoryBtn();
    if (window.userId === '' && window.deviceId === '') {
      this.getParams();
    } else {
      this.showHistoryBtn();
    }
  },
  showHistoryBtn() {
    let historyBaseUrl = '//coco70.51wnl.com/numberologynew/cs/list.html';
    let historyUrl = `${historyBaseUrl}${historyBaseUrl.indexOf('?') > -1 ? '&' : '?'}userId=${window.userId}&deviceId=${window.deviceId}&pushToken=${window.pushToken}&pToken=${window.pToken}&mac=${window.mac}&imei=${window.imei}&boundid=${window.boundId}&idfa=${window.idfa}`;
    this.historyBtn.style.display = 'block';
    this.historyBtn.setAttribute('href', historyUrl);
  },
  initHistoryBtn() {
    this.historyBtn = window.document.createElement('a');
    this.historyBtn.innerHTML = '我的订单';
    this.historyBtn.setAttribute('class', 'wnl_history_btn');
    global.document.body.appendChild(this.historyBtn);
  },
  initParams() {
    window.localData = localStorage.getItem('wnl_numerology_history_data');
    window.localData = window.localData ? JSON.parse(window.localData) : {};
    this.params.forEach((param) => {
      paramfunc(param);
      window.localData[param] = window[param];
    });
    window.localData.couponId = '';
    window.localStorage.setItem('wnl_numerology_history_data', JSON.stringify(window.localData));
    if (typeof window.localStorage.getItem('wnl_history_couponId') === 'string' && window.localStorage.getItem('wnl_history_couponId').length > 0) {
      window.couponId = window.localStorage.getItem('wnl_history_couponId');
    }
  },
  getParams() {
    let wxloginUrl = '//u.51wnl.com/Login/OpenLogin?cid=Youloft_Android&av=4.2.6&mac=00:11:22:33:44:55&idfa=b622c089e7e14d2c2fa8c9129dafbb51&did=b622c089e7e14d2c2fa8c9129dafbb51&chn=wnl_anzhi&cc=CN&lang=zh&bd=com.youloft.calendar';
    let guidUrl = '//coco70.51wnl.com/numberologynew/UniqueID/NewGuid';
    if (browser.isWx()) {
      if (!window.openid) {
        window.localStorage.setItem('wnl_history_couponId', window.couponId);
        window.location.href = '//b.cqyouloft.com/atcapi/WeChat/WxProcess?reurl=' + window.location.href;
      } else {
        window.localStorage.setItem('wnl_history_couponId', '');
        let nickName = window.btoa(utf16to8(decodeURIComponent(window.location.href.split('nickname=')[1].split('&')[0])));
        let datastring = '{\'OpenId\':\'' + window.openid + '\',\'UnionId\':\'' + window.unionid + '\',\'Gender\':0,\'Platform\':\'2\',\'OpenName\':\'' + nickName + '\',\'Desc\':\'\',\'AppId\':\'ServiceAccount\'}';
        let data = {
          DataString: datastring
        };
        $.post(wxloginUrl, data).then((res) => {
          this.setParams(res.data.wnlUserId);
        })
      }
    } else if (!browser.isWnl()) {
      if(window.location.hostname === '51wnl') {
        $.get(guidUrl).then((res) => {
          this.setParams(res.toString());
        });
      } else {
        this.setParams(parseInt(Math.random()*1000000).toString(16) + '-' + parseInt(Math.random()*10000) + '-' + parseInt(Math.random()*10000) + '-' + parseInt(Math.random()*1000000).toString(16));
      };
    }
  },
  setParams(str) {
    window.localData.deviceId = str;
    window.localData.userId = str;
    window.deviceId = str;
    window.userId = str;
    window.localStorage.setItem('wnl_numerology_history_data', JSON.stringify(window.localData));
    this.showHistoryBtn();
  }
};
export default wnlHistory;
