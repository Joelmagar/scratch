import React from 'react'
// import hero from "../assets/heroimage.png";
import { FaArrowDown } from "react-icons/fa6";

import './header.css'
const Header = () => {
  return (
    <div className='stickman_head'>
      <div className='navbar'>
        <p>MNTN</p>
       <div className='navbar1'> 
       <p>Equipment </p>
       <p>About Us</p>
       <p>Blog</p>
        </div> 
        <p>@Account</p>

      </div>
       <div className='stickman_eye'>
      {/* <img id="img1" src={hero} alt="" /> */}
      <div className='header_p'>
      <div></div>
      <p className=''>A HIKING GUIDE</p>
      </div>
      <h1 className='header_h1'>Be Prepared For The Mountains And Beyond!</h1>
      <p className='header_p'>Scroll down <FaArrowDown /> </p> 
    </div>

    </div>
  )
}

export default Header
