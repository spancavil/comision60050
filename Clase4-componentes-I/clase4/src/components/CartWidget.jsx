import React from 'react'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <>
        <img src={cart} alt='cart' style={{width: 40}}/>
        <span>(3)</span>
    </>
  )
}

export default CartWidget