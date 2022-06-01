import React,{ useContext } from 'react'

import { AuthContext } from '../context/AuthContex'
import Cart from './Cart'

const Product = () => {
    const {isAuthorized}=useContext(AuthContext)
  return (
    <div>
        Product:{isAuthorized ? "LoggedIN": "LoggedOut"}
        <Cart/>
      
    </div>
  )
}

export default Product
