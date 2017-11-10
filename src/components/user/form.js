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
                    <Form className="ui form" onSubmit={handleSubmit} loading={loading}>
                        <Field name="name" type="text" component={this.renderField} label="Name"/>
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

export default reduxForm({form: 'user',validate})(UserForm);

function validate(values) {
    const errors = {};
    if (values.confirmPassword && values.confirmPassword !== values.password) {
        errors.confirmPassword = {message :"Passwords doesn't match"}
    }
    return errors;
}