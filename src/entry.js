

'use strict';


//引入组件
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from 'redux';
import Root from "./containers/root"
import store from "./store"

const app = document.getElementById('app')

render(
  <Provider store={store}>
    <Root />
  </Provider>,app
);
