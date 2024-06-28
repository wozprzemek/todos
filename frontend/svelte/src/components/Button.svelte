<script>
    import Icon from '@iconify/svelte';
    
    export let type;
    export let onClick;
</script>

{#if type === 'add'}
<button class="w-12 text-zinc-900 bg-zinc-400 h-10 flex justify-center items-center rounded-r-md" on:click={onClick}>
    Add
</button>
{:else if type === 'edit'}
<button class="w-8 h-8 flex justify-center items-center" on:click={onClick}>
    <Icon icon="heroicons:pencil" class="w-6 text-slate-50" />
</button>
{:else if type === 'delete'}
<button class="w-8 h-8 flex justify-center items-center" on:click={onClick}>
    <Icon icon="heroicons:trash" class="w-6 text-red-500" />
</button>
{:else if type === 'save'}
<button class="w-24 text-zinc-50 bg-blue-500 h-10 flex justify-center items-center rounded-r-md" on:click={onClick}>
    Save
</button>
{:else if type === 'restart'}
<button class="w-8 text-zinc-900 h-8 flex justify-center items-center rounded-r-md" on:click={onClick}>
    <Icon icon="heroicons:arrow-path-solid" class="w-6 text-blue-300" />
</button>
{:else if type === 'complete'}
<button class="w-8 text-zinc-900 h-8 flex justify-center items-center rounded-r-md" on:click={onClick}>
    <Icon icon="heroicons:check-circle-solid" class="w-6 text-green-500" />
</button>
{/if}
  