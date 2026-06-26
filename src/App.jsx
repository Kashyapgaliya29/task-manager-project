import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoCard from './components/TodoCard'
import FilterBar from './components/FilterBar'
import TaskStats from './components/TaskStats'
import TodoList from './components/TodoList'
import BottomBar from './components/BottomBar'
import CreteTask from './pages/CreteTask'
import Task from './pages/Task'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savetodos = localStorage.getItem('todos')
    if (savetodos) {
      return JSON.parse(savetodos)
    }
    return []
    // savetodos ? JSON.parse(savetodos) : []
  })
  const [filter, setFilter] = useState('all')
  const [editedTodo, setEditedTodo] = useState(null)

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const cheackScreenSize = () => {
    setIsDesktop(window.innerWidth >= 1024)
  }

  useEffect(() => {
    cheackScreenSize()
    window.addEventListener('resize', cheackScreenSize)
    return () => {
      window.removeEventListener('resize')
    }
  }, [])


  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  let filterTodos;
  const todayDate = new Date().toISOString().split('T')[0]

  if (filter === 'all') {
    filterTodos = todos;
  } else if (filter === 'pending') {
    filterTodos = todos.filter(todo => !todo.completed)
  } else if (filter === 'completed') {
    filterTodos = todos.filter(todo => todo.completed)
  } else if (filter === 'today') {
    filterTodos = todos.filter(todo => todo.duedate == todayDate)
  } else if (filter === 'overdue') {
    filterTodos = todos.filter(todo => todo.duedate < todayDate)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  if (isDesktop) {
    return (
        <div className='min-h-screen bg-[#141b26] p-6 scrollbar-none'>
          <div className='h-[92vh] rounded-3xl bg-[#1d2533] text-white flex flex-col lg:flex-row'>

          {/* <TodoForm 
          todos={todos}
          setTodos={setTodos}  
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
        /> */}

          <CreteTask
            todos={todos}
            setTodos={setTodos}
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
          />

          {/* <div className='h-auto w-full border-l-0 px-10 flex lg:w-1/2 lg:border-l-2 lg:border-white flex-col p-5 overflow-auto scrollbar-none'>

          <h1 className='text-4xl font-bold'>Recent Todos</h1>

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
        </div> */}

          <Task
            todos={todos}
            todayDate={todayDate}
            filter={filter}
            setFilter={setFilter}
            filterTodos={filterTodos}
            toggleStatus={toggleStatus}
            deleteTodo={deleteTodo}
            setEditedTodo={setEditedTodo}
          />
          </div>
        </div>  
    )
  } else {
    return (
      <div className='h-screen bg-black text-white flex flex-col lg:flex-row'>
        <Routes>
          <Route path='/' element={<CreteTask
            todos={todos}
            setTodos={setTodos}
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
          />} />

          <Route path='/tasks' element={<Task
            todos={todos}
            todayDate={todayDate}
            filter={filter}
            setFilter={setFilter}
            filterTodos={filterTodos}
            toggleStatus={toggleStatus}
            deleteTodo={deleteTodo}
            setEditedTodo={setEditedTodo}
          />} />
        </Routes>

        <BottomBar />

      </div>
    )
  }
}

export default App
