import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../img/como-ser-comerciante.jpg'
import {useState}from 'react'
function BasicExample() {
    const [mostrar,setMostrar]=useState([])
    const consulta=async()=>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
          method: 'GET',
       headers: myHeaders,
          redirect: 'follow'
        };
        
      const peticion = await fetch("http://localhost:3000/proveedores", requestOptions)
          const respuesta = await peticion.json()

              setMostrar(respuesta.proveedor)
        console.log(mostrar)
  }

consulta()
  return (
   <>
   <div className='container py-5 px-4'>
    <div className='row'>
        <div className='col-md-6'>
        <Card className='' style={{ width: '250px' }}>
    <Card.Title className='text-center'>Lista de Proveedores</Card.Title>
     {mostrar.map((item,index)=>(
         <div className='container py-3 px-4'>
          <Card.Img variant="top" src={img}/>
           <Card.Body>
          
         <Card.Title>{item.nombreOrazonSocial}</Card.Title>
         <Card.Text>
            {item.usuario}
           {item.domicilioEmpresa}
           
         </Card.Text>
         <Card.Text>
         {item.telefono}
         </Card.Text>
         <Button variant="primary">Mas informacion</Button>
       </Card.Body>
      </div>
     ))}
    </Card>
        </div>
        <div className='col-md-6'>
        <Card className='' style={{ width: '250px' }}>
    <Card.Title className='text-center'>Lista de Proveedores</Card.Title>
     {mostrar.map((item,index)=>(
         <div className='container mx-auto w-full py-3 px-4'>
          <Card.Img variant="top" src={img}/>
           <Card.Body>
          
         <Card.Title>{item.nombreOrazonSocial}</Card.Title>
         <Card.Text>
            {item.usuario}
           {item.domicilioEmpresa}
           
         </Card.Text>
         <Card.Text>
         {item.telefono}
         </Card.Text>
         <Button variant="primary">Mas informacion</Button>
       </Card.Body>
      </div>
     ))}
    </Card>
        </div>
    </div>
   </div>
   </> 
   
  );
}

export default BasicExample;