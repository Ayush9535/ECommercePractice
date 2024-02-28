import React from 'react'
import cart from "../assets/Cart.png"
import {Link} from "react-router-dom"
import logo from "../assets/Logo.png" 

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} className='navbar'>

        <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Link to="/" className='practice' ><img src={logo}/></Link>
          <input type="text" placeholder='SEARCH'/>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"30px"}} className='nav-sub'>
            <Link to="/" style={{textDecoration:"none",color:"black"}}>HOME</Link>
            <Link to="/products"  style={{textDecoration:"none",color:"black"}}>PRODUCTS</Link>
            <Link to="/cart" style={{textDecoration:"none",color:"black"}}><img src={cart}/></Link>
        </div>

    </div>
  )
}

export default Navbar
