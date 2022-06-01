import React,{ useContext }  from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {count,addtocart} =useContext(CartContext)
  return (
    <div>
        Cart

        <button onClick={addtocart}>Add to cart</button>
      
    </div>
  )
}

export default Cart
