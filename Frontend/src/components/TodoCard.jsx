import React from 'react'
import YesImage from '../assets/yes.png'
import EditImage from '../assets/edit.png'
import DeleteImage from '../assets/remove.png'
import {useNavigate} from 'react-router-dom'
import {Pencil} from 'lucide-react'
import {Trash2} from 'lucide-react'
import {CircleCheckBig} from 'lucide-react'



const TodoCard = ({ todo,toggleStatus,deleteTodo,setEditedTodo }) => {
  const navigate = useNavigate()

  const handleEdit=()=>{
    setEditedTodo(todo)
    navigate('/')
  }
  return (
    <>
        <div className={` ${todo.completed ? 'opacity-40' : ''} max-h-55 p-3.5 lg:min-h-55 w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl font-medium flex flex-col justify-between hover:scale-105 transation-all duration-300`}>

            <h1 className={`${todo.completed ? 'line-through text-zinc-600' : ''} text-2xl font-bold tracking-tight`}>{todo.title}</h1>
            <p className='font-stretch-50% text-lg text-gray-600 font-medium wrap-break-word pt-3'>{todo.description}</p>
            <p className='text-[15px] text-zinc-300 font-medium wrap-break-words pt-2.5 leading-relaxed'>📅 Due : {new Date(todo.duedate).toLocaleDateString('en-GB')}</p>
            <div className='flex pt-5 lg:flex-row gap-2'>
                <button 
                  className={`px-5 py-2 text-[13px] font-semibold rounded-2xl active:scale-95 ${todo.completed ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400':'bg-amber-500/10 border border-amber-500/20 text-amber-400'} text-white rounded `}
                  onClick={()=>toggleStatus(todo.id)}>
                  {/* <span className='flex items-center justify-center gap-2'><img src={YesImage} alt="" className='h-5 w-5 object-contain opacity-80'/>{todo.completed ? 'Completed' : 'Pending'}</span> */}
                  <span className='flex items-center justify-center gap-2'><CircleCheckBig size={17} />{todo.completed ? 'Completed' : 'Pending'}</span>
                </button>

                <button 
                    className='px-5 py-2 text-[13px] font-semibold rounded-2xl active:scale-95 bg-sky-500/10 border border-sky-500/20 text-sky-400'
                    onClick={handleEdit}
                    // ><span className='flex items-center justify-center gap-2'><img src={EditImage} alt="" className='h-5 w-5'/>Edit</span>
                    ><span className='flex items-center justify-center gap-2'><Pencil size={17} />Edit</span>
                </button>

                <button 
                  className='px-5 py-2 text-[13px] font-semibold rounded-2xl active:scale-95 bg-rose-500/10 border border-rose-500/20 text-rose-400' onClick={()=>deleteTodo(todo.id)}>
                    {/* <span className='flex items-center justify-center gap-2'><img src={DeleteImage} alt="" className='h-5 w-5'/>Delete</span> */}
                    <span className='flex items-center justify-center gap-2'><Trash2 size={18} />Delete</span>
                </button>
            </div>

        </div>
    </>
  )
}

export default TodoCard