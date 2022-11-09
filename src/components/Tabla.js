import Table from 'react-bootstrap/Table';
import React,{useState} from 'react'







function DarkExample() {
  const [mostrar,setMostrar]=useState([])
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/usuario", requestOptions)
    .then(response => response.json())
    .then(result => setMostrar(result.user))
    .catch(error => console.log('error', error));
  
  return (
    <Table key='mitablaProductos' striped bordered hover variant="dark">
    
      <thead>
      
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          
        </tr>
      </thead>
    {mostrar.map((item,index)=>(
        <tbody>
        <tr>
          <td>{index + 1}</td>
          <td>{item.nombre}</td>
          <td>{item.usuario}</td>
          <td>{item.email}</td>
        
        </tr>
       
      </tbody>
    ))}
    </Table>
  );
}

export default DarkExample;