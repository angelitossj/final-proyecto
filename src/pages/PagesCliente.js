import React,{useState} from 'react'
import Footer from '../components/Footer'
import NavLading from '../components/NavLading'
import {Link} from 'react-router-dom'


import { Session } from '../context/Session'
import CardCliente from '../components/CardCliente'
const PagesCliente = () => {
    const [session, setSession] = useState(Session);
  return (
    <>



<NavLading/>
<div>

<CardCliente/>
   

</div>






<div className='py-5 px6 d-block'>
<Footer/>    


</div>
    
    
    </>
  )
}

export default PagesCliente