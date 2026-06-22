import React,{ useState } from 'react'

const TodoForm = ({ todos,setTodos}) => {
    const [title, setTitle] = useState('')
    const [description,setDescription] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        setTodos([
        ...todos,
        {
            id:crypto.randomUUID(),
            title,
            description,
            completed:false
        }
        ])
        setTitle('')
        setDescription('')
    }
  return (
    <>
        <form onSubmit={handleSubmit} className='flex flex-col h-auto w-1/2 p-5'>
          <h1 className='text-4xl font-bold'>Add Todo</h1><br/>
          <input
            className='h-13 rounded text-lg border-2 px-2' 
            type="text" 
            placeholder='Enter Title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          /><br/>
          <textarea 
           className='h-20 rounded text-lg border-2 p-2'
            placeholder='Enter Description'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          /><br/>
          <button className='w-auto px-2 py-2 rounded bg-white text-black font-bold text-lg'>Add Todo</button>
      </form>
    </>
  )
}

export default TodoForm;