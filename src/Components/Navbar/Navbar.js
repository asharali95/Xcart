import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
          <div className="logo"><Link to="/"><h1>Logo</h1></Link></div> 
          <div className="nav-item-container">
          <div className="navitem"><Link to="/categories"><h2>Categories</h2></Link></div>
          <div className="navitem"><Link to="/authentication"><h2>Auth</h2></Link></div>
        </div>
    </div>
    )
}

export default Navbar;
