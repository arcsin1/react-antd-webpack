import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory ,hashHistory} from 'react-router';
import App from './app'
import Login from './login'
import Layout from './layout'
import Home from "../components/Home"
import User from "../components/User"
import Pwd from "../components/Pwd"
import Robot from "../components/Robot"
import BlackList from "../components/Blacklist"
import Blockedwords from "../components/Blockedwords"
import Manager from "../components/Manager"
import Log from "../components/Log"


const routes = (
  <Router>
      <Route path="/" component={ App } >
          <IndexRoute component={ Login } />
          <Route path="login" component={ Login } />
          <Route path="layout" component={ Layout } >
            <IndexRoute  component={ Home } />
            <Route path="user" component={ User } />
            <Route path="password" component={ Pwd } />
            <Route path="robot" component={ Robot } />
            <Route path="blacklist" component={ BlackList } />
            <Route path="blockedwords" component={ Blockedwords } />
            <Route path="manager" component={ Manager } />
            <Route path="log" component={ Log } />
          </Route>
     </Route>
  </Router>
);

export default class Root extends Component {
  render() {
    return <Router routes={routes} history={ hashHistory }/>
  }
};
