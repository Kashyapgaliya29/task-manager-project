import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListTodo } from 'lucide-react'
import { CirclePlus } from 'lucide-react'

const BottomBar = () => {
    return (
        <>
            <div className='lg:hidden h-18 w-full flex justify-around fixed bottom-0 bg-zinc-900 rounded-tr-2xl rounded-tl-2xl border-t border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] z-50 pb-2'>
                <NavLink
                    to='/tasks'
                    className={({ isActive }) => `
                    flex flex-col items-center justify-center w-20 h-full transition-all duration-200 active:opacity-60
                    ${isActive ? 'text-[#6366f1]' : 'text-zinc-500'}
                `}
                >
                    <ListTodo size={28} strokeWidth={2} />
                    <span className='text-[11px] font-medium mt-1'>Tasks</span>
                </NavLink>

                <NavLink
                    to='/'
                    className={({ isActive }) => `
                    flex flex-col items-center justify-center w-20 h-full transition-all duration-200 active:opacity-60
                    ${isActive ? 'text-[#6366f1]' : 'text-zinc-500'}
                `}
                >
                    <CirclePlus size={28} strokeWidth={2} />
                    <span className='text-[11px] font-medium mt-1'>Create</span>
                </NavLink>
            </div>
        </>
    )
}

export default BottomBar