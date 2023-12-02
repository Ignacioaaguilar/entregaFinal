
import * as React from 'react';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import Container from '@mui/material/Container';




function App() {
  const [tasks,setTasks]=React.useState([]);


  React.useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem('tareas'));

     
    if (data!=null){
      setTasks([...data])
    }
  }, [])  

 
  return (
    <>
    <Container maxWidth="sm">
      <h1 className='alinearTexto'>Task List</h1>
      <TaskForm  
        tasks={tasks}
        setTasks={setTasks} /> 

       
        <hr/>

       <TaskList  
        tasks={tasks}
        setTasks={setTasks} /> 

    </Container>
   

    </>
    
  );
}

export default App;
