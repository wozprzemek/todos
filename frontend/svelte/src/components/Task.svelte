<script>
// @ts-nocheck

    import { deleteTask } from '../api/deleteTask';
    import { editTask } from '../api/editTask';
    import Button from './Button.svelte';
  
    export let task;
    export let onRequestSuccess;
  
    let title = task.title;
    let enableEdit = false;
  
    const handleTitleChange = (event) => {
      title = event.target.value;
    };
  
    const handleEditTask = async (id, { title, is_completed }) => {
      const data = {
        title: title ?? task.title,
        is_completed: is_completed ?? task.is_completed,
      };
      await editTask(id, data);
      onRequestSuccess();
      enableEdit = false;
    };
  
    const handleDeleteTask = async (id) => {
      await deleteTask(id);
      onRequestSuccess();
    };
</script>
  
<div class={`w-[40rem] max-w-[40rem] min-h-16 flex ${task.is_completed ? 'bg-green-400 bg-opacity-30' : 'bg-zinc-700'} rounded-md text-zinc-50 p-4 justify-between items-center text-lg`}>
    {#if enableEdit}
        <input
        class="bg-zinc-800 rounded-md h-10 w-full focus-visible:outline-none text-zinc-50 px-4"
        bind:value={title}
        on:input={handleTitleChange}
        />
    {:else}
        <span class="ml-4 break-words break-all">{task.title}</span>
    {/if}
    {#if enableEdit}
        <Button type="save" onClick={async () => await handleEditTask(task._id, { title })} />
    {:else}
        <div class="flex gap-2">
        {#if task.is_completed}
            <Button type="restart" onClick={async () => await handleEditTask(task._id, { is_completed: false })} />
        {:else}
            <Button type="complete" onClick={async () => await handleEditTask(task._id, { is_completed: true })} />
        {/if}
        <Button type="edit" onClick={() => (enableEdit = true)} />
        <Button type="delete" onClick={async () => await handleDeleteTask(task._id)} />
        </div>
    {/if}
</div>
  