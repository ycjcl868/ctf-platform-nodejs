import React, { Component } from 'react';
import { Button } from 'antd';
import style from './page.less';

export default class extends Component {
  render() {
    return (
      <div>
        <p className={style.title}>Hello CTFer!</p>
        <Button>Hello</Button>
      </div>
    );
  }
}
