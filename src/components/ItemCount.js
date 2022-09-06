import { Button, Tooltip } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({stock,initial,onAdd}) {

  const [count, setCount] = useState(initial);
  
  const IncNum = () =>{
     if (count < stock){
      setCount (count + 1)
      
     } 
     else{
      alert("No more stock available")
     }
  
  }

  const DecNum = () =>{
    if (count > 0) setCount(count -1);
    else {
      setCount(0);
      alert("min limit reached")
    }
  }


  return (
    <div className="main_div">
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
          <Button style={{color:"black"}} onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
