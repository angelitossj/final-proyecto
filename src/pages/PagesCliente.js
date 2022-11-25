import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Clientes/nav/NavbarClient'
import { Link } from 'react-router-dom'



import CardCliente from '../components/CardCliente'
const PagesCliente = () => {

  return (
    <>



      <Navbar />
      <div>

        <CardCliente />


      </div>






      <div className='py-5 px6 d-block'>
        <Footer />


      </div>


    </>
  )
}

export default PagesCliente