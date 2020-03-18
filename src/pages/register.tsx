import * as React from 'react';
import { Button, Toast, List, InputItem, Card, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  //xxx会议（这里是会议名称）
  //xxx会议（这里是会议名称）

  render() {
    return (
      <div className="bg-white">
        <WingBlank>
          <div className="tc">
            <h3>xxx会议（这里是会议名称）</h3>
            会议时间：2020-02-03-02-05
          </div>
          <div>
            <div>填写报名信息</div>
            <div>姓名</div>
            <InputItem></InputItem>
            <div>手机号</div>
            <InputItem type="phone"></InputItem>
            <div>密码</div>
            <InputItem type="password"></InputItem>
            <div>确认密码</div>
            <InputItem type="password"></InputItem>
          </div>

          <Button type="primary">提交注册</Button>
        </WingBlank >
      </div>
    );
  }
}