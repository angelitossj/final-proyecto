import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react'

function FormProduct() {
    const [mostrar, setMostrar] = useState([])
  
  const handleInput = ({ target }) => {
    
      
      setMostrar({
          ...mostrar,
          [target.name]: target.value
        })
        
      
};
  const consulta = async ({ target }) => {
    setMostrar({
        ...mostrar,
        [target.name]: target.value
      })
    const id =target.value
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const peticion = await fetch(`http://localhost:3000/productos?categoria=${id}`, requestOptions)
    const respuesta = await peticion.json()
    console.log(respuesta)
    setMostrar(respuesta?.producto ?? [])

 
    
   

  }




  useEffect(()=>{
    consulta()
  },[])

  return (
  <>
    <Form onClick={consulta}>
    <Form.Label>Ingrese un producto Deseado</Form.Label>
    <Form.Select onChange={handleInput} aria-label="Default select example">
      <option name='select' >seleccione una categoria</option>
      <option value="Bebidas">{<NavLink to='/productos'>Bebidas</NavLink>}</option>
      <option value="Lacteos">Lacteos</option>
      <option value="Panificado">Panificados</option>
      <option value="Carnicos">Carnicos</option>
      <option value="Pastas">Pastas</option>
      {/* {mostrar.map((item)=>(
        <option value='1'  >Bebidas</option>
      ))} */}
    </Form.Select>
      
   
    
      <Button variant="primary" type="button">
        Submit
      </Button>
    </Form>
    <div className='div'></div>
  </>
    
  );
}

export default FormProduct;