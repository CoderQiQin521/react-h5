import React, { Component } from 'react';
import { NavBar, Icon, List, InputItem } from 'antd-mobile';
import { Link, history } from 'umi';
import './index.less';

class index extends Component {
  state = { value1: '' };
  back() {
    history.goBack();
    console.log(this);
  }
  sousuo() {
    console.log('sousuo');
    console.log(this);
  }
  // handleMaxRestoreUp = () => {
  //     if (event && event.target && event.target.value) {
  //         let value = event.target.value;
  //         this.setState(() => ({ value1: value }))
  //     }
  // }
  getVal = () => {
    if (event && event.target && event.target.value) {
      console.log('event: ', event);
      let value = event.target.value;
      this.setState(() => ({ value1: value }));
    }
  };
  saveData = () => {
    console.log(this.state.value1);
  };
  render() {
    const serch = <div onClick={this.saveData}>搜索</div>;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.back.bind(this)}
          rightContent={serch}
        >
          <List>
            <InputItem
              placeholder="请输入公司名称"
              onChange={event => this.getVal(event)}
            ></InputItem>
          </List>
        </NavBar>
      </div>
    );
  }
}

export default index;
