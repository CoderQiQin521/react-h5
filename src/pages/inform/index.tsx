import React from 'react';
import './index.less';
import { Link, history } from 'umi';
export default () => {
  return (
    <div className="my-box">
      <ul>
        <li>
          <Link to="./inform/detail/10">
            <p>关于XXX的通知关于XXX的通知关于XXX的通知关于XXX的通知</p>
            <p>2020-02-03 10:00</p>
          </Link>
        </li>
        <li>
          <Link to="./inform/detail/4">
            <p>关于XXX的通知关于XXX的通知关于XXX的通知关于XXX的通知</p>
            <p>2020-02-03 10:00</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
