import { hashHistory } from 'react-router';
import axios from "axios";
import { message } from 'antd';

export function loginIn(data) {
  return function(dispatch) {
    // axios.post('http://127.0.0.1:4200/users/login',data)
    //   .then((res) => {
    //     if(!res.data.err){
    //       const loginUser = res.data[0]
    //       dispatch({type: "LOGIN_IN", payload: loginUser});
    //       localStorage.setItem("isLogin",true)
    //       localStorage.setItem("account",loginUser.account)
    //       hashHistory.push('/layout')
    //       message.info("登录成功！");
    //     }else{
    //         message.error(res.data.msg);
    //     }
    //   })
    if(data){
      
      dispatch({type: "LOGIN_IN", payload: data});
      localStorage.setItem("isLogin",true)
      localStorage.setItem("account",data.account)
      console.log(data)
      hashHistory.push('/layout')
      message.info("登录成功！");
    }
  }
}

export function loggout(){
  return function(dispatch){
    localStorage.clear();
    dispatch({type: "LOGIN_OUT", payload: null});
    hashHistory.push('/login')
  }
}
