import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <div>
         <div className='flex bg-blue-400 text-white  p-10    justify-between'>
          <p>@2023 XYZ company</p> 
          <h1>Landing</h1>
          <div>
                   <Button btnName={"Buy Now"} bgColor={"bg-blue-700"} margin={'border-none'} hoverBgColor={'hover:bg-black'} textColor={"text-white"}/>
                   </div>
         </div>
         <hr/>
          <div className='flex border-black bg-blue-400  text-white px-1 w-full h-12 justify-between items-center'>   
                 <div className='flex px-10 mx-10 gap-12'>
                      <Link to={"/home"}>
                      <p className='cursor-pointer'>Home</p> 
                      </Link>
                      <Link to={"/contact"}>
                      <p className='cursor-pointer'>Contact</p> 
                      </Link>
                      <Link to={"/about"}>
                      <p className='cursor-pointer'>About</p> 
                      </Link>
                    </div> 
                    <div className='flex gap-1'>
                        <Link to='https://www.facebook.com/'>
                    <FaFacebookF/>
                       </Link>
                       <Link to='https://www.instagram.com/'>
                       <FaInstagram />
                       </Link>
                       <Link to='https://www.youtube.com/'>
                       <FaYoutube />
                       </Link>
                       <Link to='https://www.twitter.com/'>
                       <CiTwitter />
                       </Link>
                    </div>
            </div>
                  
      
    </div>
  )
}

export default Footer
