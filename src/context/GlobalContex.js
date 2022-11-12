import {createContext,useState}from 'react'
import { useNavigate}from 'react-router-dom'
import img from '../img/como-ser-comerciante.jpg'
import swal from 'sweetalert'

const initialState=[{ usuario:"",
password:""}]
export const Sessions =createContext(initialState)

export const ContextProvider=({children})=>{

const [state,setState]=useState(initialState)
const navigate = useNavigate();

const InicioSesionExitosa=(token)=>{
  swal({
    title:'Inicio de Sesión Exitosa',
    text:'Bienvenido',
    icon:'success',
    timer:'1000',
    showCancelButton: false,
    showConfirmButton: false
  }).then(()=>{
    //Almacenamiento del token y redirección después de 3 segundos
   

  }
  );
}

  

  const opciones =  {
  method:'POST',
  headers:{'Content-Type': 'application/json'}
}
 
  //Método para la redirección



const {usuario,password}=state
const handleInput = ({ target }) => {
  setState({
      ...state,
      [target.name]: target.value
    })
    console.log(target.value)
};
const handleSubmit = (e) => {
e.preventDefault(); 


(async () => {
    // Se modifican las opciones del fetch, añadiendo los datos del formulario
    opciones.body = JSON.stringify({ usuario, password })
   console.log({usuario})

    const resp = await fetch('http://localhost:3000/log', opciones)

    // Si el ok es false, significa que se produjo un error en la petición
    if (!resp.ok) alert('Revise las credenciales y vuelva a intentarlo');
   

    const data = await resp.json()

    const info = {
      token:data.token,
      user:usuario
    }
 
 
    
    console.log(data.token);
    console.log(data.usuario)
    if (data.token){
      localStorage.setItem('rstoken',data.token)
      console.log(localStorage)
      InicioSesionExitosa(data.token)
    }
    setState({info})
    navigate('/home');
    


    
    
  
  
 
   
   
  

})()





     return <Sessions.Provider value={{...state,}} >
        {children}

    </Sessions.Provider>
}}

