import React from 'react'
import cart from "../assets/Cart.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }} className='navbar'>

        <Link to="/" ><h1>PRACTICE</h1></Link>
        <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }} className='nav-sub'>
            <input type="text" placeholder='SEARCH'/>
            <Link to="/cart"><img src={cart}/></Link>
        </div>
    </div>
  )
}

export default Navbar
