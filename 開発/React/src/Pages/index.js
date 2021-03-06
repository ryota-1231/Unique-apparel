import React from 'react'
import { BrowserRouter as Router, Link as RouteLink, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import TopPage from '../Pages/TopPages/Index/main'
import UsersLogin from '../Pages/Users/Login/main'
import UsersSignUp from '../Pages/Users/SignUp/main'
import UsersMyPage from '../Pages/Users/MyPage/main'
import CompanyLogin from '../Pages/Companies/Login/main'
import CompanySignUp from '../Pages/Companies/SignUp/main'
import CompanyMypage from './Companies/mypage/main'
import ItemIndex from '../Pages/Items/index/main'
import ItemShow from '../Pages/Items/Detail/main'
import Purchase from '../Pages/Items/purchase/main'
import Complete from '../Pages/Orders/complete/main'
import Listings from '../Pages/Items/listings/main'
import ItemSearch from '../Pages/Items/search/main'
import Header from '../Templates/header'
import Footer from '../Templates/footer'

export default function index () {
  return (
    <Wrapper>
      <Router>
        <div>
          <ul>
            <li><RouteLink to='/'>TopPage</RouteLink></li>
            <li><RouteLink to='/users/login'>UsersLogin</RouteLink></li>
            <li><RouteLink to='/users/signup'>UsersSignUp</RouteLink></li>
            <li><RouteLink to='/users/mypage'>UsersMyPage</RouteLink></li>
            <li><RouteLink to='/companies/login'>CompanyLogin</RouteLink></li>
            <li><RouteLink to='/companies/signup'>CompanySignUp</RouteLink></li>
            <li><RouteLink to='/companies/mypage'>CompanyMypage</RouteLink></li>
            <li><RouteLink to='/items/index'>ItemIndex</RouteLink></li>
            <li><RouteLink to='/items/show/:id'>ItemShow</RouteLink></li>
            <li><RouteLink to='/items/purchase'>Purchase</RouteLink></li>
            <li><RouteLink to='/items/complete'>OrderComplete</RouteLink></li>
            <li><RouteLink to='/items/listings'>Listings</RouteLink></li>
            <li><RouteLink to='/items/search'>ItemSearch</RouteLink></li>
          </ul>
        </div>
        <Header />
        <Switch>
          <Route exact path='/' component={TopPage} />
          <Route exact path='/users/login' component={UsersLogin} />
          <Route exact path='/users/signup' component={UsersSignUp} />
          <Route exact path='/users/mypage' component={UsersMyPage} />
          <Route exact path='/companies/login' component={CompanyLogin} />
          <Route exact path='/companies/signup' component={CompanySignUp} />
          <Route exact path='/companies/mypage' component={CompanyMypage} />
          <Route exact path='/items/index' component={ItemIndex} />
          <Route path='/items/show/:id' component={ItemShow} />
          <Route path='/items/purchase' component={Purchase} />
          <Route path='/items/complete' component={Complete} />
          <Route path='/items/listings' component={Listings} />
          <Route path='/items/search' component={ItemSearch} />
          <Route component={TopPage} />
        </Switch>
        <Footer />
      </Router>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`
