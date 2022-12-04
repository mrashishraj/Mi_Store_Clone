import React from 'react'
import {Link} from "react-router-dom"
import data from "../data/data.json"
import "../styles/nav.css"


const NavBar = () => {
  return (
    <div className="nav">
        <div className="logo">
            <Link to="/">
                <img id="logoImage" src={data.logo} alt="none" />
            </Link>
        </div>
            <Link className='navLinks' to="/miphone">Mi Phone</Link>
            <Link className='navLinks' to="/redmiphone">Redmi Phone</Link>
            <Link className='navLinks' to="/tv">TV</Link>
            <Link className='navLinks' to="/laptops">Laptops</Link>
            <Link className='navLinks' to="/lifestyle">Fitness & Lifestyle</Link>
            <Link className='navLinks' to="/home">Home</Link>
            <Link className='navLinks' to="/audio">Radio</Link>
            <Link className='navLinks' to="/accessories">Accessories</Link>
        <div className='searchBox'>
            <input type="text" placeholder='Search Products' />
            {/* {searchIcon} */}
        </div>
    </div>
  )
}

export default NavBar