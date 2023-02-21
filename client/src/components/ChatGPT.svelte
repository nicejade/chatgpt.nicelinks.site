<script lang="ts">
  import { onMount } from 'svelte'
  import Alert from './Alert.svelte'
  import UserChat from './Item/UserChat.svelte'
  import GptChat from './Item/GptChat.svelte'
  import apis from '../helper/apis'
  import { setLocalStorage, getLocalStorage } from './../helper/utils'

  let openAIKey: string = ''
  let userMsgText: string = ''
  let errorMsgText: string = ''
  let currentChatId: string = ''
  let chatTextArr: Array<object> = []

  const OPEN_AI_KEY = 'open-ai-key'

  const injectUserChat = () => {
    chatTextArr.push({
      from: 'user',
      text: userMsgText,
      time: new Date().getTime(),
    })
    chatTextArr = chatTextArr
  }

  const injectGptChat = () => {
    const params: object = {
      key: openAIKey,
      text: userMsgText,
      id: currentChatId,
    }
    apis
      .requestChatGPT(params)
      .then((res) => {
        currentChatId = res.id
        chatTextArr.push({
          from: res.assistant,
          text: res.text,
          time: new Date().getTime(),
        })
        chatTextArr = chatTextArr
      })
      .catch((err) => {
        console.log(`Something Error :`, err)
        errorMsgText = err?.message
      })
      .finally(() => {
        userMsgText = ''
      })
  }

  const onSendClick = () => {
    if (!openAIKey) {
      errorMsgText = '如要正常使用，请先填写 OPEN AI KEY.'
      return
    }
    if (!userMsgText) {
      errorMsgText = '嗨，主人，请输入您想与 Chat GPT 交流的内容.'
      return
    }
    injectUserChat()
    injectGptChat()
  }

  const onSaveClick = () => {
    setLocalStorage(OPEN_AI_KEY, openAIKey)
  }

  const handleClose = () => {
    errorMsgText = ''
  }

  onMount(() => {
    openAIKey = getLocalStorage(OPEN_AI_KEY)
  })
</script>

{#if errorMsgText !== ''}
  <Alert on:close={handleClose}>
    <p>{errorMsgText}</p>
  </Alert>
{/if}

<div class="flex flex-row items-center justify-between w-full mt-4">
  <label
    for="open-ai-key"
    class="inline-block w-1/5 text-sm font-medium text-gray-900 dark:text-white"
    >OPEN AI KEY：</label
  >
  <input
    type="text"
    id="open-ai-key"
    bind:value={openAIKey}
    class="inline-block bg-gray-50 border border-gray-300text-gray-900 text-sm 
		rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 
		dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
		dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="请填写 OPEN AI KEY"
    required
  />
  <button
    type="button"
    on:click={onSaveClick}
    class="ml-4 w-28 text-gray-900 bg-white border border-gray-300 
		focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
		font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
		dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
		dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >保存
  </button>
</div>

<section class="w-full px-4 mx-auto my-4 overflow-scroll chat-list">
  {#each chatTextArr as item, i}
    {#if item.from === 'user'}
      <UserChat params={item} />
    {:else}
      <GptChat params={item} />
    {/if}
  {/each}
</section>

<div class="fixed flex flex-row items-center justify-between w-2/3 max-w-3xl mx-auto bottom-2">
  <input
    type="text"
    id="message"
    bind:value={userMsgText}
    class="inline-block bg-gray-50 border border-gray-300 text-gray-900
		 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full 
		 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
	 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="请输入您想与 Chat GPT 交流的内容"
    required
  />
  <button
    type="button"
    on:click={onSendClick}
    class="ml-4 w-28 text-gray-900 bg-white border border-gray-300 
		focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
		font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
		dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
		dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >发送
  </button>
</div>

<style>
  .chat-list {
    max-height: calc(100vh - 13rem);
  }
</style>
