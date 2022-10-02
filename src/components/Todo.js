import React from 'react'
const Todo = ({todo, onDelete,onComplete}) => {
  

  return (
    <div className='col todo' >
      
      
<span className="todoText"><b> {todo.text} Time: {todo.time}, Date: {todo.date}</b></span>
<div>

    
       
        <button className='btn-ss' onClick={()=> onDelete(todo.id)}>x</button>    
        </div>
    </div>
  )


  
}

export default Todo