
import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/user-actions';
import LoginForm from '../../components/user/login';


class UserFormPage extends Component {

    state = {
        redirect: false
    };



    submit = (user) => {
        return this.props.authenticateUser(user)
            .then(response => {
                console.log('here'+response);
                this.setState({ redirect:true })
            })
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
    };

    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                        (<Redirect to="/" />) :
                        (<LoginForm user={this.props.user} loading={this.props.loading} onSubmit={this.submit} />)
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userStore.user,
        errors: state.userStore.errors
    }
}

export default connect(mapStateToProps, {authenticateUser})(UserFormPage);