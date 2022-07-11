import React from 'react'
import { BiEdit } from "react-icons/bi"
import { MdOutlineDelete } from "react-icons/md"

const TaskCard = ({ task }) => {

    const getPriorityColor = (priority) => {
        if (priority === 'Low') {
            return "bg-green-100 text-green-400";
        }
        else if (priority === 'Medium') {
            return "bg-amber-100 text-amber-400";
        }
        else {
            return "bg-red-100 text-red-500";
        }
    }

    return (
        <div className='border rounded border-gray-200 p-2 my-3'>
            <div className='flex justify-between'>
                <div className='font-medium text-zinc-800'>{task.name}</div>

                <div className=''>
                    <button className={`${getPriorityColor(task.priority)} font-semibold text-sm text-white px-1.5 py-0.5 rounded`}>{task.priority}</button>
                </div>
            </div>

            <div className='self-center text-left'>

                <div className='flex self-center'>
                    <button className='mr-2 text-lg text-gray-400 hover:text-green-400
                '><BiEdit /></button>
                    <button className='mx-2 text-lg text-gray-400 hover:text-red-400'><MdOutlineDelete /></button>
                </div>


                <div className='flex justify-between'>

                    <div className=''>
                        <button className='bg-gray-300 hover:bg-gray-400 font-semibold text-sm text-white px-1.5 py-0.5 rounded flex justify-between items-center'>
                            <div className='rounded-full bg-blue-500 w-1.5 h-1.5'></div>
                            <span className='mx-1'>{task.label}</span>
                        </button>
                    </div>

                    <div className='font-semibold text-sm text-gray-500'>{task.due}</div>
                </div>


            </div>
        </div>
    )
}

export default TaskCard