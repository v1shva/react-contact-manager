import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ItemCard({item, deleteItem}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='user outline'/> {item.name} {item.name}
                </Card.Header>
                <Card.Description>
                    <p><Icon name='phone'/> {item.price}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/items/edit/${item._id}`} className="ui basic button green">Edit</Link>
                    <Button basic color="red" onClick={() => deleteItem(item._id)} >Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

ItemCard.propTypes = {
    item: PropTypes.object.isRequired
}