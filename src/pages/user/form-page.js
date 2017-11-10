
import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newUser, saveUser, fetchUser, updateUser } from '../../actions/user-actions';
import UserForm from '../../components/user/form';


class UserFormPage extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        };

    }


    componentDidMount = () => {
        const { _id } = this.props.match.params;
        if(_id){
            this.props.fetchUser(_id)
        } else {
            this.props.newUser();
        }
    };

    submit = (user) => {

        if(!user._id) {
            return this.props.saveUser(user)
                .then(response => {
                    console.log(response);
                    this.setState({ redirect:true })
                })
                .catch(err => {
                    throw new SubmissionError(this.props.errors);
                })
        } else {
            return this.props.updateUser(user)
                .then(response => {
                    this.setState({ redirect:true })
                })
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        }
    };

    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                        (<Redirect to="/login" /> ):
                        (<UserForm user={this.props.user} loading={this.props.loading} onSubmit={this.submit} />)
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

export default connect(mapStateToProps, {newUser, saveUser, fetchUser, updateUser})(UserFormPage);