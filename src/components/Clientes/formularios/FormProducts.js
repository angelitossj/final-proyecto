import React from 'react';
import {NavLink} from 'react-router-dom'
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
      <>
      <h5>Publique su producto , lo ayudaremos a buscar</h5>
    <form className='formulario'>
      <label>Nombre Producto</label>
      <MDBInput id='form4Example1' wrapperClass='mb-4'  />
      <label>Categoria</label>
      <MDBInput type='text' id='form4Example2' wrapperClass='mb-4'  />
  

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <NavLink to='/mensaje'><MDBBtn type='submit' className='mb-4' block>
        Consultar Producto
      </MDBBtn></NavLink>
    </form>
      
      
      </>
  );
}