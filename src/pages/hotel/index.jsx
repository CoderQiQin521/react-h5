import React, { Component } from 'react';
import './index.less';
import Navbar from '@/components/navbar';
import { List, InputItem, WhiteSpace, Button, Picker } from 'antd-mobile';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {
            label: '希尔顿大酒店',
            value: '希尔顿大酒店',
          },
          {
            label: '皇家大酒店',
            value: '皇家大酒店',
          },
          {
            label: '天上人间大酒店',
            value: '天上人间大酒店',
          },
        ],
      ],
      cols: 1,
      sValue: ['希尔顿大酒店'],
    };
  }
  setData(v) {
    this.setState({
      sValue: v,
    });
    console.log(v);
  }
  setData1() {
    console.log('onchange');
  }
  render() {
    return (
      <div className="hotel">
        <Navbar name="酒店预订"></Navbar>
        <div className="hotel-warp">
          <div className="jiudian">
            <h1>酒店预订</h1>
            <p>选择酒店</p>
            <div className="pk">
              <Picker
                data={this.state.data}
                title="选择酒店"
                cascade={false}
                value={this.state.sValue}
                onChange={v => this.setData(v)}
                // onChange={v => this.setState({ sValue: v })}
                // onOk={v => this.setData(v)}
                // onOk={v => this.setState({ sValue: v })}
              >
                <List.Item arrow="horizontal"></List.Item>
              </Picker>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
