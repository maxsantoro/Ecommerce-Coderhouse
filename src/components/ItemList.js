import React from 'react'
import Item from './Item'

function Itemlist({items}) {
  return (
    {items.length > 0 
    ? items.map(item => <Item/>)}
  )
}

export default Itemlist