import React, { Component } from 'react';

import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';
import './index.less';
import Navbar from '@/components/navbar';
const Step = Steps.Step;
const customIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 42"
    className="am-icon am-icon-md"
  >
    <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
      <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
      <path
        fill="#FFF"
        d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z"
      />
    </g>
  </svg>
);
const title = (props: any) => (<div className="text-box">
  <h4>项目内容：{props.title}</h4>
  <p>主讲：{props.name}</p>
  <p>会场：{props.add}</p>
</div>);


class index extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      list: []
    }
  }

  async componentWillMount() {
    console.log(1);
    let fs = await fetch('/api/days')
    let res = await fs.json()
    this.setState({
      list: res.days
    })
    // console.log('res: ', res);

  }

  componentDidMount() {
    console.log(2);

  }

  render() {
    console.log(3);
    let { list } = this.state;

    return (
      <div className="days-box">
        <Navbar name="会议日程"></Navbar>
        <ul>
          {
            list.map((item: { date: React.ReactNode; num: number | undefined; detail: any[]; }, index: string | number | undefined) => <li key={index}>
              <p className="time">{item.date}</p>
              <div className="content-box">
                <Steps current={0}>
                  {
                    item.detail.map((item: { time: any; }) => <Step
                      title={item.time}
                      icon={customIcon()}
                      description={title(item)}
                    />)
                  }
                </Steps>
              </div>
            </li>)
          }
        </ul>
      </div>
    );
  }
}

export default index;
