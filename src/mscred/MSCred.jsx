import React from 'react'
import Navbar from '../components/Navbar.jsx'
import MSCredBody from '../mscred/MSCredBody.jsx'
import Footer from '../components/Footer.jsx'

const MSCred = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <MSCredBody/>
      <Footer/>
    </div>
  )
}

export default MSCred