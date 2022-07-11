import React, { useEffect, useState } from 'react'
import Taskbar from './Taskbar'
import { tasks } from '../tasks'

const TaskList = () => {

    const todo = tasks.filter((task)=> task.status === "Todo")
  const planning = tasks.filter((task)=> task.status === "Planning")
  const completed = tasks.filter((task)=> task.status === "Completed")

    return (
        <div className='flex-grow'>
            <div className=''>
                <div className='flex justify-start mx-2'>
                    <button className=''>btn</button>

                    <h3 className='mx-2 font-bold'>To Do</h3>
                </div>

                <div className=''>
                    {todo.map((task) => (
                        <div className=''>
                            <Taskbar task={task} />
                        </div>
                    ))}
                </div>
            </div>

            <div className=''>
                <div className='flex justify-start mx-2'>
                    <button className=''>btn</button>

                    <h3 className='mx-2 font-bold'>Planning</h3>
                </div>

                <div className=''>
                    {planning.map((task) => (
                        <div className=''>
                            <Taskbar task={task} />
                        </div>
                    ))}
                </div>
            </div>

            <div className=''>
                <div className='flex justify-start mx-2'>
                    <button className=''>btn</button>

                    <h3 className='mx-2 font-bold'>Completed</h3>
                </div>

                <div className=''>
                    {completed.map((task) => (
                        <div className=''>
                            <Taskbar task={task} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TaskList