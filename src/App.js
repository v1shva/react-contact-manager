import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from './pages/user/login-page';
import UserFormPage from './pages/user/form-page';
import {PrivateRoute} from './routes/private';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';
import NavBar from './menus/nav-bar';
import { connect } from 'react-redux';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {authenticateUserWithCookie} from "./actions/user-actions";
class App extends Component {

    constructor(props) {
        super();
        let user = localStorage.getItem('user');
        props.authenticateUserWithCookie(user);

    }
    render() {

        return (
            <BrowserRouter>
                <div>
            <Route authenticated={this.props.authenticated} path="/*" component={NavBar}/>
            <div className="ui main text container">
                <Switch>
                    <PrivateRoute authenticated={this.props.authenticated} exact path="/" component={HomePage}/>
                    <Route path="/register" component={UserFormPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/*" component={NotFoundPage}/>
                </Switch>
            </div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.userStore.authenticated,
        user: state.userStore.user,
    }
}

export default connect(mapStateToProps, {authenticateUserWithCookie})(App);