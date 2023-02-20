<script lang="ts">
  import Alert from './Alert.svelte'
  import UserChat from './Item/UserChat.svelte'
  import GptChat from './Item/GptChat.svelte'

  const title: string = '智聊问异斋'
  let openAIKey: string = ''
  let userMsgText: string = ''
  let errorMsgText: string = ''
  let chatTextArr: Array<object> = []

  const onSendClick = () => {
    if (!openAIKey) {
      errorMsgText = '如要正常使用，请先填写 Open AI Key.'
      return
    }
    chatTextArr.push({
      from: 'user',
      text: userMsgText,
      time: new Date().getTime(),
    })
    chatTextArr = chatTextArr
    userMsgText = ''
  }

  const handleClose = () => {
    errorMsgText = ''
  }
</script>

{#if errorMsgText !== ''}
  <Alert on:close={handleClose}>
    <p>{errorMsgText}</p>
  </Alert>
{/if}

<div class="w-full flex flex-row justify-between items-center mt-4">
  <label
    for="open-ai-key"
    class="inline-block w-1/5 text-sm font-medium text-gray-900 dark:text-white">OpenAI Key：</label
  >
  <input
    type="text"
    id="open-ai-key"
    bind:value={openAIKey}
    class="inline-block bg-gray-50 border border-gray-300text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="OpenAI Key"
    required
  />
</div>

<section class="my-4">
  {#each chatTextArr as item, i}
    {#if item.from === 'user'}
      <UserChat params={item} />
    {:else}
      <GptChat params={item} />
    {/if}
  {/each}
</section>

<div class="fixed bottom-2 w-full m-auto max-w-xl flex flex-row justify-between items-center">
  <input
    type="text"
    id="message"
    bind:value={userMsgText}
    class="inline-block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="OpenAI Key"
    required
  />
  <button
    type="button"
    on:click={onSendClick}
    class="ml-4 w-28 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >发送
  </button>
</div>
