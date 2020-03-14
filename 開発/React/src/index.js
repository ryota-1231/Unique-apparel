import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ItemSearch from './Items/search/main'
// import ItemIndex from './Items/index/main'
import './reset.css'
// import OrderComplete from './Orders/complete/main'
// import UsersSignUp from './Users/SignUp/main'
// import UsersLogin from './Users/Login/main'
// import ListingNew from './Items/listings/main'
// import ListingEdit from './Items/listings/mainEdit'
import ItemDetail from './Items/show'
// import Purchase from './Items/purchase/main'
// import ItemComplete from './Items/complete/main'
// import CompaniesSignUp from './Pages/Companies/SignUp/main'
import UsersMyPage from './Pages/Users/MyPage/main'

ReactDOM.render(
  // <UsersSignUp />,
//   <UsersLogin />,
  // <OrderComplete />,
    <ItemSearch />,
  // <ItemIndex />,
  // <ListingNew />,
  // <ListingEdit />,
  <ItemDetail />,
  // <Purchase />,
  // <ItemComplete />,
  // <CompaniesSignUp />,
  <UsersMyPage />,
  document.getElementById('root')
)
