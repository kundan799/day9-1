import React, { createContext,useState, useContext   } from "react";
import { AuthContext } from "./AuthContex";


export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const {isAuthorized}=useContext(AuthContext)
    const [count, setCount]=useState(0);
    const addtocart=()=>{
        setCount(count+1)
    }
    const buy=()=>{
        if(isAuthorized){
            alert("you can buy")
        }else{
            alert("you can not  buy")

        }
    }
  return (
   <CartContext.Provider value={{count,addtocart,buy}}>
      {children}
      </CartContext.Provider>
  )
};
