import React from "react"
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { Menu, Icon } from 'antd';
import '../styles/user.scss';



export default  class Blockedwords extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ant-form ant-form-horizontal user-form">
        屏蔽词！
      </div>
    );
  }
}
