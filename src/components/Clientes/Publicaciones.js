import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer';
import NavBar2 from '../NavBar2';
import FormProducts from '../Clientes/formularios/FormProducts'
import Carrousel from './Carrousel'
const Publicaciones = () => {
  return (
    <>
 <NavBar2/>
  <Container>
    <Row md={8}>
      <Col>{<FormProducts/>}</Col>
      <Col md={6}>{<Carrousel/>}</Col>
    </Row>
  </Container>
    
    <Footer/>
    
    </>
  )
}

export default Publicaciones