import React from 'react'

const FilterBar = ({ filter,setFilter }) => {

  const filterButtons =['all','pending','completed','today','overdue']
  return (
    <>
        <div className='grid grid-cols-2 lg:flex gap-3 px-1 py-8'>
            {filterButtons.map(btn =>
              <button 
              key={btn}
              className={`px-5 py-1.5 ${filter === btn ? 'bg-[#6366f1]' : 'bg-[#1E293B]'} rounded-full text-[15px] font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 active:bg-indigo-600`} 
              type='button' 
              onClick={()=>setFilter(btn)}>{btn.charAt(0).toUpperCase() + btn.slice(1)}</button>
            )}
        </div>
    </>
  )
}

export default FilterBar