import React, { useEffect, useState } from 'react'

const TodoForm = ({ todos, setTodos, filter, setFilter, editedTodo, setEditedTodo }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [duedate, setDueDate] = useState('')
  const [error, setError] = useState('')

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editedTodo) {
      setTodos(
        todos.map((todo) => todo.id === editedTodo.id ? { ...todo, title, description, duedate } : todo)
      )
    }
    else {
      if (!title.trim() || !description.trim() || !duedate) {
        setError('All Feild Required')
        return
      }
      setTodos([
        ...todos,
        {
          id: crypto.randomUUID(),
          title,
          description,
          completed: false,
          duedate
        }
      ])
    }
    setTitle('')
    setDescription('')
    setDueDate('')
    setEditedTodo(null)
  }
  useEffect(() => {
    if (editedTodo) {
      setTitle(editedTodo.title)
      setDescription(editedTodo.description)
    }
  }, [editedTodo])

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col h-auto w-full lg:w-1/2 p-5'>
        <h1 className='text-4xl font-bold'>{editedTodo ? 'Editing Task' : 'Add Task'}</h1>
        <p className='text-sm text-zinc-400 font-normal leading-relaxed'>Create tasks, set deadlines, and stay organized.</p>
        <div className="h-1 w-20 bg-[#6366f1] rounded-full mt-2 shadow-sm shadow-indigo-500/50"></div><br />
        <input
          className='h-13 rounded-lg border-2 border-zinc-700 bg-zinc-900 px-3 text-white'
          type="text"
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <textarea
          className='h-20 rounded-lg border-2 border-zinc-700 bg-zinc-900 px-2 text-white py-2'
          placeholder='Enter Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br />
        <input
          className='h-13 rounded-lg border-2 border-zinc-700 bg-zinc-900 px-3 text-white'
          type='date'
          value={duedate}
          onChange={(e) => setDueDate(e.target.value)}
        /><br />
        <p className='text-red-500 font-medium px-2'>{error}</p><br />
        <button className='w-auto px-2 py-2 rounded bg-white text-black font-bold text-xl active:scale-101'>{editedTodo ? 'Update Taks' : ' + Add Task'}</button>

        <div className='w-full mt-6 p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col gap-3'>
          <div className='flex flex-wrap items-center gap-2'>
            <span className='flex items-center gap-1.5 px-3 py-1 bg-zinc-800/80 rounded-full text-xs font-semibold text-zinc-300 border border-zinc-700/50'>
              📅 {today}
            </span>

            <span className='flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 rounded-full text-xs font-semibold text-indigo-400 border border-indigo-500/20'>
              🔥 {todos.filter(todo => !todo.completed).length} Tasks Left
            </span>
          </div>
          <p className='text-sm text-zinc-400 font-medium pl-1 tracking-wide flex items-center gap-1.5'>
            <span>Keep going! You're doing great</span>
            <span className='animate-bounce duration-1000'>🚀</span>
          </p>
        </div>
        
      </form>
    </>
  )
}

export default TodoForm;