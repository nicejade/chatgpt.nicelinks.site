<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { push } from 'svelte-spa-router'
  import { Modal } from 'flowbite'
  import type { ModalOptions } from 'flowbite'
  import { gtagTracking } from '../../helper/utils'
  import { FEEDBACK_PATH } from '../../helper/constant'

  let modal = null
  const MODAL_KEY = 'sponsor-modal'

  onMount(() => {
    const $targetEl = document.getElementById(MODAL_KEY)
    const options: ModalOptions = {
      placement: 'top-center',
      backdrop: 'static',
      closable: true,
      onHide: () => {
        gtagTracking(`${MODAL_KEY}-hide`, MODAL_KEY)
      },
      onShow: () => {
        gtagTracking(`${MODAL_KEY}-show`, MODAL_KEY)
      },
    }
    modal = new Modal($targetEl, options)
    modal.show()
  })

  onDestroy(() => {
    modal = null
  })

  const sendFeedback = () => {
    gtagTracking(`${MODAL_KEY}-feedback`, MODAL_KEY)
    window.open(FEEDBACK_PATH)
  }

  const assembleModalBody = () => {
    return `<a href="/"><strong>素问智聊斋</strong></a>：旨在提供便捷的 <a href="https://nicelinks.site/tags/ChatGPT">ChatGPT</a> 使用体验；为了项目能够持续健康运行，需要相应的资金支持；如果这个项目对您有所帮助，诚挚地邀请您考虑<strong>赞助</strong>。您的慷慨相助将直接用于项目开发和维护，保证您始终享受到最好的服务和使用体验。<br/><br/><strong>感谢您的支持和信任。</strong>`
  }

  const closeModal = () => {
    modal.hide()
  }

  const handleConfirm = () => {
    modal.hide()
    push('/sponsor')
    gtagTracking(`${MODAL_KEY}-sponsor`, MODAL_KEY)
  }
</script>

<div
  id="sponsor-modal"
  tabindex="-1"
  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
>
  <div class="relative w-full h-full max-w-lg md:h-auto !mt-20">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-5 border-b rounded-t">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">亲爱的用户</h3>
        <button
          type="button"
          on:click={closeModal}
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
        <p class="text-base leading-relaxed text-gray-500">
          {@html assembleModalBody()}
        </p>
      </div>
      <!-- Modal footer -->
      <div
        class="flex items-center justify-evenly p-6 space-x-2 border-t border-gray-200 rounded-b"
      >
        <button type="button" on:click={sendFeedback} class="modal-left-btn">留言反馈</button>
        <button type="button" on:click={handleConfirm} class="modal-right-btn">倾情赞助</button>
      </div>
    </div>
  </div>
</div>
