import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText, Bottom, Info1, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice,Button } from './styledComponents';
import FormatNumber from "../utils/FormatNumber";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import {db} from '../utils/firestoreConfiguration';
import { useAuth } from "../context/authContext";



const Cart = () => {
  const context = useContext(CartContext);
  const { user } = useAuth();
 


  const createOrder = () => {
    const itemsForDB = context.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.priceItem,
      qty:item.qtyItem
    }));
    
    //restar productos de db
    context.cartList.forEach(async (item) => {
      const itemRef = doc(db, "Items", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let newOrder= { 
      buyer:user.displayName || user.email, 
      items:itemsForDB,
      date:serverTimestamp(),
      total:context.calcTotal()
    }
    console.log(newOrder)
    
    const createOrderInFirestore = async () => {
      // Add a new document with a generated id
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, newOrder);
      return newOrderRef;
    }
  
    createOrderInFirestore()
      .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    context.removeItem();

  }
 
    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                {
                    (context.cartList.length > 0)
                    ? <TopButton type="filled" onClick={context.clearList}>DELETE ALL PRODUCTS</TopButton>
                    : <TopText>Your cart is empty</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <Info1>
                    {
                        context.cartList.length > 0 &&
                            context.cartList.map(item => 
                            <Product key={item.idItem}>
                            <ProductDetail>
                                <ImageCart src={item.img} />
                                <Details>
                                <span>
                                    <b>Product:</b> {item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => context.removeItem(item.idItem)}>DELETE</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                /
                                <ProductAmount>$ {item.priceItem} each</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {context.calcTotalPerItem(item.idItem)} </ProductPrice>
                            </PriceDetail>
                            </Product>
                            )
                    }
                </Info1>
                {
                    context.cartList.length > 0 && user ?
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={context.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            {/* <SummaryItem>
                                <SummaryItemText>Taxes</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={context.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes Discount</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-context.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem> */}
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={context.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={createOrder}>CHECKOUT NOW</Button>
                        </Summary>
                :
                  <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={context.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            {/* <SummaryItem>
                                <SummaryItemText>Taxes</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={context.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes Discount</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-context.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem> */}
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={context.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Link to="/register"><Button>Log in</Button></Link>
                        </Summary>
                      }
                
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;

//cuando una funcion tiene un argumento hay q ponerlo de esta manera funcion anonima : en vez de context.remove Item(item.id)
//se usa : () => {context.removeItem(item.id)} 