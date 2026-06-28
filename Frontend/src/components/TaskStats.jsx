import React from 'react'

const TaskStats = ( { todos,todayDate } ) => {
    const totalTask = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const pendingTasks = todos.filter(todo => !todo.completed).length;
    const overdueTasks = todos.filter(todo => todo.duedate < todayDate && !todo.completed).length;

  return (
    <>
        <div className='grid grid-cols-2 lg:flex gap-5 pt-5 w-full'>
            {/* <p className='text-xl font-bold'>📋 Total : {totalTask}</p> */}
            {/* <p className='text-xl font-bold'>⏳ Pending : {pendingTasks}</p>
            <p className='text-xl font-bold'>✅ Completed : {completedTasks}</p>
            <p className='text-xl font-bold'>⚠️ Overdue : {overdueTasks}</p> */}
            <div className='h-20 min-w-30 bg-indigo-500/10 text-indigo-400 rounded-xl flex flex-col justify-between p-3 '>
                <p className='text-base lg:text-xl font-bold'>📋 Total</p>
                <p className='text-xl font-bold px-2 py-1'>{totalTask}</p>
            </div>
            <div className='h-20 min-w-30 bg-amber-500/10 text-amber-400 rounded-xl flex flex-col p-2 '>
                <p className='text-base lg:text-xl font-bold'>⏳ Pending</p>
                <p className='text-xl font-bold px-2 py-1'>{pendingTasks}</p>
            </div>
            <div className='h-20 min-w-30 bg-emerald-500/10 text-emerald-400 rounded-xl flex flex-col p-2 '>
                <p className='text-base lg:text-xl font-bold'>✅ Completed</p>
                <p className='text-xl font-bold px-2 py-1'>{completedTasks}</p>
            </div>
            <div className='h-20 min-w-30 bg-rose-500/10 text-rose-400 rounded-xl flex flex-col p-2 '>
                <p className='text-base lg:text-xl font-bold'>⚠️ Overdue</p>
                <p className='text-xl font-bold px-2 py-1'>{overdueTasks}</p>
            </div>
        </div>
    </>
  )
}

export default TaskStats