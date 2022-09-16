import { useEffect, useState } from "react";
import Itemlist from "./ItemList";
import fetchProducts from "../utils/fetchProducts";
import { useParams } from "react-router";
const { products } = require("../utils/products");

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  console.log(idCategory);

  useEffect(() => {
    fetchProducts(
      2000,
      products.filter((item) => {
        if (idCategory === undefined) return item;
        return item.category === parseInt(idCategory);
      })
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
  };
  return (
    <div>
      <Itemlist items={datos} />
    </div>
  );
};

export default ItemListContainer;
