import React,{useState} from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
function Reports() {
  const [reports, setReports] = useState(0);
const handleToggle= () =>setReports(0)
  return (
<>
<div className='reports' >
<h1>{reports}</h1>

{/* <button onClick={() => setReports(reports + 1)}>Add Report</button> */}
<Button onClick={() => setReports(reports + 1)} variant="info">Agregar Reporte</Button>{' '}<br></br>
<Button onClick={handleToggle } variant="info">Reiniciar conteo</Button>{' '}
</div>
</>
  );
}

export default Reports;
