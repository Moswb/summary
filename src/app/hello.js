import React, {Component} from 'react';

export class Hello extends Component {
  render() {
    const cesuanArr = [{
      name: '年度运势',
      url: 'https://mobile.51wnl.com/numberology/ndys/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&boundId=[BUNDLE]&pushToken=[PTOKEN]&pToken=[PTOKEN]&posId=[posId]',
      loc: 'wnl_ndys',
      from: 'chenyulin'
    }, {
      name: '流月运势',
      url: 'https://mobile.51wnl.com/numberology/lyys/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&pushToken=[PTOKEN]&pToken=[PTOKEN]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&posId=[posId]&boundId=[BUNDLE]',
      loc: 'wnl_lyys',
      from: 'chenyulin'
    }, {
      name: '八字合婚',
      url: 'http://mobile.51wnl.com/numberology/Tools/bzhh.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&posId=[posId]&boundId=[BUNDLE]&pushToken=[PTOKEN]&pToken=[PTOKEN]',
      loc: 'wnl_jryc',
      from: 'chenyulin'
    }, {
      name: '塔罗事业运',
      url: 'https://mobile.51wnl.com/numberology/tlp/dist/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&pushToken=[PTOKEN]&pToken=[PTOKEN]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&boundid=[BUNDLE]&posId=[posId]',
      loc: 'wnl_tlp',
      from: 'chenyulin'
    }, {
      name: '星座感情合盘',
      url: 'http://mobile.51wnl.com/numberology/xzhp/src/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&posId=[posId]&boundId=[BUNDLE]&pushToken=[PTOKEN]&pToken=[PTOKEN]',
      loc: 'wnl_xzhp',
      from: 'chenyulin'
    }, {
      name: '塔罗感情运',
      url: 'https://mobile.51wnl.com/numberologynew/gqy/#/?userId=[WNLUSERID]&deviceId=[OPENUDID]&pushToken=[PTOKEN]&pToken=[PTOKEN]&mac=[MAC]&imei=[IMEI]&boundid=[BUNDLE]&posId=[posId]&DONTURLENCODE=[DONTURLENCODE]',
      loc: 'wnl_gqy',
      from: 'liuyu'
    }, {
      name: '塔罗工作小工具',
      url: 'https://mobile.51wnl.com/numberology/worktool/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&pushToken=[PTOKEN]&pToken=[PTOKEN]&mac=[MAC]&imei=[IMEI]&boundid=[BUNDLE]&posId=[posId]&DONTURLENCODE=[DONTURLENCODE]',
      loc: 'wnl_xgj',
      from: 'liuyu'
    }, {
      name: '2018年度运势',
      url: 'https://mobile.51wnl.com/numberology/2018ndys/#/?userID=[WNLUSERID]&deviceId=[OPENUDID]&pushToken=[PTOKEN]&PToken=[PTOKEN]&mac=[MAC]&imei=[IMEI]&boundid=[BUNDLE]&posId=[posId]&Idfa=[IDFA]&DONTURLENCODE=[DONTURLENCODE]',
      loc: 'wnl_2018ndys',
      from: 'liuyu'
    }, {
      name: '星盘另一半',
      url: 'https://mobile.51wnl.com/numberology/wnl_xplyb/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&boundId=[BUNDLE]&pushToken=[PTOKEN]&pToken=[PTOKEN]&posId=[posId]',
      loc: 'wnl_xplyb',
      from: 'kuangpengfei'
    }, {
      name: '星盘子女运',
      url: 'https://mobile.51wnl.com/numberology/zny/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&boundId=[BUNDLE]&pushToken=[PTOKEN]&pToken=[PTOKEN]&posId=[POSID]',
      loc: 'wnl_zny',
      from: 'kuangpengfei'
    }, {
      name: '八字测算',
      url: 'https://mobile.51wnl.com/numberology/bzcs/bzcs_index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&boundId=[BUNDLE]&pushToken=[PTOKEN]&pToken=[PTOKEN]&posId=[POSID]',
      loc: 'bzcs',
      from: 'kuangpengfei'
    }, {
      name: '星盘前世今生',
      url: 'https://mobile.51wnl.com/numberology/qsjs/index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&pushToken=[PTOKEN]&pToken=[PTOKEN]&mac=[MAC]&imei=[IMEI]&idfa=[IDFA]&channel=[CHANNEL]&posId=[posId]&boundId=[BUNDLE]',
      loc: 'wnl_qsjs',
      from: 'kuangpengfei'
    }, {
      name: '星盘合盘',
      url: 'https://mobile.51wnl.com/numberology/xphp/index.html',
      loc: 'wnl_xphp',
      from: 'kuangpengfei'
    }, {
      name: '择吉日',
      url: 'https://coco70.youloft.cn/mingli/zj_index.html?userId=[WNLUSERID]&deviceId=[OPENUDID]&pushToken=[PTOKEN]&pToken=[PTOKEN]&mac=[MAC]&imei=[IMEI]&boundid=[BUNDLE]&posId=[posId]&DONTURLENCODE=[DONTURLENCODE]',
      loc: 'mingLi',
      from: 'yechuanjie'
    }];
    console.log(cesuanArr);
    const cesuanLists = cesuanArr.map((cesuan, i) => {
      return (<div className="cesuanItem" key={i}><a href={cesuan.url}><h3>{cesuan.name}</h3><p>@{cesuan.loc} - [{cesuan.from}]</p></a></div>);
    });
    return (
      <div>
        <h1>{'自有测算汇总'}</h1>
        <div>{cesuanLists}</div>
      </div>
    );
  }
}
