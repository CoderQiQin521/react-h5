import * as React from 'react';
import './detail.less';

export default class PageType extends React.Component {
  render() {
    const { id } = this.props.match.params;
    console.log('id: ', id);
    
    
    
    return (
      <div className="box">
        <h3>这里是通知标题</h3>
        <div>这个是 动态路由页面 , 值是: {id}</div>
        <p>2020-02-03 10:00</p>
        <div className="content">
          这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容
          这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容这里是通知内容
        </div>
      </div>
    );
  }
}
