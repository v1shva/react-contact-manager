import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ authenticated: Authenticated, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Authenticated
            ? (<Component {...props} />)
            : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    )} />
);