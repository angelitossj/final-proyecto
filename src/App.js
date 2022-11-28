
import {useState}from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Session} from './context/Session'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Page404 from './pages/Page404'
import Sesion from './pages/Sesion';
import NavLading from './components/NavLading'
import RegistroCliente from './components/Clientes/RegistroCliente' 
import LoginCliente from './pages/LoginCliente'
import SesionProveedor from './pages/SesionProveedor';
import PagesCliente from './pages/PagesCliente';
import ProductosProveedores from './pages/ProductosProveedores';
import HomeClientes from './pages/Clientes/HomeClientes';
import Pedidos from './pages/Pedidos';

function App() {
 //Almacena información de la sesión
 const [session, setSession] = useState(Session);
  return (
  <>
  
    
 <Session.Provider value={[session,setSession]}>
 
 <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Sesion />} />
      <Route path="/registroCliente" element={<RegistroCliente />} />
      <Route path="/proveedor" element={<SesionProveedor />} />
      <Route path="/cliente" element={<LoginCliente />} />
      <Route path="/homeCliente" element={<HomeClientes />} />
      <Route path="/reportes" element={<Reports />} />
      <Route path="/clientes" element={<PagesCliente />} />
      <Route path="/listas" element={<Pedidos />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/mensaje" element={<ProductosProveedores />} />
      <Route path = "*" element = {<Page404/>}/>
    </Routes>


 </Session.Provider>
  
  </>
  );
}

export default App;
