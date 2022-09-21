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
  ButtonItemCount,
} from "./styledComponents";
const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
  };
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      {item && item.img ? (
        <DetailContainer>
          <WrapperDetail>
            <ImgContainer>
              <ImageDetail src={item.img[0]} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.name}</Title>
              <Desc>{item.description}</Desc>
              <Price>$ {item.price}</Price>
              <Desc>{item.stock} unidades en stock</Desc>
            </InfoContainer>
            {itemCount === 0 ? (
              <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            ) : (
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Button
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  variant="contained"
                  color="secondary"
                >
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
