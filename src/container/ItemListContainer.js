import React from 'react';

const ItemListContainer = () => {
    /* const onAdd = (qty) => {
        alert("You have selected" + qty + "items.")
    } */
    const greeting = () => {
        console.log("hola")

    }
    
    return (
        <div>
            {greeting}
            {/* <ItemCount stock ={5} initial= {1} onAdd={onAdd} /> */}
        </div>
    );
}

export default ItemListContainer;
