import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation({authenticated,handleLogOut,user}) {
    if(authenticated){
        return (
            <div className="ui top fixed menu">
                <div className="item" style={{width: "2%"}}>
                </div>
                <div className="item">
                    <h3>Bakery</h3>
                </div>
                <NavLink className="item" activeClassName="active" exact to="/items">
                    I want to eat
                </NavLink>
                <NavLink className="item" activeClassName="active" exact to="/items/add">
                    Add new thing to eat
                </NavLink>
                <NavLink onClick={handleLogOut} className="item" activeClassName="active" exact to="/login">
                    Log Out
                </NavLink>
            </div>
        )
    }
    else{
        return (
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
        )
    }
}
