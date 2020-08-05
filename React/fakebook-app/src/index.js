import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Signup from './SignUp';
import ChangePassword from './ChangePassword';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Route path="/" component={Login} />
      <Route path="/App" component={App} />
      <Route path="/SignUp" component={Signup} />
      <Route path="/ChangePassword" component={ChangePassword} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
/*ReactDOM.render(
  <BrowserRouter>
      <Login />
  </BrowserRouter>
,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
