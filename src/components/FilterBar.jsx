import React from 'react'

const FilterBar = ({ filter,setFilter }) => {

  const filterButtons =['all','pending','completed','today','overdue']
  return (
    <>
        <div className='grid grid-cols-2 lg:flex gap-3 px-1 py-8'>
            {filterButtons.map(btn =>
              <button 
              key={btn}
              className={`px-5 py-2 ${filter === btn ? 'bg-[#6366f1]' : 'bg-[#1E293B]'} rounded-lg text-lg font-medium active:scale-110`} 
              type='button' 
              onClick={()=>setFilter(btn)}>{btn.charAt(0).toUpperCase() + btn.slice(1)}</button>
            )}
        </div>
    </>
  )
}

export default FilterBar