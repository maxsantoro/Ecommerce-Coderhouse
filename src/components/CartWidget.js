import React, { useContext } from 'react';
import  Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext} from './CartContext';

const CartWidget = () => {
     const context = useContext(CartContext); 
    return (
        <Badge badgeContent={context.calculateItemQuantity()} color ="secondary">
            <ShoppingCartIcon/>
        </Badge>
    );
}

export default CartWidget;
