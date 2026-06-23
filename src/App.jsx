import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoCard from './components/TodoCard'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learning React',
      description:'This is React Learning and it is very good framwork',
      completed: false
    },
    {
      id: 2,
      title: 'Learning Nodejs',
      description:'This is React Nodejs and it is very good for learning',
      completed: true
    },
    {
      id: 3,
      title: 'Learning MonongoDB',
      description:'This is React Mongo it is very good for begginer',
      completed: false
    }
  ])
  const [filter, setFilter] = useState('all')

  // const [title, setTitle] = useState('')
  // const handleSubmit = (e) =>{
  //   e.preventDefault()

  //   setTodos([
  //     ...todos,
  //     {
  //       id:crypto.randomUUID(),
  //       title,
  //       completed:false
  //     }
  //   ])
  //   setTitle('')
  // }

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


  return (
    <div className='h-screen bg-black text-white flex flex-col lg:flex-row'>

      {/* <form onSubmit={handleSubmit} className='flex flex-col h-auto w-1/2 p-5'>
          <h1 className='text-4xl font-bold'>Add Todo</h1><br/>
          <input
            className='h-13 rounded text-lg border-2 px-2' 
            type="text" 
            placeholder='Enter Title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          /><br/>
          <button className='w-auto px-2 py-2 rounded bg-white text-black font-bold text-lg'>Add Todo</button>
      </form> */}
      <TodoForm 
        todos={todos}
        setTodos={setTodos}  
        filter={filter}
        setFilter={setFilter}
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
              />
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
