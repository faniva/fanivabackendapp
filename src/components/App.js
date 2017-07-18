import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './Home'
import Header from './Templates/Header'
import Footer from './Templates/Footer'
import Hosting from './Hosting/Hosting'
import Domains from './Domains/Domains'
import Backups from './Backups/Backups'
import Users from './Users/Users'
import User from './Users/User'
import UserDetails from './UserDetails'

export default class App extends React.Component{
    render(){
        return (
            <Router>

                <div id="pageWrapper">

                    <Header/>

                    <div id="site-content">
                        <div className="main" role="main">
                            <UserDetails userId={1} />

                            <aside id="side-panel">
                                <div className="ui box-container">

                                    <ul >
                                        <li><NavLink exact activeClassName="active" to="/">Dashboard</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/hosting">Hosting</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/backups">Backups</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/domains">Domains</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/history">History</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/payments">Payments</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/settings">Account Settings</NavLink></li>

                                    </ul>
                                </div>
                            </aside>

                            <div className="page-content">

                                <Route exact path="/" component={Home}/>
                                <Route exact path="/home" component={Home}/>
                                <Route path="/hosting" component={Hosting}/>
                                <Route path="/domains" component={Domains}/>
                                <Route path="/backups" component={Backups}/>
                                <Route exact path="/users" component={Users}/>
                                <Route path="/users/:userId" component={User}/>

                            </div>

                        </div>
                    </div>

                   <Footer/>


                </div>

            </Router>
        )
    }
}
