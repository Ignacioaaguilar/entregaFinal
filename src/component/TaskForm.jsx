import React from 'react'
import { FormControl,InputLabel,Input, Button } from '@mui/material';
import {v4 as uuidv4} from 'uuid';

import Box from '@mui/material/Box';



const TaskForm = ({tasks,setTasks}) => {    
    const [input, setInput] = React.useState('');
    const [cambio,setcambio]= React.useState(false);
    const agregar=()=>{       
                   
        if (input!==""){     
            const newTarea={
                id:uuidv4(),               
                nombre:input,
                completada:false

            }
            setTasks([...tasks,newTarea]);    
            const inputDOM =document.getElementById('tareas');
            inputDOM.value='';       
            setInput('');  
            setcambio(true); 
            
                   
        }
                       
    }

    React.useEffect(() => {     
        if (cambio){
            sessionStorage.setItem('tareas', JSON.stringify(tasks));               
       }  
       setcambio(false);
                
     }, [cambio,tasks])  



 
  return (
    <>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
            <FormControl variant="standard" sx={{ width: '63ch' }}>
                <InputLabel htmlFor="my-input">Ingrese la tarea</InputLabel>           

                <Input onChange={e => setInput(e.target.value)}  id="tareas"    aria-describedby="my-helper-text" />

            
                <Button className="caja" onClick={agregar}>AGREGAR TAREA</Button>
            </FormControl>
    </Box>
        
    </>
  )
}

export default TaskForm
