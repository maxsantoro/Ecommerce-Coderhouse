import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductAmountContainer, ProductAmount } from "./styledComponents";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  return (
    <ProductAmountContainer>
      <Button variant="text" onClick={increment}>
        <Add />
      </Button>
      <ProductAmount>{count}</ProductAmount>
      <Button variant="text" onClick={decrement}>
        <Remove />
      </Button>
      {stock ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAdd(count)}
        >
          Add to Cart
        </Button>
      ) : (
        <Button  variant="contained" disabled>
          Add to Cart
        </Button>
      )}
    </ProductAmountContainer>
  );
};

export default ItemCount;
/* unction ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const IncNum = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No more stock available");
    }
  };

  const DecNum = () => {
    if (count > initial) setCount(count - 1);
    else {
      setCount(0);
      alert("min limit reached");
    }
  };
 */
/*  <div className="main_div">
      <div className="center_div">
        <h1>{count}</h1>
        <div className="btn_div">
          <Tooltip title="delete">
            <Button onClick={IncNum}>
              <AddIcon />
            </Button>
          </Tooltip>
          <Button onClick={DecNum}>
            <RemoveIcon></RemoveIcon>
          </Button>
          { stock
            ? <Button style={{ color: "black" }} onClick={() => onAdd(count)}>
              Agregar al carrito
            </Button>
            : <Button style={{ color: "black" }} >Add to Cart</Button>
          }
        </div>
      </div>
    </div> */
