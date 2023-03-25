<script>
  export let params
  export let hidden
  import { createEventDispatcher } from 'svelte'
  import { TITLE } from './../../helper/constant'

  import edit from './../../assets/icons/edit.svg'
  import user from './../../assets/icons/user.svg'

  const dispatch = createEventDispatcher()

  const onEditClick = () => dispatch('edit', params.text)
</script>

<div class="flex flex-row justify-end mb-4">
  {#if !hidden}
    <button type="button" on:click={onEditClick} class="flex flex-row items-end w-12 p-1 min-w-max">
      <img class="w-6 h-6 m-1" src={edit} alt={TITLE} />
    </button>
  {/if}
  <p class="px-4 mt-3 mr-3 rounded text-brand md:text-sm">
    {params.text}
  </p>
  <img class="w-10 h-10 m-1 rounded-full ring-2 ring-gray-300" src={user} alt={TITLE} />
</div>
