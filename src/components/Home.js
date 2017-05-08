
import React from "react"
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { Menu, Icon,Card,Col, Row } from 'antd';
import '../styles/user.scss';



export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ant-form ant-form-horizontal home" >
      <Row>
        <Col span="8">
          <Card title="Home" >Welcome！</Card>
        </Col>
        <Col span="8">
          <Card title="Setting" >Welcome！</Card>
        </Col>
        <Col span="8">
          <Card title="Robot" >Welcome！</Card>
        </Col>
      </Row>
      </div>
    );
  }
}
