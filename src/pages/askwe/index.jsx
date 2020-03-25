import React, { Component } from 'react';
import './index.less';
import Navbar from '@/components/navbar';

class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="askwe">
        <Navbar name="联系我们"></Navbar>
        <div className="askwe-warp">
          <ul>
            <li>
              <p>会场服务</p>
              <p>李xx：15839956998</p>
              <p>李xx：15839956998</p>
              <p>邮箱：106982189@163.com</p>
            </li>
            <li>
              <p>会场服务</p>
              <p>李xx：15839956998</p>
              <p>李xx：15839956998</p>
              <p>邮箱：106982189@163.com</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default index;
