<script lang="ts">
  export let params
  import { onMount } from 'svelte'
  import { Modal } from 'flowbite'
  import type { ModalOptions } from 'flowbite'
  import { gtagTracking } from '../helper/utils'
  let modal = null

  onMount(() => {
    const $targetEl = document.getElementById('static-modal')
    const options: ModalOptions = {
      placement: 'top-center',
      backdrop: 'static',
      closable: true,
      onHide: () => {
        gtagTracking('modal-hide', 'modal')
      },
      onShow: () => {
        gtagTracking('modal-show', 'modal')
      },
    }
    modal = new Modal($targetEl, options)
    modal.show()
  })

  const sendFeedback = () => {
    gtagTracking('modal-send-feedback', 'modal')
    window.open(`https://nicelinks.site/post/63fdeb37fe46ca437e0aa780`)
  }

  const closeModal = () => {
    modal.hide()
  }
</script>

<div
  id="static-modal"
  tabindex="-1"
  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
>
  <div class="relative w-full h-full max-w-lg md:h-auto !mt-20">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">{params.title}</h3>
        <button
          type="button"
          on:click={closeModal}
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-6 space-y-6">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {@html params.body}
        </p>
      </div>
      <!-- Modal footer -->
      <div
        class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b"
      >
        <button
          type="button"
          on:click={sendFeedback}
          class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
          >留言反馈</button
        >
        <button
          type="button"
          on:click={closeModal}
          class="text-white bg-brand hover:bg-link font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >{params.buttonText}</button
        >
      </div>
    </div>
  </div>
</div>
