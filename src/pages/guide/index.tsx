import React, { Component } from 'react';
import Navbar from '@/components/navbar';
import './index.less';
class index extends Component {
  render() {
    return (
      <div className="warp">
        <Navbar name="会议指南"></Navbar>
        <div className="content">
          <h3>郑州市xx区xxx会展中心66层</h3>
          <p>
            这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线这里是出行方式及路线
          </p>
        </div>
      </div>
    );
  }
}

export default index;
