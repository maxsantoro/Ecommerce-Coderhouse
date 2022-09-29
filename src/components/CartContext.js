import { createContext, useState } from 'react';

export const CartContext = createContext();


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) =>{
        let found =  cartList.find(product=> product.idItem === item.id);
        if(found === undefined){
            setCartList([
                ...cartList,
                {
                    idItem:item.id,
                    img:item.img,
                    nameItem:item.name,
                    priceItem:item.price,
                    qtyItem:qty
                }
            ])
        }else{
            found.qtyItem += qty
            setCartList([
                ...cartList
            ]) 
        }
    }

    const clearList = () =>{
        setCartList([])
    }

    const removeItem = (id) =>{
        //TODO
        setCartList(cartList.filter(item => item.id !== id))
    }


    const calculateItemQuantity = () =>{
        // cartList = [{ id: 1 , title: "coca", qty: 5}]
        //{ id: 2 , title:"fernet , qty: 2"}
        // {id: 4 , title:"vino", qty: 3}
        
        // qty = [5,2,3]
        //return qty 10(la suma de el array que esta arriba de ejemplo)
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue,currentValue) => previousValue + currentValue),0);
    }
    
    const calcTaxes = () => {
        return calcSubTotal() * 0.18;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }


    const calcTotalPerItem = (idItem) =>{
        let i = cartList.map(item => idItem).indexOf(idItem);
        return cartList[i].priceItem * cartList[i].qtyItem
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue,currentValue) => previousValue + currentValue);
    }

    return (
        <CartContext.Provider value={{cartList,calcTaxes,calcTotal,addItem,clearList,removeItem,calculateItemQuantity,calcTotalPerItem,calcSubTotal}}>
        {children}
        </CartContext.Provider>
    );
}


