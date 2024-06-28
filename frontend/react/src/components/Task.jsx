import React, { useState } from 'react'
import { Button } from './Button'
import { deleteTask } from '../api/deleteTask'
import { editTask } from '../api/editTask';

export const Task = ({ task, onRequestSuccess }) => {
  const [title, setTitle] = useState(task.title);
  const [enableEdit, setEnableEdit] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEditTask = async (id, {title , is_completed}) => {
    const data = {
      title: title ?? task.title,
      is_completed: is_completed ?? task.is_completed,
    }
    await editTask(id, data);
    onRequestSuccess();
    setEnableEdit(false);
  }

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    onRequestSuccess();
  }
  
  return (
    <div className={`w-[40rem] max-w-[40rem] min-h-16 flex ${task.is_completed ? 'bg-green-400 bg-opacity-30' : 'bg-zinc-700'} rounded-md text-zinc-50 p-4 justify-between items-center text-lg`}>
      {
        enableEdit ?
          <input  
            className='bg-zinc-800 rounded-md h-10 w-full focus-visible:outline-none text-zinc-50 px-4'
            value={title} 
            onChange={handleTitleChange}
          ></input>
          : 
          <span className='ml-4 break-words break-all'>{task.title}</span>
      }
      {
        enableEdit ?
          <Button type='save' onClick={async () => await handleEditTask(task._id, {title})}/>
        :
          <div className='flex gap-2'>
            {
              task.is_completed ? 
                <Button type='restart' onClick={async () => await handleEditTask(task._id, { is_completed: false })}/>
              :
                <Button type='complete' onClick={async () => await handleEditTask(task._id, { is_completed: true })}/>
            }
            <Button type='edit' onClick={() => setEnableEdit(true)}/>
            <Button type='delete' onClick={async () => await handleDeleteTask(task._id)}/>
          </div>
      }
    </div>
  )
}
