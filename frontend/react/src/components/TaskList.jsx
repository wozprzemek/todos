import React from 'react'
import { Task } from './Task'

export const TaskList = ({ tasks, onRequestSuccess }) => {
  return (
    <>
      <span className='text-2xl text-zinc-50 font-semibold mb-4'>Tasks</span>
      <div className={`w-[42rem] flex flex-col gap-5 items-center ${!tasks.length ? 'justify-center' : ''} min-h-72 bg-zinc-800 rounded-md p-6`}>
        { tasks.length ?
          tasks.map(task => {
            return (
              <Task task={task} key={task._id} onRequestSuccess={onRequestSuccess}/>
            )
          }) : 
          <span className='text-zinc-50'>Task list is empty. Add one!</span>
        }
      </div>
    </>
  )
}
