import React, { Component } from 'react';
import './index.less';
import { Link, history } from 'umi';
class index extends Component {
  saoma() {
    history.push('./signin/affirm');
  }
  render() {
    return (
      <div>
        <div className="top">
          <div className="left">
            <p>XXX会议（这里是会议名称）</p>
            <p>时间：2020-02-03-02-05</p>
            <p>举办地：郑州市XX区XXX</p>
          </div>
          <div className="right" onClick={this.saoma}>
            <div className="img-box"></div>
            <p className="margin-top-xs">扫码签到</p>
          </div>
        </div>
        <div className="center">
          <div className="erweima"></div>
          <p className="margin-top-xs">我的签到码</p>
        </div>
        <div className="bottom">
          <p className="title">签到记录</p>
          <div className="contend">
            <div className="heard">
              <div>参会人员</div>
              <div>签到类型</div>
              <div>签到时间</div>
            </div>
            <ul className="list">
              <li>
                <div>张XX</div>
                <div>大会注册签到</div>
                <div>2020-02-03 10：00</div>
              </li>
              <li>
                <div>张XX</div>
                <div>大会注册签到</div>
                <div>2020-02-03 10：00</div>
              </li>
              <li>
                <div>张XX</div>
                <div>大会注册签到</div>
                <div>2020-02-03 10：00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
