import React from 'react'
import { tasks } from '../tasks'
import TaskCard from './TaskCard'

const TaskBoard = () => {

  const todo = tasks.filter((task)=> task.status === "Todo")
  const planning = tasks.filter((task)=> task.status === "Planning")
  const completed = tasks.filter((task)=> task.status === "Completed")
  return (
    <div className='flex justify-evenly'>
      <div className='mx-2'>
        {todo.map((task) => (
            <div className=''>
              <TaskCard task={task} />
            </div>
        ))}
      </div>

      <div className='mx-2'>
        {planning.map((task) => (
          <div className=''>
            <TaskCard task={task} />
          </div>
        ))}
      </div>

      <div className='mx-2'>
        {completed.map((task) => (
              <div className=''>
              <TaskCard task={task} />
              </div>
        ))}
      </div>
    </div>
  )
}

export default TaskBoard