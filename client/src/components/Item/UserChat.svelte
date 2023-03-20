<script>
  export let params
  import { createEventDispatcher } from 'svelte'
  import { TITLE } from './../../helper/constant'

  import edit from './../../assets/icons/edit.svg'
  import user from './../../assets/icons/user.svg'

  const dispatch = createEventDispatcher()

  const onEditClick = () => dispatch('edit', params.text)
</script>

<div class="flex flex-row justify-end mb-4">
  <button type="button" class="flex flex-row items-end w-12 p-1 min-w-max " on:click={onEditClick}>
    <img class="w-6 h-6 m-1" src={edit} alt={TITLE} />
  </button>
  <div class="mt-4 mr-3 text-brand">{params.text}</div>
  <img class="w-10 h-10 m-1 rounded-full ring-2 ring-gray-300" src={user} alt={TITLE} />
</div>
