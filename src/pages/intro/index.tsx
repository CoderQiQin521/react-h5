import './index.less';
import { Link, history } from 'umi';
import { Button, WingBlank, NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';

class index extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //     haha:'haha'
  //   };
  // }
  onChange() {
    console.log(1111);
  }
  my() {
    console.log('我要报名');
    history.goBack();
  }
  render() {
    return (
      <div className="my-box">
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={this.my.bind(this)}
          >
            NavBar
          </NavBar>
        </div>
        <ul>
          <li>
            <p>基本信息</p>
            <p>XXX会议（这里是会议名称）</p>
            <p>会议举办时间：2020-02-03 10:00</p>
            <p>举办地址：郑州市XX区XXX</p>
          </li>
          <li>
            <p>酒店信息</p>
            <p>酒店名称+地址</p>
            <p>酒店名称+地址</p>
            <p>东方大酒店，黄河路180号</p>
            {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <h2>It is {this.state.haha}.</h2> */}
          </li>
        </ul>
        <div className="bottom-box">
          <Button className="shouye" onClick={this.onChange}>
            首页
          </Button>
          <Button type="primary" onClick={this.my} className="btn">
            我要报名
          </Button>
        </div>
      </div>
    );
  }
}

export default index;
