import React from 'react';
import './index.less';
import { Link, history } from 'umi';
import { Button, WingBlank } from 'antd-mobile';
export default () => {
  return (
    <div className="my-box">
      <ul>
        <li>
          <p>基本信息</p>
          <p>XXX会议（这里是会议名称）</p>
          <p>会议举办时间：2020-02-03 10:00</p>
          <p>举办地址：郑州市XX区XXX</p>
        </li>
        <li>
          <p>酒店信息</p>
          <p>酒店名称+地址</p>
          <p>酒店名称+地址</p>
          <p>东方大酒店，黄河路180号</p>
        </li>
      </ul>
      <Button type="primary">primary</Button>
      <div className="bottom-box">
        <div className="shouye">首页</div>
        <div className="btn">我要报名</div>
      </div>
    </div>
  );
};
