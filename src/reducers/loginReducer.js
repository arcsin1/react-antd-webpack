export default function reducer(state={
    loginUser:null,
    isLogin: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "LOGIN_IN": {
        return {...state, isLogin: true,loginUser:action.payload}
      }
      case "LOGIN_ERROR": {
        return {...state, isLogin: false,error: action.payload}
      }
      case "LOGIN_OUT": {
        return {...state, isLogin: false,loginUser:action.payload}
      }
    }

    return state
}
