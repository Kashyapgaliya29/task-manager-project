import React from 'react'
import TodoCard from './TodoCard'

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
                <div className='flex flex-col items-center justify-center px-59 py-52'>
                <p className='text-2xl font-bold font-stretch-50% text-red-500'>No Todos Found</p>
                <p>Create You First Todo</p>
                </div>
            }
        </div>
    </>
  )
}

export default TodoList