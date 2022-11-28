import { Button } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {
  DetailContainer,
  WrapperDetail,
  ImgContainer,
  ImageDetail,
  InfoContainer,
  Title,
  Desc,
  Price,
} from "./styledComponents";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const context = useContext(CartContext);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
    context.addItem(item, qty);
  };

  return (
    <>
      {item && item.img ? (
        <DetailContainer>
          <WrapperDetail>
            <ImgContainer>
              <ImageDetail src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.name}</Title>
              <Desc>{item.description}</Desc>
              <Price>$ {item.price}</Price>
              {item.stock > 0 ? (
                <Desc>{item.stock} unidades en stock</Desc>
              ) : (
                <Desc>No hay stock</Desc>
              )}
            </InfoContainer>
            {itemCount === 0 ? (
              <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            ) : (
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "17rem",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="secondary">
                  Checkout
                </Button>
              </Link>
            )}
          </WrapperDetail>
        </DetailContainer>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ItemDetail;
