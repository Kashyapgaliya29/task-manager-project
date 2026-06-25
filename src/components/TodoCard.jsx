import React from 'react'
import YesImage from '../assets/yes.png'
import EditImage from '../assets/edit.png'
import DeleteImage from '../assets/remove.png'


const TodoCard = ({ todo,toggleStatus,deleteTodo,setEditedTodo }) => {
  return (
    <>
        <div className={` ${todo.completed ? 'opacity-40' : ''} max-h-55 p-5 lg:min-h-55 w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl font-medium flex flex-col justify-between hover:scale-105 transation-all duration-300`}>

            <h1 className={`${todo.completed ? 'line-through text-gray-500' : ''} text-2xl font-bold`}>{todo.title}</h1>
            <p className='font-stretch-50% text-lg text-gray-600 font-medium wrap-break-word pt-3'>{todo.description}</p>
            <p className='pt-3'>📅 Due : {new Date(todo.duedate).toLocaleDateString('en-GB')}</p>
            <div className='flex pt-5 lg:flex-row gap-2'>
                <button 
                  className={`px-4 py-1.5 ${todo.completed ? 'bg-green-500':'bg-yellow-500'} text-white rounded `}
                  onClick={()=>toggleStatus(todo.id)}>
                  <span className='flex items-center justify-center gap-2'><img src={YesImage} alt="" className='h-5 w-5'/>{todo.completed ? 'Completed' : 'Pending'}</span>
                </button>

                <button 
                    className='px-4 py-1.5 bg-blue-500 text-white rounded'
                    onClick={()=>setEditedTodo(todo)}
                    ><span className='flex items-center justify-center gap-2'><img src={EditImage} alt="" className='h-5 w-5'/>Edit</span>
                </button>

                <button 
                  className='px-4 py-1.5 bg-red-500 text-white rounded' onClick={()=>deleteTodo(todo.id)}><span className='flex items-center justify-center gap-2'><img src={DeleteImage} alt="" className='h-5 w-5'/>Delete</span>
                </button>
            </div>

        </div>
    </>
  )
}

export default TodoCard