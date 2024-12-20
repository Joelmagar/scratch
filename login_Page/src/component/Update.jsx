import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Update = () => {
  const { id }=useParams();
  const navigate=useNavigate()
  const[values , setValue]=useState({
    name:" ",
    email:" ",
    phone:" " 
})
  useEffect(()=> {
    axios.get('http://localhost:3000/users/' + id)
    .then(res => {
      setValue(res.data)})
    .catch(err => console.log(err));
}, [])
const handleUpdate = (event) =>{
  event.preventDefault();
  axios.put('http://localhost:3000/users/' +id ,values)
  .then(res =>{
    console.log(res)
  navigate('/home')

})
}
  return (
    <div className='text-left  text-black mt-40  bg-white border-2 mx-[400px] p-10'>
        <h1 className='text-[40px]'>Update User</h1>
      <form onSubmit={handleUpdate}>
              Name:  <input type="text"
                   placeholder='Enter name'
                   value={values.name}
                   onChange={e => setValue({...values,name: e.target.value}) } 
                className='mt-0 p-2 w-[100%] rounded-lg border-2 border-black'/><br/>
              Email: <input type="email" 
                   placeholder='Enter email'
                   value={values.email}
                   onChange={e => setValue({...values,email: e.target.value}) } 
                    className='w-[100%] mt-0 p-2 rounded-lg border-2 border-black'/><br/>
             Phone:<input type="number" 
                     placeholder='Enter Number' 
                   value={values.phone}
                   onChange={e => setValue({...values,phone: e.target.value}) } 
               className='mt-0  p-2 w-[100%] rounded-lg border-2 border-black' /><br/> 
               <input type="submit" value='Update' className='mt-3 bg-blue-900 text-white  px-2 hover:bg-black border-2 border-black'/>
             </form> 
             <Link to={`/read/${id}`}>
             <button className='mt-3        
                    bg-blue-900 text-white  px-2 hover:bg-black 
              border-2 border-black'>Back</button>
             </Link>
    </div>
  )
}

export default Update
