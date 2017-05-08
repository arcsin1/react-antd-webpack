import React from "react"
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { Menu, Icon,Table } from 'antd';
import '../styles/user.scss';



export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#">Action 一 {record.name}</a>
          <span className="ant-divider" />
          <a href="#">Delete</a>
          <span className="ant-divider" />
          <a href="#" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      ),
    }];

      this.data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }];
}

  render() {
    const columns = this.columns;
    const data = this.data;
    return (
      <div className="ant-form ant-form-horizontal user-form">
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
