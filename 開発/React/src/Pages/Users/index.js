import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UsersLogin from './Login/main'
import UsersSignUp from './SignUp/main'
import UsersMyPage from './MyPage/main'
import CompanyLogin from '../../Companies/Login/main'
import styled from 'styled-components'


export default function index () {

    return (
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path='/' component={UsersLogin}></Route>
            <Route exact path='/page1' component={UsersSignUp}></Route>
            {/* <Route exact path='/page1/:id' component={UsersSignUp}></Route> */}
            <Route exact path='/page2' component={UsersMyPage}></Route>
            <Route exact path='/page3' component={CompanyLogin}></Route>
            <Route component={UsersLogin}></Route>
          </Switch>
        </Router>
      </Wrapper>
    )

}


const Wrapper = styled.div`
`