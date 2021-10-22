import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const [isMobile, setIsMobile] =useState(false);
    return (
        <nav className="Navbar">
        <h3 className="Home">Home</h3>
        <ul  className= {isMobile ? "nav-links-mobile":"Navlink"}
            onClick={()=>setIsMobile(false)}>
       <li className="li-css"> <Link to="/Link1" className="Link1"> </Link> Link1</li>
       <li className="li-css"> <Link to="/Link2" className="Link2"></Link> Link2</li>
       <li className="li-css"> <Link to="/Link3" className="Link3"></Link> Link3</li>
       <li className="li-css"><Link to="/Link4" className="Link4"></Link> Link4</li>
        </ul>
        <button className="mobile-menu-icon"
        onClick={()=>setIsMobile(!isMobile)}>
        {isMobile? (<i style={{color:"black"}} className="fa fa-bars"></i>):(<i   className="fa fa-bars"></i>)}
        </button>
        </nav>
        
    )
}

export default Navbar
