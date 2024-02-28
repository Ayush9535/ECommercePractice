import React from 'react'
import IceCream from "../assets/Icecream.png"
import "./card.css"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Card = () => {
  return (
    <div className='card'>
      <div className='img-div'>
        <img src={IceCream} alt="" />
      </div>
      <div className='infodiv nunito'>
        <h2>Vanilla Ice-Cream</h2>
        <h3>$0.12</h3>
        <div className='btns'>
            <button className='fav'>{<FaHeart style={{width:"100%"}}/>}</button>
            <button className='addCart'>{<FaShoppingCart/>}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
