
import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newItem, saveItem, fetchItem, updateItem } from '../../actions/item-actions';
import ItemForm from '../../components/item/form';


class ItemFormPage extends Component {

    state = {
        redirect: false
    };

    componentDidMount = () => {
        const { _id } = this.props.match.params;
        if(_id){
            this.props.fetchItem(_id)
        } else {
            this.props.newItem();
        }
    };

    submit = (item) => {
        if(!item._id) {
            return this.props.saveItem(item)
                .then(response => this.setState({ redirect:true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        } else {
            return this.props.updateItem(item)
                .then(response => this.setState({ redirect:true }))
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
                        <Redirect to="/" /> :
                        <ItemForm item={this.props.item} loading={this.props.loading} onSubmit={this.submit} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.itemStore.item,
        errors: state.itemStore.errors
    }
}

export default connect(mapStateToProps, {newItem, saveItem, fetchItem, updateItem})(ItemFormPage);