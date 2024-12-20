import React from 'react'
import hero2 from "../assets/01.png";
import hero3 from "../assets/02.png";
import hero4 from "../assets/03.png";


import { FaArrowRight } from "react-icons/fa6";


const Body = () => {
  return (
    <div>
       <div className="stickman_body1">
        <div className="stickman_body_div2">
            <div className='stickman_body_h'>
            <p className='body_p'>01</p>
            <p className='body_p2'>GET STARTED</p>
            </div>
          <h1 className='body_h1'>What level of hiker are you?</h1>
          <p>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
          <p className='body_p3'>Read more</p><FaArrowRight />
        </div>

        <img id="img2" src={hero2} alt="" />
      </div>
      <div className="stickman_body1">
      <img id="img2" src={hero3} alt="" />

        <div className="stickman_body_div2">
            <div className='stickman_body_h'>
            <p className='body_p'>02</p>
            <p className='body_p2'>HIKING ESSENTIALs</p>
            </div>
          <h1 className='body_h1'>Picking the right Hiking Gear!</h1>
          <p>
          The nice thing about beginning hiking is that you don’t really need any special gear, 
          you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners
           make is wearing jeans and regular clothes, which will get heavy and chafe 
           wif they get sweaty or wet.
          </p>
          <p className='body_p3'>Read more </p><FaArrowRight />
        </div>

      </div>
      <div className="stickman_body1">
        <div className="stickman_body_div2">
            <div className='stickman_body_h'>
            <p className='body_p'>03</p>
            <p className='body_p2'>Understand Your Map & Timing</p>
            </div>
          <h1 className='body_h1'>What level of hiker are you?</h1>
          <p>
          To start, print out the hiking guide and map. 
          If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map,
           and have a good idea of what to expect. I like to know what my next landmark is as I hike. 
           For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
          </p>
          <p className='body_p3'>Read more</p><FaArrowRight />
        </div>

        <img id="img2" src={hero4} alt="" />
      </div>
      {/* <img src={} alt="" />
      <img src={} alt="" />
      <img src={} alt="" /> */}
    </div>
  )
}

export default Body
