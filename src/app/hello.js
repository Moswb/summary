import React, {Component} from 'react';
import cesuanArr from '../constans/numberologies';

export class Hello extends Component {
  render() {
    console.log(cesuanArr);
    const cesuanLists = cesuanArr.map((cesuan, i) => {
      return (<div className="cesuanItem" key={i}><a href={cesuan.url.replace('https', 'http')}><h3>{cesuan.name}</h3><p>@{cesuan.loc} - [{cesuan.from}]</p></a></div>);
    });
    return (
      <div>
        <h1>{'自有测算汇总'}</h1>
        <div>{cesuanLists}</div>
      </div>
    );
  }
}
