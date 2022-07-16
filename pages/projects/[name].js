import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import TaskBoard from '../../components/Tasks/TaskBoard'
import TaskList from '../../components/Tasks/TaskList'

const Project = () => {

  const [listView, setListView] = useState(false)
  return (
    <div className='flex'>
      <div className=''>
        <Sidebar />
      </div>

      <div className='flex-grow'>
        <div className='my-4'>
          <button className='rounded border border-purple-400 px-2 py-1 mr-2' onClick={e=>setListView(false)}>Board</button>
          <button className='rounded border border-purple-400 px-2 py-1 mr-2' onClick={e=>setListView(true)}>List</button>
        </div>

        {listView ? <TaskList /> : <TaskBoard />}
      </div>
    </div>
  )
}

export default Project