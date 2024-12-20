import React from 'react'
import Login from './pages/Login'
import './App.css/'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Update from './component/Update'
import Read from './component/Read'
const App = () => {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}>
        </Route>
        <Route path='/' element={<Login/>}>
        </Route>    <Route path='/update/:id' element={<Update/>}>
        </Route>
        <Route path='/read/:id' element={<Read/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
