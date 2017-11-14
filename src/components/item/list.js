import React from 'react';
import { Card } from 'semantic-ui-react';
import ItemCard from './card';

export default function ItemList({items, deleteItem}){
    const cards = () => {
        return items.map(item => {
            return (
                <ItemCard key={item._id} item={item}   deleteItem={deleteItem} />
            )
        })
    }
    return (
        <Card.Group>
            { cards() }
        </Card.Group>
    )
}