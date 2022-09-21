/* import React, { createContext } from 'react';

export const Cartcontext = createContext();


const CartContextProvider = ({children}) => {


    const cartContext = ( ) =>{
    
    }
    const calculateItemQuantity = () =>{
        // cartList = [{ id: 1 , title: "coca", qty: 5}]
        //{ id: 2 , title:"fernet , qty: 2"}
        // {id: 4 , title:"vino", qty: 3}

        let qtys = cartList.map(item => item.qtyItem);

        // qty = [5,2,3]
        //return qty 10(la suma de el array que esta arriba de ejemplo)

        return qtys.reduce(((previousValue,currentValue) => previousValue + currentValue),0)
    }

    return (
        <CartContext.Provider value= {{

        }}>{children}

        </CartContext.Provider>
    );
}

export default CartContextProvider;
 */