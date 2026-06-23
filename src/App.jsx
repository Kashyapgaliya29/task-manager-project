import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoCard from './components/TodoCard'

const App = () => {
  const [todos, setTodos] = useState(()=>{
      const savetodos = localStorage.getItem('todos')
      if(savetodos){
        return JSON.parse(savetodos)
      }
      return []
  })

  const [filter, setFilter] = useState('all')
  const [editedTodo,setEditedTodo] = useState(null)

  const deleteTodo = (id)=>{
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const toggleStatus=(id)=>{
    setTodos(
      todos.map((todo)=>
        todo.id === id ? {...todo,completed:!todo.completed} : todo
      )
    )
  }

  let filterTodos;

  if(filter === 'all'){
    filterTodos = todos;
  }else if(filter === 'pending'){
    filterTodos = todos.filter(todo => !todo.completed)
  }else if(filter === 'completed'){
    filterTodos = todos.filter(todo => todo.completed)
  }

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])  
  
  return (
    <div className='h-screen bg-black text-white flex flex-col lg:flex-row'>

      <TodoForm 
        todos={todos}
        setTodos={setTodos}  
        filter={filter}
        setFilter={setFilter}
        editedTodo={editedTodo}
        setEditedTodo={setEditedTodo}
      />

      <div className='h-auto w-1/2 border-l-2 border-white flex flex-col p-5 overflow-auto'>

        <h1 className='text-4xl font-bold pb-5'>Recent Todos</h1>
        <div className='flex flex-wrap gap-4'>
          {filterTodos.map((todo) => (
              <TodoCard
                todo={todo}
                key={todo.id}
                toggleStatus={toggleStatus}
                deleteTodo={deleteTodo} 
                setEditedTodo={setEditedTodo}
              />
          ))}
        </div>
        
      </div>

    </div>
  )
}

export default App
