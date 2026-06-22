import React, { useState } from 'react'
import TodoForm from './components/TodoForm'

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

  const toggleStatus=(id)=>{
    // const newCopyTodo = [...todos]
    // newCopyTodo.map((todo)=>{
    //   if(todo.id === id) {
    //     todo.completed = !todo.completed
    //   }
    // })
    // setTodos(newCopyTodo)

    setTodos(
      todos.map((todo)=>
        todo.id === id ? {...todo,completed:!todo.completed} : todo
      )
    )
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
          <div key={idx} className={` ${elem.completed ? 'opacity-40' : ''} h-70 w-55  bg-white text-black rounded-xl p-4 font-medium flex flex-col justify-between`}>

            <h1 className='text-lg font-bold'>{elem.title}</h1>
            <p className='font-stretch-50% text-gray-600'>{elem.description}</p>
            <div className='flex flex-col gap-2'>
                <button 
                  className={`px-2 py-1 ${elem.completed ? 'bg-green-500':'bg-red-500'} text-white rounded w-full`}
                  onClick={()=>toggleStatus(elem.id)}>
                  {elem.completed ? 'Completed' : 'Pending'}
                </button>

                <button 
                  className='px-2 py-1 bg-blue-500 text-white rounded w-full'>Edit
                </button>

                <button 
                  className='px-2 py-1 bg-red-500 text-white rounded w-full' onClick={()=>deleteTodo(idx)}>Delete
                </button>
            </div>

          </div>
        ))}
        </div>
      </div>

    </div>
  )
}

export default App
