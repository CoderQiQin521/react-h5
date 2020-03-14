import React from 'react';
import styles from './index.less';
import About from './about'
import User from './other/user'
import { Link, history } from 'umi'
import { Button, Toast, List, InputItem, Card, WhiteSpace, WingBlank } from 'antd-mobile';

let aa: string = '用户登录'
// should 声明周期问题
setTimeout(() => {
  aa = '用户登录22';
}, 1000);
export default class Index extends React.Component {
  constructor(props: any) {
    super(props);
  }

  myclick() {
    console.log(this);
    Toast.info('数据加载中...', 1);
    history.push('/other/user');
  }

  render() {
    let { props } = this;
    return (
      <div className={styles.container}>
        <WingBlank>
          <WhiteSpace></WhiteSpace>

          <List>
            <InputItem placeholder='公司名称'></InputItem>
            <InputItem placeholder='公司税号'></InputItem>
            <InputItem placeholder='公司地址 电话'></InputItem>
          </List>
          {/* 
          这里是问题说明
          */}

          <Card>
            <Card.Header title="会议信息"></Card.Header>
            <Card.Body>
              <div>
                项目内容：这里是项目内容
                主讲：这里是主讲人
                会场：这里是项目举办会场
              </div>
            </Card.Body>
          </Card>
          <WhiteSpace></WhiteSpace>
          <dl>
            <dt><h3>xxx会议（这里是会议名称）</h3></dt>
            <dd>签到类型：大会现场签到</dd>
            <dd>参会人员：张xxx</dd>
          </dl>
          <WhiteSpace></WhiteSpace>
          <Button icon="check-circle-o" type="primary" onClick={this.myclick.bind(this)}>确认签到</Button>
          <WhiteSpace></WhiteSpace>
          {/* |
        <a href="/user">user</a> */}
          <hr />

          <Link to="/about">about</Link>
          <Link to="/other/user">user</Link>

          {props.children}

          <div className={styles.title}>index-footer  这是umi框架</div>
          {/* <About></About>
        <User active="jaklj1111as"></User> */}
        </WingBlank>
      </div >
    );
  }
}
