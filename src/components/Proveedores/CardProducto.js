import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React,{ useState, useEffect } from 'react'
import './CardCProducto.css'
function BasicExample() {
  const [mostrar, setMostrar] = useState([])
  const consulta = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const peticion = await fetch("http://localhost:3000/productos", requestOptions)
    const respuesta = await peticion.json()
    console.log(respuesta)
    setMostrar(respuesta?.producto ?? [])
    
  }

  useEffect(()=>{
    consulta()
  },[])

  return (
    <>
      <div className='ms-sm-5 me-sm-4 me-2 py-5 ps-5'>
        <div className='row w-md-75 ms-auto'>
          {mostrar.length > 1&&mostrar?.map((item, index) => (
            <div className='col-12 col-md-6 col-lg-4' key={item._id}>
              <Card className=''>
                <Card.Title className='text-center'>Producto</Card.Title>
                <div className='container py-3 px-4'>
                  <Card.Img variant="top" src={item.imagen}/>
                  <Card.Body>
               
                    <Card.Title>{item.nombreProducto}</Card.Title>
                    <Card.Text>
                      {"Marca : " + item.marca}
                     

                    </Card.Text>
                    <Card.Text>
                      
                      {"Categoria : "+item.nombreProducto}

                    </Card.Text>
                    <Card.Text>
                      {"Precio X unidad : "+item.precioUnitario}
                    </Card.Text>
                    <Button variant="primary">Mas informacion</Button>
                  </Card.Body>
                </div>
              </Card>
            </div>
              ))}
        </div>
      </div>
    </>

  );
}

export default BasicExample;