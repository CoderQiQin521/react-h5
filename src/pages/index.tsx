import React from 'react';
import styles from './index.less';
import About from './about';
import User from './other/user';
import { Link, history } from 'umi';
import {
  Button,
  Grid,
  Toast,
  List,
  InputItem,
  Card,
  WhiteSpace,
  WingBlank,
} from 'antd-mobile';
const arr = [
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '会议简介',
    path: './intro',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '报名参会',
    path: './about',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '会议通知',
    path: './inform',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '现场签到',
    path: './signin',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '会议日程',
    path: './days',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '开具发票',
    path: './fapiao',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '邀请嘉宾',
    path: './invite',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '酒店预订',
    path: './about',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '会场指南',
    path: './guide',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '联系我们',
    path: './about',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: '个人中心',
    path: './about',
  },
];

export default class Index extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    let { props } = this;
    return (
      <div className={styles.container}>
        <Grid
          data={arr}
          columnNum={3}
          renderItem={dataItem => (
            <Link to={dataItem.path}>
              <div>
                <img
                  src={dataItem.icon}
                  style={{ width: '75px', height: '75px' }}
                  alt=""
                />
                <div
                  style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}
                >
                  <span>{dataItem.title}</span>
                </div>
              </div>
            </Link>
          )}
        />
      </div>
    );
  }
}
