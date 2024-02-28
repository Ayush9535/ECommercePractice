import React from 'react'
import Navbar from '../Components/Navbar'

const Cart = () => {
  return (
    <div>
        <Navbar />

        <div className='cart-con'>
            <h1>Cart</h1>
            <div className='cart'>
                Cart Items here
            </div>
        </div>
    </div>
  )
}

export default Cart
