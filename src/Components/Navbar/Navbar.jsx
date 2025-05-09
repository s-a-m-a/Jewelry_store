import React, { useState } from 'react'
import'./Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu, setMenu] =useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p> Jewelry </p>
        </div>
      <ul className='nav-menu'>
        <li onClick={()=> {setMenu("shop")}} > Shop {menu=="shop"?<hr/>:<></>} </li>
        <li onClick={()=> {setMenu("Women")}}> Women  {menu=="Women"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("Men")}}> Men {menu=="Men"?<hr/>:<></>} </li>
      </ul>
      <div className='nav-login-cart'>
        <button> login</button>
        <img src={cart_icon} alt=""/>
        <div className='nav-cart-count'>0</div>
    
          </div>
    </div>
  )
}

export default Navbar
