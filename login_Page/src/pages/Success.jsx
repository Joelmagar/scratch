import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='text-center justify-center  h-[645px] bg-gradient-to-b  from-slate-100 to-pink-400 align-middle'>
        <div className=' w-[500px] mx-auto pt-10 h-[300px]  border-black border-2    '>
      <h1 className='text-4xl pt-10 pb-6'  >Your password has been changed.</h1>
      <div className='flex  justify-center text-[20px] '>
        <Link to="/login">
      <p className='text-green-500 hover:bg-green-800 hover:text-white mr-2'>Click here</p>
        </Link>
       <p className='text-black'>to login.</p>
      </div>
    </div>
    
    </div>
  )
}

export default Success
