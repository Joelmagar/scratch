import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { useForm } from 'react-hook-form';
const Login = () => {
  const [submit, setSubmit] = useState("")
  const [submitp, setSubmitp] = useState("")
  const change = event =>{
    setSubmit(event.target.value)
  }
  const changee = event =>{
    setSubmitp(event.target.value)

  }
  const handleSubmit = () =>{
    // let a =document.mb ;
    // setSubmit(target.value)
    alert(submit,submitp)
    console.log(submit)
  }
 
 
  return (
    <div>
    <div className='pt-[30px] justify-center h-[645px] w-[260px] flex flex-col'>
      <h1 className='font-bold pb-10  text-white text-4xl'>Log-in</h1>
        <form name=' mb '>
        <input type="text"
               name='Username' 
               placeholder='username'
               value={submit}
               onChange={change}
                className='p-2 text-center rounded-xl border-blue-950'/> <br/>
        <input 
            type='password'  
            name='password' 
            placeholder="Password" 
            value={submitp}
            onChange={changee}
            className=' p-2 mt-3 text-center mb-5 rounded-xl border-blue-950'/>
       <br/> <Link to='/forgotpass'>
       <p className='text-blue-900 hover:text-white  font-medium '>Forgot password?</p>
       </Link>
      <br></br>
        <input type='checkbox' className='mb-3 mt-3'/> <label>Remember me.</label><br/>
        {/* <input type='submit'  value='Log-in' className='p-1 w-[70px] bg-blue-600 text-white hover:bg-black border-none'/>  */}
        <button onClick={handleSubmit} className='p-1 w-[70px] bg-blue-600 text-white hover:bg-black border-none' >Log-in</button>
        <div className='flex justify-center  '>
       <p>If you don't have a account.</p>
        <Link to={"/signup"}>
        <p className='cursor-pointer  hover:bg-blue-950 hover:text-white font-bold text-blue-950'>Sign-up</p> 
        </Link>
        </div>
        </form> 
        <hr/>
        <p className='font-bold mt-2 text-white'>Or</p> 
        <p className='text-white'>Log-in with</p>
        <div className=' w-32 border-0 mx-auto mt-2  bg-blue-500   border-black' >
                     <Link to='https://www.facebook.com/' className='text-white justify-center flex  '>
                           <div className='mt-1 px-1'>
                              <FaFacebookF/>
                           </div>
                     Facebook
                       </Link>
              </div>

             <div className='border-0 w-32  justify-center bg-gradient-to-r from-orange-400 to-yellow-400  flex mx-auto mt-1  border-black'>
                       <Link to='https://www.google.com/' className='  flex  text-white '> 
                       <p className='mt-1 px-1'>
                       <FaGoogle />
                       </p>
                       Google
                       </Link>
             </div>
      
        </div>
        
    </div>

  ) 
}

export default Login
