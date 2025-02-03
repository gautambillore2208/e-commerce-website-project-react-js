import React, { createContext,useState } from "react";
export const CartContext = createContext(null);


export const CartProvider=(props)=>{
  const[cartItem,setcartItem]=useState([])
  ///console.log(cartItem);

  const handleDecrement=(card_id)=>{
    setcartItem(cartItem=>cartItem.map((item)=>
    card_id===item.id ? {...item,qty:item.qty -(item.qty >1 ? 1 : 0)}:item
    ))
  }

  const handleIncrement=(card_id)=>{
    setcartItem(cartItem=>cartItem.map((item)=>
    card_id===item.id ? {...item,qty:item.qty + (item.qty < 10 ? 1 : 0)}:item
    ))
  }
  return(
    <CartContext.Provider  value={{cartItem,setcartItem,handleDecrement,handleIncrement}}>
      {props.children}
    </CartContext.Provider >
  )
}

