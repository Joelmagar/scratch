import React from 'react'
import Button from '../components/Button'
import fifth from '../assets/fifth.png'
import { Link } from 'react-router-dom'

const ForgotP = () => {
  return (
    <div className='flex justify-between text-center h-[645px] bg-gradient-to-t from-purple-600 to-pink-400 items-center '>
               <div className='h-[350px] ml-[30%] border-0 w-[400px]'>

        <h1 className='font-bold pb-1 mx-auto   text-[44px]'>Forgot Password?</h1>
            <h1 className='text-green-950 text-[25px] font-bold mb-1'>
            Verify first
            </h1>
        Enter your email/number<br/>
        <input id="input" type='text' className=' border-black   rounded-md' /><br/>
        < Link to="/verify"> 
        <Button id="btn" btnName={'verify'} bgColor={'bg-blue-500'} hoverBgColor={"hover:bg-blue-700"} margin={'rounded border-none mt-2'} textColor={'text-white'}/>
             </Link>
             </div> 
        <img src={fifth} className='pr-20'/> 
    </div>
  )
}





export default ForgotP
