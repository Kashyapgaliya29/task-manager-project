import React from 'react'

const TaskStats = ( { todos,todayDate } ) => {
    const totalTask = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const pendingTasks = todos.filter(todo => !todo.completed).length;
    const overdueTasks = todos.filter(todo => todo.duedate < todayDate && !todo.completed).length;

  return (
    <>
        <div className='flex gap-6 pt-8'>
            <p className='text-xl font-bold'>📋 Total : {totalTask}</p>
            <p className='text-xl font-bold'>⏳ Pending : {pendingTasks}</p>
            <p className='text-xl font-bold'>✅ Completed : {completedTasks}</p>
            <p className='text-xl font-bold'>⚠️ Overdue : {overdueTasks}</p>
        </div>
    </>
  )
}

export default TaskStats