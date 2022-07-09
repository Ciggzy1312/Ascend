import React, { useEffect, useState } from 'react'
import Taskbar from './Taskbar'
import { tasks } from './tasks'

const TaskList = () => {

    return (
        <div className='flex-grow'>
            <div className=''>
                <div className='flex justify-start mx-2'>
                    <button className=''>btn</button>

                    <h3 className='mx-2 font-bold'>To Do</h3>
                </div>

                <div className=''>
                    {tasks.map((task) => (
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