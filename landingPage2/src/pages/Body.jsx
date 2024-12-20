import React from 'react'
// import img5 from '../assets/mtn3.jpg'
import img2 from '../assets/mtn2.jpg'
import img3 from '../assets/mtn_5.jpg'
import img4 from '../assets/img_1.jpg'
import pic1 from '../assets/pic1.jpg'
import pic from '../assets/picm.jpg'
import pic2 from '../assets/pic2.jpg'
import pic_2 from '../assets/pic_2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
const Body = () => {
  return (
<div className='stickman_body_div1'>
<div className='div1_1cover'> 
<div className='stickman_body_div1_1'> 
<div className='stickman_body_div1_1_1'>
<div className='stickman_body_div1_1_1_text'>
           <h1 className='flexh'>
              <p>
                Explore Top
              </p>
               <p className='dest'>Destinations.
              </p>
          </h1>
          <p className='flexp'>The Best Journeys In Life Are Those
                That Answer Questions You Never Thought To Ask.  The purposes of hiking is to get pleasure and to get knowledge.
                Trekking definitely provides pleasure because the people in trekking 
                can watch and enjoy many different kinds of natural gifts and beauties. 
         </p> 
  </div>
</div>
     <div className='ok'>
      <p className='arrowl'>
      <IoIosArrowBack/>
      </p>
      <div className='ok_div_img_'>
      <img className='img' src={img4} alt="" />
     <div className='info'>
     <p className='ok_img_h'>Trekking </p>
      <p className='ok_img_p'>The Best Journeys In Life Are Those That Answer Questions You Never Thought To Ask. </p>
     </div>
        </div>
      <div className='ok_div_img_'>
      <img className='img' src={img3} alt="" />
     <div className='info'>
     <p className='ok_img_h'>Trekking </p>
      <p className='ok_img_p'>The Best Journeys In Life Are Those That Answer Questions You Never Thought To Ask. </p>
     </div>
        </div>
      <div className='ok_div_img_'>
      <img className='img' src={pic} alt="" />
     <div className='info'>
     <p className='ok_img_h'>Trekking </p>
      <p className='ok_img_p'>The Best Journeys In Life Are Those That Answer Questions You Never Thought To Ask. </p>
     </div>
        </div>
      <div className='ok_div_img_'>
      <img className='img' src={img2} alt="" />
     <div className='info'>
     <p className='ok_img_h'>Trekking </p>
      <p className='ok_img_p'>The Best Journeys In Life Are Those That Answer Questions You Never Thought To Ask. </p>
     </div>
        </div>
      <div className='ok_div_img_'>
      <img className='img' src={pic_2 } alt="" />
     <div className='info'>
     <p className='ok_img_h'>Trekking </p>
      <p className='ok_img_p'>The Best Journeys In Life Are Those That Answer Questions You Never Thought To Ask. </p>
     </div>
        </div>
        <p className='arrowr' >
        <IoIosArrowForward />
         </p> 
     </div>
 <p className='dots'>
     {/* <PiDotsThreeOutlineLight /> */}
   </p>  
    </div>
  </div>
 <div className='stickman_body_div1_2'>
        <div className='stickblur'>
               <div className='stickman_body_div1_2_2'>
        <div className='stickman_body_div1_2_2_1'>
           <img className='stickman_body_img2' src={img2} alt="" />
           </div>
           {/* <div className='stickman_body_div1_2_2_1'>
           <img className='stickman_body_img2' src={img3} alt="" />
                      </div>
           <div className='stickman_body_div1_2_2_1'>
           <img className='stickman_body_img2' src={pic3} alt="" />
                     </div> */}
        </div>
        <div className='stickman_body_div1_2_1'>
        <h1 className='stickman_body_h2'>
         <p>MOST</p>
            <p className='dest'> 
             POPULAR TREKKING
            </p>
        </h1>
        <p className='stickman_body_p1'>
            There are many variations of passages of available but the majority 
            have suffered alteration in some form, by injected hum randomised words
             which don't look even slightly. In trekking, we have to face different difficulties and uncertainties, by overcoming them we allow 
             ourselves to enhance our knowledge, experience and the understanding of the world.

        </p>
        </div>
      </div>
</div>
<div className='stickman_body_div1_3cover'>
<div className='stickman_body_div1_3'>
       <div className='stickman_body_div1_3_1' >
        <div className='stickman_body_div1_3_2'>
             </div>
        </div> 
                  <div className='stickman_body_div1_3_1_1'>
                  <div className='stickman_body_div1_3_1_2'>
                    <img  className='imgimg1' src={pic2} alt="" />
                    <div className='heyheyhey'>
                    <img className='imgimg2' src={pic1} alt="" />
                    <img className='imgimg3' src={pic4} alt="" />
                    </div>
                    </div>
                    <div className='stickman_body_div1_3_1_1p'>
                                <h1 className='stickman_body_h2'> <p> Why  </p> 
                            <p className='dest'> Choose Trekking.</p></h1>
                        <p> 
                            Trekking could be a motive, It could be a commitment, an aim, an objective, a mission, a party, a social gathering.
                                         By involving in trekking, you can realize  how beautiful nature is and you will be grateful to
                             live in a place like earth.
                       </p>
                       <button className='btn'>Read more</button>
                          </div>
                      {/* <img className='pic1' src={pic1} alt="" />
                      <img className='pic2' src={pic} alt="" /> */}
    </div>
    </div> 
   </div>
     </div>
    
  )
}

export default Body
