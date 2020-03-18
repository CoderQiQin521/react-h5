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
  getVal = () => {
    if (event && event.target && event.target.value) {
      console.log('event: ', event);
      let value = event.target.value;
      this.setState(() => ({ value1: value }));
    }
  };
  saveData = () => {
    console.log(this.state.value1);
    console.log(this);
  };
  render() {
    const serch = <div onClick={this.saveData}>搜索</div>; //函数中使用 =() =>已绑定this
    // const serch = <div onClick={this.saveData.bind(this)}>搜索</div>;
    // const serch = <div onClick={a=>this.saveData(a)}>搜索</div>;
    return (
      <div className="serch">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={a => this.back(a)}
          rightContent={serch}
        >
          <List>
            <InputItem
              placeholder="请输入公司名称"
              // onChange={this.getVal.bind(event)}
              onChange={event => this.getVal(event)}
            ></InputItem>
          </List>
        </NavBar>
        <div className="my-content">
          <ul>
            <li>
              <Link to="./fapiao/detail/10">
                公司名称：上海永威数据采集公司
              </Link>
            </li>
            <li>公司名称：上海永威数据采集公司</li>
            <li>公司名称：上海永威数据采集公司</li>
            <li>公司名称：上海永威数据采集公司</li>
            <li>公司名称：上海永威数据采集公司</li>
            <li>公司名称：上海永威数据采集公司</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default index;
