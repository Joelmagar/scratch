import React from 'react'

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const verify = () => {
const {register, handleSubmit} = useForm()
const handleFormSubmit = (data) =>{
console.log(data)
  }
  return (
    <div>
 <div className=' mx-[450px] pb-5  border-2'>
      <h1 className='font-extrabold text-[30px]  text-white pb-6 pt-6'>Create new password</h1> 
       <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type='password' name='password' {...register('*new password')} placeholder='*new password' className='mb-2 rounded-md p-1 '/><br/> 
        <input type='password' name='passwords'  {...register('*confirm password')} placeholder='*confirm password' className='mb-2 rounded-md p-1 '/><br/> 
        <p  className='text-white font-light mt-5'>*Password must contain atleast one number <br/>one
          capital and small letter and any symbol. </p>
       <Link to='/success'>
       <input type='submit' placeholder='submit' className='p-1 bg-blue-600 text-white hover:bg-black border-none'/> 
        </Link>
       </form>
    </div>
    </div>
  )
}

export default verify

