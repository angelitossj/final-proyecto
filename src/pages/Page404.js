import React from 'react'
import img from '../img/WhatsApp Image 2022-10-26 at 19.59.38.jpeg'
const Page404 = () => {
    return (
        <div className="d-flex flex-column align-items-center bd-highlight">
            <div className="bd-highlight">
                <img className='img' src={img}alt="error 404"/>
            </div>
            <div className="bd-highlight">
                <h1>Error 404: Página no encontrada</h1>
            </div>
        </div>
    )
}

export default Page404
