import React from 'react'
import {BrowserRouter as Router, Link as RouteLink, Switch, Route} from "react-router-dom";
import styled from 'styled-components'
import TopPage from '../Pages/TopPages/Index/main'
import UsersLogin from '../Pages/Users/Login/main'
import UsersSignUp from '../Pages/Users/SignUp/main'
import UsersMyPage from '../Pages/Users/MyPage/main'
import CompanyLogin from '../Pages/Companies/Login/main'
import CompanySignUp from '../Pages/Companies/SignUp/main'
import ItemIndex from '../Pages/Items/index/main'



export default function index () {

    return (
      <Wrapper>
        <Router>
          <div>
            <ul>
              <li><RouteLink to="/">TopPage</RouteLink></li>
              <li><RouteLink to="/user-login">UsersLogin</RouteLink></li>
              <li><RouteLink to="/user-signup">UsersSignUp</RouteLink></li>
              <li><RouteLink to="/user-mypage">UsersMyPage</RouteLink></li>
              <li><RouteLink to="/company-login">CompanyLogin</RouteLink></li>
              <li><RouteLink to="/company-signup">CompanySignUp</RouteLink></li>
              <li><RouteLink to="/item/index">ItemIndex</RouteLink></li>

            </ul>
          </div>
          <Switch>
            <Route exact path='/' component={TopPage}></Route>
            <Route exact path='/user-login' component={UsersLogin}></Route>
            <Route exact path='/user-signup' component={UsersSignUp}></Route>
            <Route exact path='/user-mypage' component={UsersMyPage}></Route>
            <Route exact path='/company-login' component={CompanyLogin}></Route>
            <Route exact path='/company-signup' component={CompanySignUp}></Route>
            <Route exact path='/item/index' component={ItemIndex}></Route>
            {/* <Route exact path='/page3' component={CompanyLogin}></Route> */}
            <Route component={TopPage}></Route>
          </Switch>
        </Router>
      </Wrapper>
    )

}


const Wrapper = styled.div`
`