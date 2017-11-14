import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class ItemForm extends Component {

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
            <Grid columns={1}>
                <Grid.Column>
                    <h1 style={{marginTop:"1em"}}>{this.props.item._id ? 'Edit Item' : 'Add New Item'}</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="name" type="text" component={this.renderField} label="Name"/>
                        <Field name="price" type="text" component={this.renderField} label="Price"/>
                        <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
const validate = (values) => {
    const errors = {};
    if(!values.name) {
        errors.name = {
            message: 'You need to provide a Name'
        }
    }
    if(!values.picture) {
        errors.picture = {
            message: 'You need to provide a Picture'
        }
    }
    if(!values.price) {
        errors.price = {
            message: 'You need to provide a Price'
        }
    }
    return errors;
}

export default reduxForm({form: 'item', validate})(ItemForm);