import { useEffect , useState } from 'react';
import fetchProductos from '../utils/fetchProductos';
import { products } from '../utils/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchProductos(2000,products)
        .then(result => setData(result))
        .catch(err=>console.log(err))
    }, []);

    return (
        <ItemDetail item={data}/>
    );
}

export default ItemDetailContainer;
