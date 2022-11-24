/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Itemlist from "./ItemList";
import { useParams } from "react-router";
import { fetchData } from "../utils/firestoreFetch";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  //componentDidUpdate

  useEffect(() => {
    fetchData(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      setDatos([]);
    };
  }, []);

  return (
    <div>
      <Itemlist items={datos} />
    </div>
  );
};
export default ItemListContainer;
