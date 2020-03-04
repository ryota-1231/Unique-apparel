import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './reset.css'
// import OrderComplete from './Orders/complete/main'
// import UsersSignUp from './Users/SignUp/main'
import UsersLogin from './Users/Login/main'

ReactDOM.render(
  // <UsersSignUp />,
  <UsersLogin />,
  // <OrderComplete />,
  document.getElementById('root')
)
