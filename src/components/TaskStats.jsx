import React from 'react'

const TaskStats = ( { todos,todayDate } ) => {
    const totalTask = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const pendingTasks = todos.filter(todo => !todo.completed).length;
    const overdueTasks = todos.filter(todo => todo.duedate < todayDate && !todo.completed).length;

  return (
    <>
        <div className='grid grid-cols-2 lg:flex gap-5 pt-8'>
            {/* <p className='text-xl font-bold'>📋 Total : {totalTask}</p> */}
            {/* <p className='text-xl font-bold'>⏳ Pending : {pendingTasks}</p>
            <p className='text-xl font-bold'>✅ Completed : {completedTasks}</p>
            <p className='text-xl font-bold'>⚠️ Overdue : {overdueTasks}</p> */}
            <div className='h-20 w-32 bg-[#6366f1] rounded-xl flex flex-col p-2 '>
                <p className='text-xl font-bold'>📋 Total</p>
                <p className='text-xl font-bold px-2'>{totalTask}</p>
            </div>
            <div className='h-20 w-38 bg-[#ffc107] rounded-xl flex flex-col p-2 '>
                <p className='text-xl font-bold'>⏳ Pending</p>
                <p className='text-xl font-bold px-2'>{pendingTasks}</p>
            </div>
            <div className='h-20 w-42 bg-green-400 rounded-xl flex flex-col p-2 '>
                <p className='text-xl font-bold'>✅ Completed</p>
                <p className='text-xl font-bold px-2'>{completedTasks}</p>
            </div>
            <div className='h-20 w-40 bg-red-500 rounded-xl flex flex-col p-2 '>
                <p className='text-xl font-bold'>⚠️ Overdue</p>
                <p className='text-xl font-bold px-2'>{overdueTasks}</p>
            </div>
        </div>
    </>
  )
}

export default TaskStats