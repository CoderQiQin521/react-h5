import * as React from 'react';
export default (props) => {
  return (
    <div>
      <header>局部头部</header>
      {props.children}
    </div>
  )
}