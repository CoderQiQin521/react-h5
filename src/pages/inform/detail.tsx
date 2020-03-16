import * as React from 'react';
import './detail.less';
export default class PageType extends React.Component {
  render() {
    const type = this.props.location.query.id;
    console.log(this.props.location);
    return (
      <div className="box">
        <h3>这里是通知标题</h3>
        <div>这个是 动态路由页面 , 值是: {type}</div>
        <p>2020-02-03 10:00</p>
        <div className="content">
          这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容
          这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容
        </div>
      </div>
    );
  }
}
