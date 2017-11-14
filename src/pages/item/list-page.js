// src/pages/item-list-page

import React, { Component} from 'react';
import { connect } from 'react-redux';
import ItemList from '../../components/item/list';
import { fetchItems, deleteItem } from '../../actions/item-actions';

class ItemListPage extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <div>
                <ItemList items={this.props.items} deleteItem={this.props.deleteItem}/>
            </div>
        )
    }
}

// Make items  array available in  props
function mapStateToProps(state) {
    return {
        items : state.itemStore.items
    }
}

export default connect(mapStateToProps, {fetchItems, deleteItem})(ItemListPage);