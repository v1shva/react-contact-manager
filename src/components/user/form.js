import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class UserForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Receive User data Asynchronously
        const { user } = nextProps;
        if(user._id !== this.props.user._id) { // Initialize form only once
            this.props.initialize(user)
        }
    };
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error:touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    render() {
        const { handleSubmit, pristine, submitting, loading } = this.props;

        return (

                <Grid.Column >
                    <h1 style={{marginTop:"1em"}}>{this.props.user._id ? 'Edit My Account' : 'Register'}</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="email" type="text" component={this.renderField} label="Email"/>
                        <Field name="employeeNo" type="text" component={this.renderField} label="Employee No"/>
                        <Field name="password" type="password" component={this.renderField} label="Password"/>
                        <Field name="confirmPassword" type="password" component={this.renderField} label="Confirm Password"/>
                        <Button primary type='submit' disabled={pristine || submitting}>Submit</Button>
                    </Form>
                </Grid.Column>

        )
    }
}
const validate = (values) => {
    const errors = {name:{}};
    if(!values.email) {
        errors.email = {
            message: 'You need to provide an Email address'
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = {
            message: 'Invalid email address'
        }
    }
    if(!values.employeeNo ) {
        errors.employeeNo = {
            message: 'You need to provide Employee No'
        }
    }
    if(!values.password) {
        errors.password = {
            message: 'You need to provide a Password'
        }
    }
    if(!values.confirmPassword) {
        errors.confirmPassword = {
            message: 'You need to confirm Password'
        }
    }else if(values.confirmPassword !== values.password){
        errors.password = {
            message: 'Passwords doesn\'t match'
        },
        errors.confirmPassword = {
            message: 'Passwords doesn\'t match'
        }
    }
    return errors;
}

export default reduxForm({form: 'user', validate})(UserForm);