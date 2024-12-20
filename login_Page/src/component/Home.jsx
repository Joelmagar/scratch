import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [data, setData]=useState([])
  useEffect(()=> {
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
}, [])
const handleDelete=(id)=>{
const confirm= window.confirm("Would you like to delete ?")
axios.delete('http://localhost:3000/users/'+ id)
location.reload()
}
  return (
        <div className=' flex flex-col w-[70%] item-center text-black text-center mx-[15%]   mt-10'>
      <h1 className='text-5xl'>
        List of user
      </h1>
     <Link to='/'>
     <button className=' flex  flex-col bg-red-200 w-20 ml-[91.68888%] 
     border-2k  px-2 border-red-700 hover:bg-red-300'>Add +</button>

     </Link> 
      <div  className='bg-white gap-4 shadow-black shadow-md p-4'>
<table className='w-[100%] gap-10'>
<thead>
  <tr>
    <td>ID</td>
    <td>Name</td>
    <td>Email</td>
    <td>Phone</td>
    <td>Action</td>
  </tr>
</thead>
<tbody >
  {
    data.map((d , i)=> (
      <tr  key={i}>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td>{d.email}</td>
        <td>{d.phone}</td>
        <td>
        <Link to={`/update/${d.id}`}>
        <button className='bg-blue-500 text-white mx-1 px-2  hover:bg-blue-900'>Edit</button>
       </Link>  
       <Link to={`/read/${d.id}`}>
       <button className='bg-gray-500 text-white mx-1 px-2 hover:bg-gray-900'>Read</button>
       </Link>
        <button
        onClick={e => handleDelete(d.id)}
         className='bg-red-600 text-white mx-1 px-2 hover:bg-red-950'>Delete</button>
        </td>
      </tr>

    ))
  }

</tbody>
</table>
      </div>
    </div>
  )
}

export default Home
