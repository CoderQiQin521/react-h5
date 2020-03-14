import * as React from 'react';
import { Component } from 'react';
import './user.less';

/*
待解决问题
1>路由
  -嵌套
  -传参
2>生命周期
3>父子通讯
  -单项绑定
4>性能优化
  -componentWillReceiveProps
5>工程化(react-umi)
*/

export default class User extends Component {
  constructor(params: any) {
    super(params);
    console.log('params: ', params);
    console.log(0, '构造函数初始化事件');
  }
  state = {
    msg: '基本信息',
    list: [1, 2, 3, 4, 5]
  }
  componentWillMount() {
    console.log(1, '第一个生命周期 <组件将要挂载>');

    // setTimeout(() => {
    //   this.setState({
    //     msg: '基本哈哈哈啊哈信息'
    //   })
    // }, 1000);
  }
  componentDidMount() {
    console.log(2, '第二个生命周期 <组件已经挂载>');
  }

  componentWillUpdate() {
    console.log(3, '第三个生命周期 <组件将要更新>');

  }

  shouldComponentUpdate(nextProps, nextState) {
    // 返回true 更新组件,  false  不更新组件
    /*如果你确定组件的 props 或者 state 的改变不需要重新渲染，可以通过在这个方法里通过返回 false 来阻止组件的重新渲染，返回 `false 则不会执行 render 以及后面的 componentWillUpdate，componentDidUpdate 方法。*/
    console.log('shouldComponentUpdate---nextProps: ', nextProps);
    return true
  }

  componentWillReceiveProps(nextProps) { // 父组件更改props将调用,接收一个新的props
    console.log('componentWillReceiveProps---nextProps: ', nextProps);

  }

  componentWillUnmount() {// 组件将要卸载

  }

  componentDidUpdate() {
    console.log(5);

  }



  render() {
    const { msg, list } = this.state;
    console.log('render', '每次渲染会再次触发');
    return (<div>
      {msg}
      <h1>props.active: {this.props.active}</h1>
      xxx会议（这里是会议名称）
      <h1 className="a">{this.state.msg}</h1>
      <ul>
        {
          list.map(item => (<li>{item}</li>))
        }
      </ul>
    </div >);
  }
}