import React from 'react'

import { useContext } from 'react'
import { AuthContext } from '../context/AuthContex'
import { CartContext } from '../context/CartContext'
import { Themcontext } from '../context/Themcontext'
import WishList from './WishList'

const Navebar = () => {
  const {isAuthorized,Login,Logout}=useContext(AuthContext);
  const {buy}=useContext(CartContext)
  const {islight,toggleTheme}=useContext(Themcontext)
  return (
    <div>
      Navebar
      <button onClick={()=>{if(isAuthorized)Logout();
      else  Login("R","2");
      }}>
        {isAuthorized ? "Logout" :"Login"}</button>
        <button onClick={buy}>Buy</button>
        <button onClick={toggleTheme}>{`make ${islight ? "dark" :"Light"}`}</button>
       < WishList/>
      
    </div>
  )
}

export default Navebar
