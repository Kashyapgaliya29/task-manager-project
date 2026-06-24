import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoCard from './components/TodoCard'
import FilterBar from './components/FilterBar'
import TaskStats from './components/TaskStats'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState(()=>{
      const savetodos = localStorage.getItem('todos')
      if(savetodos){
        return JSON.parse(savetodos)
      }
      return []
      // savetodos ? JSON.parse(savetodos) : []
  })

  const [filter, setFilter] = useState('all')
  const [editedTodo,setEditedTodo] = useState(null)

  const deleteTodo = (id)=>{
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const toggleStatus=(id)=>{
    setTodos(
      todos.map((todo)=>
        todo.id === id ? {...todo,completed:!todo.completed} : todo
      )
    )
  }

  let filterTodos;
  const todayDate = new Date().toISOString().split('T')[0]

  if(filter === 'all'){
    filterTodos = todos;
  }else if(filter === 'pending'){
    filterTodos = todos.filter(todo => !todo.completed)
  }else if(filter === 'completed'){
    filterTodos = todos.filter(todo => todo.completed)
  }else if(filter === 'today'){
    filterTodos = todos.filter(todo => todo.duedate == todayDate)
  }else if(filter === 'overdue'){
    filterTodos = todos.filter(todo => todo.duedate < todayDate)
  }

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])  
  
  return (
    <div className='h-screen bg-black text-white flex flex-col lg:flex-row'>

      <TodoForm 
        todos={todos}
        setTodos={setTodos}  
        editedTodo={editedTodo}
        setEditedTodo={setEditedTodo}
      />

      <div className='h-auto w-1/2 border-l-2 border-white flex flex-col p-5 overflow-auto scrollbar-none'>

        <h1 className='text-4xl font-bold'>Recent Todos</h1>

        <TaskStats
          todos={todos}
          todayDate={todayDate}
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        {/* <div className='flex flex-wrap gap-4'>
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
        </div> */}
        
        <TodoList
          filterTodos={filterTodos}
          toggleStatus={toggleStatus}
          deleteTodo={deleteTodo} 
          setEditedTodo={setEditedTodo}
        />
      </div>

    </div>
  )
}

export default App
