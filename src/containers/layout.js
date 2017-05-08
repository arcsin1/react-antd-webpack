import React from "react"
import { connect } from "react-redux"
// import { fetchUser } from "../actions/tweetsActions"
import { hashHistory} from 'react-router'
import '../styles/layout.scss';
import LeftMenu from '../components/LeftMenu'
import RightMenu from '../components/RightMenu'
// import { fetchUser } from "../actions/formActions"
// import '../../css/layout.less'

class Layout extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          current: '0',
          username: ''
      };
  }

  handleClick(e) {
      this.setState({
          current: e.key
      });
  }



  componentWillMount(){
    if(!this.props.loggingIn){
      hashHistory.push('/login');
    }
  }
  componentDIdMount(){
    if(!this.props.loggingIn){
      hashHistory.push('/login');
    }
  }
  render() {
    const { tweets,loggingIn,loggingUser } = this.props;
    // const listItems  = tweets.map((tweet)=>
    //     <li className="list-group-item" key={ tweet.id}>
    //       {tweet.user}
    //     </li>
    // )

    return (
      <div className="container-fluid">
          <LeftMenu child={this.props.children}/>
          <RightMenu user={loggingUser} loggingIn={loggingIn} child={this.props.children}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { user } = state;
    console.log(user)
    const isLogin = localStorage.getItem("isLogin")
    const account = localStorage.getItem("account")
    return {
        loggingIn: user.isLogin || isLogin,
        loggingUser: user.account|| account,
    }
}


export default connect(mapStateToProps)(Layout)
