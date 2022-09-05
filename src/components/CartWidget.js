import React from 'react';
import  Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {
    return (
        <Badge badgeContent = {1} color ="secondary">
            <ShoppingCartIcon/>
        </Badge>
    );
}

export default CartWidget;
