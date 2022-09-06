import React from 'react';
import ItemCount from '../components/ItemCount';


const ItemListContainer = ({greeting}) => {
     const onAdd = (qty) => {
        alert("You have selected " + qty + " items.")
     }
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock ={5} initial= {0} onAdd={onAdd} /> 
        </div>
    );
}

export default ItemListContainer;
