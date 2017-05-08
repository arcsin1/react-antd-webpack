import React from "react"

import '../styles/app.scss';
import { connect } from "react-redux"
import { loginIn } from "../actions/loginActions"
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  constructor(props) {
      super(props);
  }

  handleSubmit = (e) => {
   e.preventDefault();
   this.props.form.validateFields((err, values) => {
     if (!err) {
       this.props.dispatch(loginIn(values));
     }
   });
 }

  render() {

    // const { loginUser } = this.props;
    // console.log(loginUser.err)
    const { getFieldDecorator } = this.props.form;
    return (

     <Form onSubmit={this.handleSubmit} className="login-form">
     <p>控制系统</p>
       <FormItem>
         {getFieldDecorator('account', {
           rules: [{ required: true, message: 'Please input your accout!' }],
         })(
           <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账号" />
         )}
       </FormItem>
       <FormItem>
         {getFieldDecorator('password', {
           rules: [{ required: true, message: 'Please input your Password!' }],
         })(
           <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
         )}
       </FormItem>
       <FormItem>
         <Button type="primary" htmlType="submit" className="login-form-button">
           登录
         </Button>
       </FormItem>
     </Form>
   );
 }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

function mapStateToProps(state) {
    const { loginUser } = state;
    // if(loginUser.error){
    //   var error = loginUser.error.msg;
    //   console.error(error)
    // }
}
export default connect(mapStateToProps)(WrappedNormalLoginForm)
// {getFieldDecorator('remember', {
//   valuePropName: 'checked',
//   initialValue: true,
// })(
//   <Checkbox>Remember me</Checkbox>
// )}
// <a className="login-form-forgot" href="">Forgot password</a>
