import React,{ useEffect, useState } from 'react'

const TodoForm = ({ todos,setTodos,filter,setFilter,editedTodo,setEditedTodo }) => {
    const [title, setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [duedate, setDueDate] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (editedTodo){
          setTodos(
            todos.map((todo)=> todo.id === editedTodo.id ? {...todo,title,description,duedate} : todo)
          )
        }
        else{
            if(!title.trim() || !description.trim() || !duedate){
              setError('All Feild Required')
              return
            } 
            setTodos([
            ...todos,
            {
              id:crypto.randomUUID(),
              title,
              description,
              completed:false,
              duedate
            }
            ])
        }
        setTitle('')
        setDescription('')
        setDueDate('')
        setEditedTodo(null)
      }
      useEffect(()=>{
        if(editedTodo){
          setTitle(editedTodo.title)
          setDescription(editedTodo.description) 
        }
      },[editedTodo])

  return (
    <>
        <form onSubmit={handleSubmit} className='flex flex-col h-auto w-1/2 p-5'>
          <h1 className='text-4xl font-bold'>{editedTodo ? 'Editing Todo' : 'Add Todo'}</h1><br/>
          <input
            className='h-13 rounded-lg border-2 border-zinc-700 bg-zinc-900 px-3 text-white' 
            type="text" 
            placeholder='Enter Title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          /><br/>
          <textarea 
            className='h-20 rounded-lg border-2 border-zinc-700 bg-zinc-900 px-2 text-white py-2'
            placeholder='Enter Description'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          /><br/>
          <input 
            className='h-13 rounded-lg border-2 border-zinc-700 bg-zinc-900 px-3 text-white' 
            type='date'
            value={duedate}
            onChange={(e)=>setDueDate(e.target.value)} 
          /><br/>
          <p className='text-red-500 font-medium px-2'>{error}</p><br/>
          <button className='w-auto px-2 py-2 rounded bg-white text-black font-bold text-xl active:scale-101'>{editedTodo ? 'Update Todo' : 'Add Todo'}</button>
      </form>
    </>
  )
}

export default TodoForm;