import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoginPage from './pages/user/login-page';
import UserFormPage from './pages/user/form-page';
import { PrivateRoute } from './routes/private';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';

class App extends Component {
    render() {
        return (
            <Grid centered columns={3}>
                <Grid.Row>
                    Header
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <div className="ui two item menu">
                            <NavLink className="item" activeClassName="active" exact to="/register">
                                Register
                            </NavLink>
                            <NavLink className="item" activeClassName="active" exact to="/login">
                                Login
                            </NavLink>
                        </div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/register" component={UserFormPage}/>
                        <Route path="/login" component={LoginPage}/>
                        {/*<Route path="/*" component={NotFoundPage} />*/}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    Footer
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;