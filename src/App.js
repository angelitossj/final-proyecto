
import {useState}from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Session} from './context/Session'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Page404 from './pages/Page404'
import Sesion from './pages/Sesion';
import NavLading from './components/NavLading'
import RegistroCliente from './components/RegistroCliente' 
import Login from './pages/Login'
function App() {
 //Almacena información de la sesión
 const [session, setSession] = useState(null);
  return (
  <>
  
  <Navbar></Navbar>
    
 <Session.Provider value={[session,setSession]}>
 <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Sesion />} />
      <Route path="/registroCliente" element={<RegistroCliente />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reportes" element={<Reports />} />
      <Route path="/productos" element={<Products />} />
      
      <Route path = "*" element = {<Page404/>}/>
    </Routes>


 </Session.Provider>
  
  </>
  );
}

export default App;
