import React from 'react'
import TaskStats from '../components/TaskStats'
import FilterBar from '../components/FilterBar'
import TodoList from '../components/TodoList'

const Task = ({todos,todayDate,filter,setFilter,filterTodos,toggleStatus,deleteTodo,setEditedTodo}) => {
  return (
    <>
      <div className='h-auto w-full border-l-0 px-10 flex pb-24 lg:w-1/2 lg:border-l-2 lg:border-white flex-col p-5 overflow-auto scrollbar-none'> 
            <h1 className='text-4xl font-bold'>Recent Tasks</h1>
            <p className='text-sm text-zinc-400 font-normal leading-relaxed'>Track and manage your upcoming work.</p>
            <div className="h-1 w-20 bg-[#6366f1] rounded-full mt-2 shadow-sm shadow-indigo-500/50"></div>

            { filterTodos.length > 0 ? (
              <>
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
            </>
            ): (
              <TodoList
              filterTodos={filterTodos}
              toggleStatus={toggleStatus}
              deleteTodo={deleteTodo} 
              setEditedTodo={setEditedTodo}
            />
            )}
            {/* <TaskStats
              todos={todos}
              todayDate={todayDate}
            />
    
            <FilterBar
              filter={filter}
              setFilter={setFilter}
            /> */}
            
            {/* <TodoList
              filterTodos={filterTodos}
              toggleStatus={toggleStatus}
              deleteTodo={deleteTodo} 
              setEditedTodo={setEditedTodo}
            /> */}
      </div>
    </>
  )
}

export default Task