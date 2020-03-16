import * as React from 'react';
import { Link, history } from 'umi'
import { Button, Toast, List, InputItem, Card, WhiteSpace, WingBlank } from 'antd-mobile';
import './login.less'

export default class Login extends React.Component {
  render() {
    return (<WingBlank className="wrap">
      <div className="title tc margin-bottom-sm">用户登录</div>
      <div className="bg-white">
        <WingBlank>
          <WhiteSpace></WhiteSpace>
          <InputItem type="phone" placeholder='请输入手机号'>手机号</InputItem>
          <InputItem type="password" placeholder='请输入密码'>密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <Button type="primary">登录</Button>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <Link to="/register">新用户注册</Link>
          <WhiteSpace></WhiteSpace>
        </WingBlank>
      </div>
    </WingBlank >);
  }
}