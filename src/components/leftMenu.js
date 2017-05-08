import React from "react"
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class leftMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          current: '0',
      };
  }
  componentWillMount(){
    // console.log(this.props.child.props.route.path)
    if(this.props.child.props.route.path){
      this.setState({
          current: this.props.child.props.route.path,
      });
    }
  }
  handleClick(e) {
        this.setState({
            current: e.key
        });
    }
  render() {
    return (
      <div id="left_menu">
      <img src='https://avatars1.githubusercontent.com/u/13724222?v=3&s=460' width="60" id="logo"/>
      <Menu theme="dark"
                    onClick={this.handleClick.bind(this)}
                    style={{ width: 200 }}
                    defaultSelectedKeys={[this.state.current]}
                    defaultOpenKeys={['sub1','sub2','sub3']}
                    mode="inline"
        >
          <Menu.Item  key="0"><Link to="/layout"> <Icon type="home" />主页</Link></Menu.Item>

          <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                    <Menu.Item key="user"><Link to="/layout/user">租户信息</Link></Menu.Item>
                    <Menu.Item key="password" ><Link to="/layout/password">密码管理</Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" title={<span><Icon type="setting" /><span>配置管理</span></span>}>
                <Menu.Item key="blacklist"><Link to="/layout/blacklist">黑名单管理</Link></Menu.Item>
                <Menu.Item key="blockedwords"><Link to="/layout/blockedwords">屏蔽词列表</Link></Menu.Item>
                <Menu.Item key="manager"><Link to="/layout/manager">管理员列表</Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" title={<span><Icon type="android-o" /><span>机器人管理</span></span>}>

            <Menu.Item key="robot"><Link to="/layout/robot">机器人列表</Link></Menu.Item>
            <Menu.Item key="log"><Link to="/layout/log">机器人日志</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}


// <SubMenu key="sub1" title={<span><Icon type="bars" /><span>机器人管理</span></span>}>
//     <Menu.Item key="1"><Link to="/myTable">群1-1</Link></Menu.Item>
//     <Menu.Item key="2"><Link to="/myForm">群1-2</Link></Menu.Item>
// </SubMenu>
