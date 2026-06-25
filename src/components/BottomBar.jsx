import React from 'react'
import taskImage from '../assets/img-3.png'
import addImage from '../assets/add-1.png'
import { Link } from 'react-router-dom'

const BottomBar = () => {
  return (
    <>
        <div className='lg:hidden h-16 w-full flex justify-around fixed bottom-0 bg-zinc-900 rounded-tr-2xl rounded-tl-2xl'>
            <Link to='/tasks' className='flex flex-col items-center justify-center p-2 pb-0'>
                <img 
                    src={taskImage}
                    className='h-10 w-11'
                />
                <p className='pt-0'>Task</p>
            </Link>
            <Link to='/' className='flex flex-col items-center justify-center p-2 pb-0'>
                <img 
                    src={addImage}
                    className='h-9 w-9' 
                />
                <p className='pt-0'>Create</p>
            </Link>
        </div>
    </>
  )
}

export default BottomBar