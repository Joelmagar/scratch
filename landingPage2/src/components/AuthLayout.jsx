import React from 'react'
import Header from '../pages/Header'
import Body from '../pages/Body'
import Footer from '../components/Footer'
import Tail from '../pages/Tail'

const AuthLayout = () => {
  return (
    <div>
        <Header/>
        <Body/>
       <Tail/>
        <Footer/>
    </div>
  )
}

export default AuthLayout
