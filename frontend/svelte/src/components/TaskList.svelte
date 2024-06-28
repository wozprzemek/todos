<script>
    import Task from './Task.svelte';
  
    export let tasks = [];
    export const loading = false;
    export let onRequestSuccess;
  
</script>
  
<span class="text-2xl text-zinc-50 font-semibold mb-4">Tasks</span>
    <div class={`w-[42rem] flex flex-col gap-5 items-center ${!tasks.length ? 'justify-center' : ''} min-h-72 bg-zinc-800 rounded-md p-6`}>
    {#if tasks.length}
        {#each tasks as task (task._id)}
            <Task {task} onRequestSuccess={onRequestSuccess} />
        {/each}
    {:else}
        <span class="text-zinc-50">Task list is empty. Add one!</span>
    {/if}
</div>
  