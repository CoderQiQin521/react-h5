import * as React from 'react';

export default class PageType extends React.Component {
  render() {
    const { type } = this.props.match.params;
    if (type) {
      /*条件渲染*/
    }
    return (
      <div>这个是 动态路由页面 ,  值是:  {type}</div>
    )
  }
}

