import React, { createContext,useState } from "react";
export const CounterCotext = createContext(null);


export const CounterProvider=(props)=>{
  const[count,setCount]=useState(5)
  return(
    <CounterCotext.Provider  value={{count,setCount}}>
      {props.children}
    </CounterCotext.Provider >
  )
}

