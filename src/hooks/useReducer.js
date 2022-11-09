
import React,{useReducer,useRef} from 'react'

const ListarTareas = () => {

    const inputRef=useRef()
    const [tareas,dispatch]=useReducer((state=[],action)=>{
  switch(action.type){
    case 'agregar_tareas':{
        return [
            ...state,
            {id:state.length,title:action.title }
        ]
    }
    default:{
        return state
    }
  }

    });
    const handleSubmit =(event)=>{
        event.preventDefault()

        dispatch({
            type:'agregar_tareas',
            title:inputRef.current.value
        })


    }

  return (
        <>
        <div className='container'>
            <h1>Lista de tareas</h1>
            <form onSubmit={handleSubmit}>
        <label>tareas</label>
        <input type="text" ref={inputRef} name='titulo '/>
        <input type="submit" name='enviar'/>


            </form>
            <div className='task'>
                {tareas.map(task=>(
                    <p>{task.title}</p>
                ))}
            </div>
        </div>
        
        </>
    
  )
}

export default ListarTareas