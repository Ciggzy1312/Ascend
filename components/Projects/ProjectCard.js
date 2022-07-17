import React from 'react'
import { BiEdit } from "react-icons/bi"
import { MdOutlineDelete } from "react-icons/md"

const ProjectCard = ({project}) => {
    return (
        <div>
            <div className='bg-gray-100 py-4'>

                <div className='mx-6 bg-white rounded-lg w-1/3 flex'>

                    <div className='h-auto rounded-l-lg bg-emerald-400 mr-4 w-3'></div>

                    <div className='flex-grow'>
                        <h2 className='font-semibold text-slate-800 my-1'>{project.title}</h2>

                        <div className='flex justify-between w-5/6'>
                            <span className='text-gray-500 text-base font-semibold'>Progress</span>
                            <div className='self-start text-sm font-semibold text-gray-600'>34 / 41 completed</div>
                        </div>

                        <div className='border-2 border-sky-300 w-5/6 rounded h-2 self-center'>
                            <div className='bg-sky-300 w-4/6 rounded h-1'></div>
                        </div>

                        <div className=''>
                            <p className='font-medium text-gray-400 text-sm'>{project.desc}</p>
                        </div>

                        <div className='flex self-center my-2'>
                            <button className='text-lg text-gray-400 hover:text-green-400'><BiEdit /></button>
                            <button className='mx-2 text-lg text-gray-400 hover:text-red-400'><MdOutlineDelete /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard