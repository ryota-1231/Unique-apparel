import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UsersLogin from './Login/main'
import UsersSignUp from './SignUp/main'


// const topPage = () => <UsersLogin />
// const signUp = () => <UsersSignUp />
// const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
// const page3 = () => <div><h1>page3</h1>3枚目のページです</div>

export default function index () {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={UsersLogin}/>
          <Route path='/page1' component={UsersSignUp}/>
          <Route component={UsersLogin}/>
        </Switch>
      </Router>
    )

}
