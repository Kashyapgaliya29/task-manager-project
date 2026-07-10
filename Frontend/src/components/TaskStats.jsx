import React from 'react'
import {
  ClipboardList,
  Clock3,
  CircleCheckBig,
  TriangleAlert,
} from "lucide-react";

const TaskStats = ( { todos,todayDate } ) => {
    const totalTask = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const pendingTasks = todos.filter(todo => !todo.completed).length;
    const overdueTasks = todos.filter(todo => todo.duedate < todayDate && !todo.completed).length;

  return (
    <>
        <div className='grid grid-cols-2 lg:flex gap-5 pt-5 w-full'>
            <div className='h-20 min-w-30 bg-indigo-500/10 text-indigo-400 rounded-xl flex flex-col p-2'>
                <p className='text-base lg:text-xl font-bold flex items-center gap-2'><ClipboardList size={20} /> Total</p>
                <p className='text-2xl font-bold px-1 py-1 '>{totalTask}</p>
            </div>
            <div className='h-20 min-w-30 bg-amber-500/10 text-amber-400 rounded-xl flex flex-col p-2 '>
                <p className='text-base lg:text-xl font-bold flex items-center gap-2'><Clock3 size={20}/> Pending</p>
                <p className='text-2xl font-bold px-1 py-1'>{pendingTasks}</p>
            </div>
            <div className='h-20 min-w-30 bg-emerald-500/10 text-emerald-400 rounded-xl flex flex-col p-2 '>
                <p className='text-base lg:text-xl font-bold flex items-center gap-2'><CircleCheckBig size={20}/> Completed</p>
                <p className='text-2xl font-bold px-1 py-1'>{completedTasks}</p>
            </div>
            <div className='h-20 min-w-30 bg-rose-500/10 text-rose-400 rounded-xl flex flex-col p-2 '>
                <p className='text-base lg:text-xl font-bold flex items-center gap-2'><TriangleAlert size={20}/> Overdue</p>
                <p className='text-2xl font-bold px-1 py-1'>{overdueTasks}</p>
            </div>
        </div>
    </>
  )
}

export default TaskStats