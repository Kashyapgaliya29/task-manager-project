import React from 'react'

const TodoCard = ({ todo,toggleStatus,deleteTodo }) => {
  return (
    <>
        <div className={` ${todo.completed ? 'opacity-40' : ''} h-70 w-55 bg-white text-black rounded-xl p-4 font-medium flex flex-col justify-between`}>

            <h1 className={` ${todo.completed ? 'line-through text-gray-500' : ''} text-lg font-bold`}>{todo.title}</h1>
            <p className='font-stretch-50% text-gray-600 font-medium'>{todo.description}</p>
            <div className='flex flex-col gap-2'>
                <button 
                  className={`px-2 py-1 ${todo.completed ? 'bg-green-500':'bg-red-500'} text-white rounded w-full`}
                  onClick={()=>toggleStatus(todo.id)}>
                  {todo.completed ? 'Completed' : 'Pending'}
                </button>

                <button 
                  className='px-2 py-1 bg-blue-500 text-white rounded w-full'>Edit
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