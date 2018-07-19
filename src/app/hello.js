import React, {Component} from 'react';
import cesuanArr from '../constans/numberologies';

export class Hello extends Component {
  render() {
    const cesuanLists = cesuanArr.map((cesuan, i) => {
      const rand = [(parseInt(Math.random() * 3, 10) + 1) * 51, (parseInt(Math.random() * 3, 10) + 1) * 51, (parseInt(Math.random() * 3, 10) + 1) * 51, ((Math.random() * 0.2) + 0.8)];
      return (
        <div onClick={this.handleRedirect} value={cesuan.url.replace('https', 'http')} className="cesuanItem" key={i} style={{backgroundImage: `linear-gradient(to bottom right, rgba(${rand[0]}, ${rand[1]}, ${rand[2]}, ${rand[3] - 0.4}), rgba(${rand[0]}, ${rand[1]}, ${rand[2]}, ${rand[3]})`}}>
          <h3>{cesuan.name}</h3>
          <p>{cesuan.desc}</p>
          <p>{cesuan.Tech} @{cesuan.Time}</p>
          <i className="light"/>
        </div>
      );
    });
    return (
      <div>
        <div className="header">
          <h1>陈雨林@万年历</h1>
          <p>么么哒</p>
        </div>
        <div className="cesuanContainer">{cesuanLists}</div>
        <div className="footer">
          jirqoadai &copy; 2016-2018
        </div>
      </div>
    );
  }
  handleRedirect(e) {
    location.href = e.currentTarget.getAttribute('value');
  }
}
