import React from 'react'
import {Link} from "react-router-dom"
import data from "../data/data.json"
import "../styles/nav.css"


const NavBar = () => {
  return (
    <div className="nav">
        <div className="logo">
            <a href="/">
                <img id="logoImage" src={data.logo} alt="none" />
            </a>
        </div>
            {/* <Link className='navLinks' to="/#miphone">Mi Phone</Link>
            <Link className='navLinks' to="/#redmiphone">Redmi Phone</Link>
            <Link className='navLinks' to="/#tv">TV</Link>
            <Link className='navLinks' to="/#laptops">Laptops</Link>
            <Link className='navLinks' to="/#lifestyle">Fitness & Lifestyle</Link>
            <Link className='navLinks' to="/#home">Home</Link>
            <Link className='navLinks' to="/#audio">Radio</Link>
            <Link className='navLinks' to="/#accessories">Accessories</Link> */}

           <a  className="navLinks" href="/miphones">Mi Phones</a>
           <a   className="navLinks"  href="/redmiphones">Redmi Phones</a>
           <a   className="navLinks" href="/tv">TV</a>
           <a   className="navLinks" href="/laptops">Laptops</a>
           <a   className="navLinks" href="/lifestyle">Fitness & Lifestyle</a>
           <a  className="navLinks" href="/home">Home</a>
           <a   className="navLinks" href="/audio">Radio</a>
           <a   className="navLinks" href="/accessories">Accessories</a>
        <div className='searchBox'>
            <input type="text" placeholder='Search Products' />
            {/* {searchIcon} */}
        </div>
    </div>
  )
}

export default NavBar