import React from 'react'
import { Switch, Route } from 'react-router-dom'
import login from './Login'
import app from './App'
import signup from './SignUp'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={login}/>
      <Route path='/app' component={App}/>
      <Route path='/signup' component={SignUp}/>
    </Switch>
  </main>
)

export default Main
