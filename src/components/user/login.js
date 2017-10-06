import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class LoginForm extends Component {

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
                    <h1 style={{marginTop:"1em"}}>Login</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="email" type="text" component={this.renderField} label="Email"/>
                        <Field name="password" type="password" component={this.renderField} label="Password"/>
                        <Button primary type='submit' disabled={pristine || submitting}>Login</Button>
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
    if(!values.password) {
        errors.password = {
            message: 'You need to provide a Password'
        }
    }
    return errors;
}

export default reduxForm({form: 'user', validate})(LoginForm);