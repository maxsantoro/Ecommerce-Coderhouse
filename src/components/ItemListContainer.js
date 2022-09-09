import React, { useEffect, useState } from 'react';
import Itemlist from './Itemlist';
import fetchProductos from '../utils/fetchProductos';
import { products } from '../utils/products';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        fetchProductos(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);
    return (
        <div>
            <Itemlist  items={datos}/>
        </div>
    );
}

export default ItemListContainer;
