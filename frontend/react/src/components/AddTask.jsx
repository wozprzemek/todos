import React, { useState } from "react";
import { addTask } from "../api/addTask";
import { Button } from "./Button";

export const AddTask = ({ onRequestSuccess }) => {
  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddTask = async (title) => {
    if (title.length) {
      await addTask({
        title,
        is_completed: false,
      });
      onRequestSuccess();
      setTitle('');
    }
  };
  
  return (
    <div className="flex w-[30rem] h-16 justify-center items-center mb-16">
        <div className="flex">
            <input 
              type="text" 
              name="addTask" 
              id="addTask" 
              className="bg-zinc-700 rounded-l-md h-10 w-[27rem] focus-visible:outline-none text-zinc-50 px-4" 
              placeholder="Add Task" 
              value={title} 
              onChange={handleTitleChange}
            />
            <Button 
              type="add" 
              onClick={async () => await handleAddTask(title)}
            />
        </div>
    </div>
  )
}
