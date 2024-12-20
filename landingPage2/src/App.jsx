import React from 'react'
// import Header from './pages/Header'
// import Body from './pages/Body'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/AuthLayout'
import Header from './pages/Header'
import Home from './components/Home'
import Gallery from './components/Gallery'
import About from'./components/About'
import Contact from './components/Contact'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout/>}> 
      <Route path="/" element={<Header/>}/>
        </Route>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cont" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
   

    </div>
  )
}

export default App
