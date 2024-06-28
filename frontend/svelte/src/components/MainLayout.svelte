<script>
    import { onMount } from 'svelte';
    import Header from './Header.svelte';
    import AddTask from './AddTask.svelte';
    import TaskList from './TaskList.svelte';
    import { getAllTasks } from '../api/getAllTasks.js';
  
    let tasks = [];
    let loading = true;
  
    async function fetchTasks() {
      try {
        const data = await getAllTasks();
        tasks = data;
        loading = false;
      } catch (error) {
        loading = false;
      }
    }
  
    onMount(() => {
      fetchTasks();
    });
  
    function handleRequestSuccess() {
      fetchTasks();
    }
</script>
  
<div class="w-screen h-screen flex flex-col items-center bg-zinc-900">
    <Header />
    <AddTask onRequestSuccess={handleRequestSuccess} />
    <TaskList {tasks} {loading} onRequestSuccess={handleRequestSuccess} />
</div>
  