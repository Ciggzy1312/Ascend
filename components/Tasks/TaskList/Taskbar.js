import React from 'react'
import { BiEdit } from "react-icons/bi"
import { MdOutlineDelete } from "react-icons/md"

const Taskbar = ({task}) => {

  const getPriorityColor = (priority)=>{
    if(priority==='Low'){
      return "bg-green-100 text-green-400";
    }
    else if(priority==='Medium'){
      return "bg-amber-100 text-amber-400";
    }
    else{
      return "bg-red-100 text-red-500";
    }
  }

  return (
    <div className='flex justify-between mx-6 my-1 py-2 self-center border rounded border-gray-100 hover:bg-gray-50'>
        <div className='flex justify-between w-1/2'>
            <div className='font-medium text-base mx-2 text-zinc-800'>{task.name}</div>

        </div>

        <div className='grid w-1/2 grid-cols-4 self-center text-left'>

            <div className='flex self-center'>
                <button className='mx-2 text-lg text-gray-400 hover:text-green-400
                '><BiEdit /></button>
                <button className='mx-2 text-lg text-gray-400 hover:text-red-400'><MdOutlineDelete /></button>
            </div>

          <div className=''>
            <button className={`${getPriorityColor(task.priority)} font-semibold text-sm text-white px-1.5 py-0.5 rounded`}>{task.priority}</button>
          </div>

          <div className='font-semibold text-sm text-gray-500'>{task.due}</div>

          <div className=''>
            <button className='bg-gray-300 hover:bg-gray-400 font-semibold text-sm text-white px-1.5 py-0.5 rounded flex justify-between items-center'>
              <div className='rounded-full bg-blue-500 w-1.5 h-1.5'></div>
              <span className='mx-1'>{task.label}</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Taskbar