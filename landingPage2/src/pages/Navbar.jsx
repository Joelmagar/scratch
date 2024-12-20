import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
const Menu = () =>(
    
  <>
       <Link to="/home">
     <p className='link_p'>Home</p>
     </Link>
     <Link to='/cont'>
     <p className='link_p'>Contact</p>
     </Link>
      <Link to='/about'>
      <p className='link_p'>About</p>
     </Link>
      <Link to="/gallery">
      <p className='link_p'>Gallery</p>
     </Link>
      <Link to='https://www.facebook.com/TrekkerYouthNepal'>
      <p className='link_p'><FaFacebook /></p>
      </Link>
      <Link to='https://www.instagram.com/trekkeryouthnepal/'>
      <p className='link_p'><FaInstagramSquare /> </p>
      </Link>
     </>
  )
const Navbar = () => {
   const[toggleMenu,setToggleMenu]=useState(false)
  return ( 
    <div id='navbarlink'>
        <h3> Trekker Youth Nepal</h3> 
        <div id='navbarlink1'>
    <Menu/>
         </div>
     <div id='mobile' >
      {toggleMenu 
? <GrClose onClick={ () => setToggleMenu(false)}/> 
: <IoReorderThree onClick={ () => setToggleMenu(true)}/>}
           {toggleMenu && (
           <div className='gpt3_scale-up-center'> 
           <div className='gpt3_links'>
            <Menu/>
            </div>
             </div>
)}
      </div>
    </div>
  )

}
// }

export default Navbar
