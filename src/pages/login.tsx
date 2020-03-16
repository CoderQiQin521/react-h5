import * as React from 'react';
import { Link, history } from 'umi'
import { Button, Toast, List, InputItem, Card, WhiteSpace, WingBlank } from 'antd-mobile';
import './login.less'

export default class Login extends React.Component {
  render() {
    return (<WingBlank>
      <div className="text-center">用户登录</div>
      <List>
        <InputItem placeholder='请输入手机号'>手机号</InputItem>
        <InputItem placeholder='请输入密码'>密码</InputItem>
        <WhiteSpace></WhiteSpace>
        <WhiteSpace></WhiteSpace>
        <Button type="primary">登录</Button>
        <Link to="/register">新用户注册</Link>
      </List>
    </WingBlank >);
  }
}