<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'
  import { sleep } from './../helper/utils'

  const dispatch = createEventDispatcher()

  onMount(() => {
    autoHideAlert()
  })

  const hideAlert = () => {
    dispatch('close', 0)
  }

  const autoHideAlert = async () => {
    await sleep(2000)
    hideAlert()
  }

  const onCloseClick = () => {
    hideAlert()
  }
</script>

<div
  class="absolute flex items-center p-4 mb-4 text-blue-800 rounded-lg w-max top-8 right-1/2 translate-x-2/4 bg-blue-50 "
  role="alert"
  id="alert-info"
  transition:fade={{ delay: 100, duration: 300 }}
>
  <svg
    aria-hidden="true"
    class="flex-shrink-0 w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill-rule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clip-rule="evenodd"
    /></svg
  >
  <span class="sr-only">Info</span>
  <div class="ml-3 text-base font-medium">
    <slot />
  </div>
  <button
    type="button"
    data-dismiss-target="#alert-info"
    class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
    aria-label="Close"
    on:click={onCloseClick}
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
</div>
