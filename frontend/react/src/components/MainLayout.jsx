import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'
import { getAllTasks } from '../api/getAllTasks'

export const MainLayout = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const data = await getAllTasks();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className='w-screen h-screen flex flex-col items-center bg-zinc-900'>
        <Header />
        <AddTask onRequestSuccess={fetchTasks} />
        <TaskList tasks={tasks} loading={loading} onRequestSuccess={fetchTasks}/>
    </div>
  )
}
