import React from 'react'
import { Button } from '@mui/material';




const TaskItem = ({tasks,setTasks}) => { 

  const [completada,setCompletada]=React.useState(false);
  const [eliminada,setEliminada]=React.useState(false);

  const completar=(id)=>{
    const findTarea = tasks.find(a => a.id === id);  
    findTarea.completada=true;      
    setTasks(tasks,findTarea);  
    setCompletada(true);
   
  }

  const eliminar=(id)=>{
    setTasks( tasks.filter(a => a.id !== id) )
    setEliminada(true);   
  }

  React.useEffect(() => {     
     if (completada){
      alert("TAREA FINALIZADA EXITOSAMENTE. ")       
      sessionStorage.setItem('tareas', JSON.stringify(tasks));            
    }  
    setCompletada(false);
             
  }, [completada,tasks])  

  React.useEffect(() => {     
    if (eliminada){     
          sessionStorage.setItem('tareas', JSON.stringify(tasks));           
   }  
   setEliminada(false);
            
 }, [eliminada,tasks])  


  return (
    <>
    
     <ul spacing={2}>
      {               
        tasks.map((t,index) =>   
        <>       
          {!t.completada ?
            <li key={index} >
                {t.nombre} -                

                <Button   color="success"       
                  onClick={() => {completar(t.id)}}>
                    Completar
                </Button>    
              
                <Button  color="error"  onClick={() => { eliminar(t.id)   }}>
                        Eliminar
                </Button>               
                
            </li>
           
            :
            <li key={index} className='completada'>
                {t.nombre} -        
                <Button className='campo'  color="error"  onClick={() => { eliminar(t.id) }}>
                        Eliminar
                </Button>
                
            </li> 
            
        
          }
            
        </>
       
      )  
      }
      

    </ul> 
     
  
      
    </>
        )
  
}

export default TaskItem
