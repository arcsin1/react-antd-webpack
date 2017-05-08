
import React from "react"
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { Menu, Icon } from 'antd';
import '../styles/user.scss';



export default class Log extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ant-form ant-form-horizontal user-form">
        log!日志
      </div>
    );
  }
}
