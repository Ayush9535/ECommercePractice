import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import img1 from "../assets/Img1.jpeg"
import img2 from "../assets/Img2.jpeg"
import img3 from "../assets/Img3.jpeg"
import IceCream from "../assets/Icecream.png"

const Home = () => {
  return (
    <div>
        <Navbar />

        <div className='home'>
          <h1>Chill out and find your flavor</h1>
          <div>
            <img src={img1} className='image up'/>
            <img src={img2} className='image down'/>
            <img src={img3} className='image up'/>
          </div>
        </div>

        <div className='flex top-picks'>
          <h1>Top Picks</h1>

          <div className='top-grid'>
            <div className='card'>
              <div className='img-div'>
                <img src={IceCream} alt="" />
              </div>
              <div className='infodiv nunito'>
                <h2>Vanilla Ice-Cream</h2>
                <h3>$0.12</h3>
              </div>
            </div>
            <div className='card'>
              <div className='img-div'>
                <img src={IceCream} alt="" />
              </div>
              <div className='infodiv nunito'>
                <h2>Vanilla Ice-Cream</h2>
                <h3>$0.12</h3>
              </div>
            </div>
            <div className='card'>
              <div className='img-div'>
                <img src={IceCream} alt="" />
              </div>
              <div className='infodiv nunito'>
                <h2>Vanilla Ice-Cream</h2>
                <h3>$0.12</h3>
              </div>
            </div>
          </div>

          <Link to="/products"><button>Explore</button></Link>

        </div>

        <div className='footer flex'>
          Made By Ayush with 🤍
        </div>

    </div>
  )
}

export default Home
