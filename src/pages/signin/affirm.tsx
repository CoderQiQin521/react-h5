import React, { Component } from 'react';
import { Button, WingBlank } from 'antd-mobile';
import Navbar from '@/components/navbar';
import './affirm.less';
class affirm extends Component {
  qiandao(e) {
    console.log('签到');
    console.log(this);
    console.log(e);
  }
  render() {
    return (
      <div className="affirm">
        <Navbar name="扫码签到"></Navbar>
        <div className="heard">
          <h3 className="margin-bottom-xs">XXX会议（这里是会议名称）</h3>
          <p>签到类型：大会现场签到</p>
          <p>参会人员：张XXX</p>
        </div>
        <WingBlank>
          <Button
            type="primary"
            className="btn"
            onClick={this.qiandao.bind(this, 1)}
          >
            确认签到
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default affirm;
