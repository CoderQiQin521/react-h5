import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link, history } from 'umi';

class navbar extends Component {
  back() {
    history.goBack();
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.back.bind(this)}
        >
          {this.props.name}
        </NavBar>
      </div>
    );
  }
}

export default navbar;
