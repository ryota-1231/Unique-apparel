import React from 'react'
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import UsersLogin from './Login/main'
import UsersSignUp from './SignUp/main'


const topPage = () => <UsersLogin />
const signUp = () => <UsersSignUp />
// const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
// const page3 = () => <div><h1>page3</h1>3枚目のページです</div>

export default function index () {

    return (
      <Router>
                {/* <ul style={{display: 'flex'}}>
                    <li style={liStyle}><Link to='/'>top</Link></li>
                    <li style={liStyle}><Link to='/page1'>page1</Link></li>
                    <li style={liStyle}><Link to='/page2'>page2</Link></li>
                    <li style={liStyle}><Link to='/page3'>page3</Link></li>
                </ul> */}
                {/* //Routeaを配置 exactを指定してマッチングを厳密に */}
                <Switch>
                  <Route path='/' exact component={topPage}/>
                  <Route path='/page1' exact component={signUp}/>
                  <Route exact component={topPage}/>
                </Switch>
      </Router>
    )

}
