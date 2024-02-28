import React from 'react'
import Card from '../Components/card'
import Navbar from '../Components/Navbar'

const Home = () => {
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
    </div>
  )
}

export default Home
