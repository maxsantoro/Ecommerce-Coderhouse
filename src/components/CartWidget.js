import React, { useContext } from 'react';
import  Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Cartcontext } from './CartContext';

const CartWidget = () => {
    /* const context = useContext(Cartcontext); */
    return (
        <Badge badgeContent = {5} color ="secondary">
            <ShoppingCartIcon/>
        </Badge>
    );
}

export default CartWidget;
