import React from 'react'

const TodoCard = ({ todo,toggleStatus,deleteTodo,setEditedTodo }) => {
  return (
    <>
        <div className={` ${todo.completed ? 'opacity-40' : ''} max-h-56 p-5 lg:min-h-76 w-72 bg-zinc-900 border border-zinc-700 text-white rounded-xl font-medium flex flex-col justify-between hover:scale-105 transation-all duration-300`}>

            <h1 className={`${todo.completed ? 'line-through text-gray-500' : ''} text-2xl font-bold`}>{todo.title}</h1>
            <p className='font-stretch-50% text-lg text-gray-600 font-medium wrap-break-word pt-3'>{todo.description}</p>
            <p className='pt-3'>📅 Due : {new Date(todo.duedate).toLocaleDateString('en-GB')}</p>
            <div className='flex pt-5 lg:flex-col gap-2'>
                <button 
                  className={`px-2 py-1 ${todo.completed ? 'bg-green-500':'bg-yellow-500'} text-white rounded w-full`}
                  onClick={()=>toggleStatus(todo.id)}>
                  {todo.completed ? 'Completed' : 'Pending'}
                </button>

                <button 
                    className='px-2 py-1 bg-blue-500 text-white rounded w-full'
                    onClick={()=>setEditedTodo(todo)}
                    >Edit
                </button>

                <button 
                  className='px-2 py-1 bg-red-500 text-white rounded w-full' onClick={()=>deleteTodo(todo.id)}>Delete
                </button>
            </div>

        </div>
    </>
  )
}

export default TodoCard