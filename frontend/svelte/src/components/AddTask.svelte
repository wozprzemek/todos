<script>
    import { addTask } from '../api/addTask';
    import Button from './Button.svelte';
  
    export let onRequestSuccess;
  
    let title = '';
  
    const handleTitleChange = (event) => {
      title = event.target.value;
    };
  
    const handleAddTask = async (title) => {
      if (title.length) {
        await addTask({
          title,
          is_completed: false,
        });
        onRequestSuccess();
        title = '';
      }
    };
</script>
  
<div class="flex w-[30rem] h-16 justify-center items-center mb-16">
    <div class="flex">
        <input 
            type="text" 
            name="addTask" 
            id="addTask" 
            class="bg-zinc-700 rounded-l-md h-10 w-[27rem] focus-visible:outline-none text-zinc-50 px-4" 
            placeholder="Add Task" 
            bind:value={title} 
            on:input={handleTitleChange}
        />
        <Button 
            type="add" 
            onClick={async () => await handleAddTask(title)}
        />
    </div>
</div>
  