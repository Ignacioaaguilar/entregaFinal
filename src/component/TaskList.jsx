import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks,setTasks}) => {
 
          
      
  return (  
    <>
        <h1 className='alinearTexto'>Detalle</h1>

         <TaskItem  
          tasks={tasks}
          setTasks={setTasks} />
   
    </>
  )
}

export default TaskList
