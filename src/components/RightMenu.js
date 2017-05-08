import React from "react"
import { loggout } from "../actions/loginActions"
import { connect } from "react-redux"
import { hashHistory,Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
@connect((store) => {
  return {
    loginUser: null
  };
})
export default class rightMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          current: '0',
      };
  }
  logout(e){
    // if(e.key == '1'){
    //   hashHistory.push('/layout')
    // }
    // if(e.key =='2'){
    //   hashHistory.push('/layout/password')
    // }
    if(e.key =='3'){
      this.props.dispatch(loggout());
    }

  }
  render() {
    const { user,loggingIn,child} = this.props;
    return (
      <div id="rightWrap">
                <Menu mode="horizontal" onClick={this.logout.bind(this)}>
                    <SubMenu title={<span><Icon type="user" />{user}</span>}>
                        <Menu.Item key="3" >退出</Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="right-box">
                    { child }
                </div>
        </div>

    );
  }
}
