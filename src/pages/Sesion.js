import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
import {useState} from 'react'
import img from '../img/450_1000.jpg'
import  Component  from '../components/Componen';

function Sesion() {
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
<>
<Component/>
   <div className='container'>
<div className='row'>
  <div className='col-md-6'>
  <Card style={{ width: '480px', }}>
      {mostrar.map((item,index)=>( <Card.Body>
      <Card.Img variant="top" src={img} />
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>{item.usuario}</Card.Text>
        <Button variant="primary">Ir</Button>
      </Card.Body>))}
     
    </Card>
  </div>
  <div className='col-md-6'>
  <Card style={{ width: '480px', }}>
      {mostrar.map((item,index)=>( <Card.Body>
      <Card.Img variant="top" src={img} />
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>{item.usuario}</Card.Text>
        <Button variant="primary">Ir</Button>
      </Card.Body>))}
     
    </Card>
  </div>
</div>
   </div></>
  );
}

export default Sesion;