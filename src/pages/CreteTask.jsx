import React from 'react'
import TodoForm from '../components/TodoForm'

const CreteTask = ({todos,setTodos,editedTodo,setEditedTodo}) => {
  return (
    <>
        <TodoForm 
            todos={todos}
            setTodos={setTodos}  
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
        />
    </>
  )
}

export default CreteTask