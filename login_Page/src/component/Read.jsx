import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Read = () => {
  const [data, setData]=useState([])
  const { id }=useParams();
  useEffect(()=> {
    axios.get('http://localhost:3000/users/' + id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
}, [])
  return (
    <div className='item-center border-2 mt-20 mx-[25%] border-white bg-white p-10 pt-3 shadow-black shadow-md h-[100%] gap-40 w-[50%]'>
    <h1 className=' text-[37px] text-center'>User Details</h1>
    <p className='pt-3 text-[30px]'>Name: {data.name} </p>
    <p className='pt-3 text-[30px]'>Email: {data.email} </p>
    <p className='pt-3 text-[30px]'>Phone: {data.phone} </p>
    <Link to={`/update/${id}`}>
    <Button btnName={'Submit'}  bgColor={'bg-blue-400 mt-2'} hoverBgColor={'hover:bg-blue-950 text-white px-2'}/>
       </Link>  
       <Link to='/home'>
             <button className='mt-3        
             bg-blue-900 text-white  px-2 hover:bg-black 
              border-2 border-black'>Back</button>
             </Link>
    </div>
  )
}

export default Read
