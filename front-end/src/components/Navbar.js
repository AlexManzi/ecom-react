import React from 'react'
import './Navbar.css';
import { NavLink, Link } from "react-router-dom"
import { useEffect, useState } from 'react';

function Navbar() {
  const [userInfo, setUserInfo] = useState({name: null})
  const [loggedIn, setLoggedIn] = useState(false)
useEffect(() => {
  if(JSON.parse(localStorage.getItem('user')) === null){
    localStorage.setItem('user',JSON.stringify({name: null}));
    localStorage.setItem('cart',JSON.stringify([]));
    localStorage.setItem('product-detail',JSON.stringify({}));
  }
  setUserInfo(JSON.parse(localStorage.getItem('user')));
 if(JSON.parse(localStorage.getItem('user')).name === undefined){
   setLoggedIn(true)
 }else{
  setLoggedIn(false)
 }
}, [])
  return (
      <div id='container'>
      <Link className='logo' to="/"><img src="https://i.ibb.co/KrDfhMc/2-0-500-250-px-250-250-px.png" alt="logo" className='logo'/></Link>   
      <div className='item'>
      <NavLink className="item-name" to="/">Home</NavLink>
      <NavLink className="item-name" to="/cart">Cart</NavLink>
      {loggedIn ? <a className='item-name' onClick={()=>{
      localStorage.setItem('user',JSON.stringify({name: null}))
      setUserInfo({name: null})
      setLoggedIn(false)
      }}>Logout</a>: <NavLink className="item-name" to="/login">Login</NavLink>}
      </div>
        <a className='ham'>
          <button className='navbar-icon-a'><img src='http://cdn.onlinewebfonts.com/svg/img_422593.png'/></button>
        </a>
      </div>
  )
}

export default Navbar