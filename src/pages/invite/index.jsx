import React, { Component } from 'react';
import './index.less';
import Navbar from '@/components/navbar';

class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="invite">
        <Navbar name="邀请嘉宾"></Navbar>
        <div className="invite-warp">
          <ul>
            <li>
              <div className="left">
                <div className="box"></div>
              </div>
              <div className="right">
                <p>
                  李小刚 <span>运营专家</span>
                </p>
                <p>
                  借助行业领先的百度搜索和资讯流推荐， 根据用户的意图和行为数据,
                  超过200万种特征根 据用户的意图和行为数据
                </p>
              </div>
            </li>
            <li>
              <div className="left">
                <div className="box"></div>
              </div>
              <div className="right">
                <p>
                  李小刚 <span>运营专家</span>
                </p>
                <p>
                  借助行业领先的百度搜索和资讯流推荐， 根据用户的意图和行为数据,
                  超过200万种特征根 据用户的意图和行为数据
                </p>
              </div>
            </li>
            <li>
              <div className="left">
                <div className="box"></div>
              </div>
              <div className="right">
                <p>
                  李小刚 <span>运营专家</span>
                </p>
                <p>
                  借助行业领先的百度搜索和资讯流推荐， 根据用户的意图和行为数据,
                  超过200万种特征根 据用户的意图和行为数据
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default index;
