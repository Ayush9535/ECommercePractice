import React from 'react'
import Card from '../Components/card'
import Navbar from '../Components/Navbar'

const Products = () => {
  return (
    <div>
        <Navbar />

        <div className='home'>
        <h1>PRODUCTS</h1>
        <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>

        <div className='footer flex'>
          Made By Ayush with 🤍
        </div>
    </div>
  )
}

export default Products
