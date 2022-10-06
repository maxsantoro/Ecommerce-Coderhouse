import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';
import FormatNumber from "../utils/FormatNumber";
import styled from "styled-components";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import {db} from '../utils/firestoreConfiguration';

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 30vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  const context = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = context.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.priceItem,
      qty:item.qtyItem
    }));

    context.cartList.forEach(async (item) => {
      const itemRef = doc(db, "Items", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "Leo Messi",
        email: "leo@messi.com",
        phone: "123456789"
      },
      total: context.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };
  
    console.log(order);
    
    const createOrderInFirestore = async () => {
      // Add a new document with a generated id
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
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
                <Info>
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
                </Info>
                {
                    context.cartList.length > 0 &&
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
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;

//cuando una funcion tiene un argumento hay q ponerlo de esta manera funcion anonima : en vez de context.remove Item(item.id)
//se usa : () => {context.removeItem(item.id)} 