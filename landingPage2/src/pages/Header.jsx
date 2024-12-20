import React from 'react'
import './Body.css/'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='stickma_head'>
      <Navbar/>
      <div className='stickman_eye2'>
      <div className='stickma_eye1'> 
        YOUR JOURNEY BEGINS
      </div>
      <p className='header_p1'>This page is for all the Nepalese youth
               who loves adventure and mountaineering. here we update news,
                trekking guides, photography and current news.
      </p>
      <Link to='https://www.facebook.com/TrekkerYouthNepal'>
      <button className='button'> Read more</button>
      </Link>
      </div>
    </div>
  )
}

export default Header
