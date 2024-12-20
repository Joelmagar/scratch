import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import footer from "../assets/footer.png"
import { useForm } from 'react-hook-form';

const Signup = () => {
  const  {register, handleSubmit} = useForm()
  const  handleFormSubmit = (data) =>{
    console.log(data)
  }
  return (
    <div className=''>
   <div className='flex justify-between bg-cover h-[645px] bg-gradient-to-l from-purple-600 to-blue-300'>
      <div className=' ml-auto  min-w-[300px] pt-[100px] text-center item-center justify-center'>
        <h1 className='font-extrabold  text-white text-4xl'>Sign-up please </h1>
      <div >
         <form className='text-black'  onSubmit={handleSubmit(handleFormSubmit)}>
                <input type='text' placeholder='*Username'  {...register("username")}   className='  p-2 mt-12 mb-1 text-center  rounded-xl border-black' /><br/>
                <input type='password' placeholder='*Password' {...register("password")}  className=' p-2  my-1 rounded-xl text-center border-black' /><br/>
                <input type='submit' value='Sign-up' className='p-1 bg-blue-600 w-[70  px] text-white mt-6 hover:bg-black border-none'/> 
                 
         </form><br/> 

         <div className='flex pb-2'>
      <p>Do you already have a account?</p>
          <Link to={'/login'} className=' hover:bg-blue-950 text-blue-950 hover:text-white font-bold '>
            Log-in.
           </Link>
           </div>      
           <hr/>
           <p className='text-white'>
           <p className='mt-2'>Or</p>
           <p>Sign-up with</p>
           </p>
           
            
              <div className=' w-32 border-0 mx-auto  mt-2  bg-blue-500   border-black' >
                     <Link to='https://www.facebook.com/' className='text-white justify-center flex  '>
                           <div className='mt-1 px-1'>
                              <FaFacebookF/>
                           </div>
                     Facebook
                       </Link>
              </div>

             <div className='border-0 w-32 justify-center mx-auto bg-gradient-to-r from-orange-400 to-yellow-400  flex mt-1 px-1 border-black'>
                       <Link to='https://www.google.com/' className=' flex  text-white'> 
                       <p className='mt-1 mr-1 '>
                       <FaGoogle />
                       </p>
                       Google
                       </Link>
             </div>
                 
                  
              </div>
           </div>

             <img src={footer} className='hover:blur-sm'/>
        </div>
        </div>
  )
}

export default Signup
 