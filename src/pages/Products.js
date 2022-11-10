import React,{useState} from 'react';

import Tabla from '../components/Tabla';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar';
function Products() {
  const [reports, setReports] = useState(false);
const handleToggle= () =>setReports([<Tabla key='mitablaProductos'/>])
const handleToggleClose= () =>setReports()
   

  return (
    
<>
<div className='products'>
<Sidebar/>
      {/* {reports} */}

{/* <button onClick={() => setReports(reports + 1)}>Add Report</button> */}
{/* <Button onClick={() => setReports(reports)} variant="info">Mostrar</Button>{' '}<br></br> */}
{/* <Button onClick={handleToggle } variant="info">Mostrar compras realizadas</Button>{' '}
<Button onClick={handleToggleClose } variant="info">ocultar</Button>{' '} */}
     

      {/* <Tabla></Tabla> */}
    </div>
</>
  );
}

export default Products;
