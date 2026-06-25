import React from 'react'
import TaskStats from '../components/TaskStats'
import FilterBar from '../components/FilterBar'
import TodoList from '../components/TodoList'

const Task = ({todos,todayDate,filter,setFilter,filterTodos,toggleStatus,deleteTodo,setEditedTodo}) => {
  return (
    <>
      <div className='h-auto w-full border-l-0 px-10 flex lg:w-1/2 lg:border-l-2 lg:border-white flex-col p-5 overflow-auto scrollbar-none'> 
            <h1 className='text-4xl font-bold'>Recent Tasks</h1>
    
            <TaskStats
              todos={todos}
              todayDate={todayDate}
            />
    
            <FilterBar
              filter={filter}
              setFilter={setFilter}
            />
            
            <TodoList
              filterTodos={filterTodos}
              toggleStatus={toggleStatus}
              deleteTodo={deleteTodo} 
              setEditedTodo={setEditedTodo}
            />
      </div>
    </>
  )
}

export default Task