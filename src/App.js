import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/user/login-page';
import UserFormPage from './pages/user/form-page';
import {PrivateRoute} from './routes/private';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';

class App extends Component {
    render() {
        return (
            <div>
            <div className="ui top fixed menu">
                <div className="item" style={{width: "2%"}}>
                </div>
                <div className="item">
                    <h3>Bakery</h3>
                </div>
                <NavLink className="item" activeClassName="active" exact to="/register">
                    Register
                </NavLink>
                <NavLink className="item" activeClassName="active" exact to="/login">
                    Login
                </NavLink>
            </div>
            <div className="ui main text container">
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/register" component={UserFormPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/*" component={NotFoundPage}/>
                </Switch>
            </div>

            </div>
        );
    }
}

export default App;