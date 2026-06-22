import React, { useState } from 'react'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learning React',
      completed: false
    },
    {
      id: 2,
      title: 'Learning Nodejs',
      completed: true
    },
    {
      id: 3,
      title: 'Learning MonongoDB',
      completed: false
    }
  ])
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

  const deleteTodo = (idx)=>{
    const copyTodo = [...todos]
    copyTodo.splice(idx,1)
    setTodos(copyTodo)
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
      />
      <div className='h-auto w-1/2 border-l-2 border-white flex flex-col p-5 overflow-auto'>
        <h1 className='text-4xl font-bold pb-5'>Recent Todos</h1>
        <div className='flex flex-wrap gap-4'>
          {todos.map((elem, idx) => (
          <div key={idx} className='h-45 w-45  bg-white text-black rounded-xl p-4 font-medium flex flex-col justify-between'>
            <h1>{elem.title}</h1>
            <h2>{elem.completed ? 'Completed' : 'Pending'}</h2>
            <button className='px-2 py-x bg-red-500 text-white rounded w-full' onClick={()=>deleteTodo(idx)}>Delete</button>
          </div>
        ))}
        </div>
      </div>

    </div>
  )
}

export default App
