import React from 'react'
import TodoCard from './TodoCard'
import { Link } from 'react-router-dom'

const TodoList = ( { filterTodos,toggleStatus,deleteTodo,setEditedTodo } ) => {
  return (
    <>
        <div className='flex flex-wrap gap-4'>
            {filterTodos.length > 0
                ? filterTodos.map((todo) => (
                    <TodoCard
                    todo={todo}
                    key={todo.id}
                    toggleStatus={toggleStatus}
                    deleteTodo={deleteTodo} 
                    setEditedTodo={setEditedTodo}
                    />
            )) :
                <div className='flex flex-col items-center justify-center mx-auto my-40'>
                    <p className='text-3xl font-bold text-zinc-200'>All <span className='italic text-red-500'>Caught</span> Up!</p>
                    <p className='text-sm text-zinc-500 mt-1'>Got something new on your mind? Add it below.</p>
                    <Link to= '/'  className='lg:hidden px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold rounded-xl mt-5'>Add Task</Link>
                </div>
            }
        </div>
    </>
  )
}

export default TodoList