
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Navigation from "../components/menus/Navigation";
import {logoutUser} from "../actions/user-actions";



class NavBar extends Component {
    render() {
        return (
            <div>
                {
                    <Navigation authenticated={this.props.authenticated} user={this.props.user} handleLogOut={this.props.logoutUser}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.userStore.authenticated,
        user: state.userStore.user,
    }
}

export default connect(mapStateToProps,{logoutUser})(NavBar);