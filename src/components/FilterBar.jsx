import React from 'react'

const FilterBar = ({ filter,setFilter }) => {

  const filterButtons =['all','pending','completed','today','overdue']
  return (
    <>
        <div className='flex gap-3 px-1 py-8'>
            {filterButtons.map(btn =>
              <button 
              key={btn}
              className={`px-5 py-2 ${filter === btn ? 'bg-blue-500' : 'bg-gray-500'} rounded text-lg font-medium`} 
              type='button' 
              onClick={()=>setFilter(btn)}>{btn.charAt(0).toUpperCase() + btn.slice(1)}</button>
            )}
        </div>
    </>
  )
}

export default FilterBar