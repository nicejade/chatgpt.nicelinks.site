<script lang="ts">
  import { onMount } from 'svelte'
  import Alert from './Alert.svelte'
  import UserChat from './Item/UserChat.svelte'
  import GptChat from './Item/GptChat.svelte'
  import Loading from './Loading.svelte'
  import apis from '../helper/apis'
  import { sleep } from './../helper/utils'
  import { setLocalStorage, getLocalStorage } from './../helper/utils'

  let openAIKey: string = ''
  let userMsgText: string = ''
  let errorMsgText: string = ''
  let currentChatId: string = ''
  let chatTextArr: Array<object> = []
  let isLoading: boolean = false

  const OPEN_AI_KEY = 'open-ai-key'
  const DEFAULT_CHAT: object = {
    from: 'assistant',
    text: '您好，输入 OPEN AI KEY，即可与 AI 对话，🎉',
    time: new Date().getTime(),
  }

  const injectUserChat = () => {
    chatTextArr = chatTextArr.concat({
      from: 'user',
      text: userMsgText,
      time: new Date().getTime(),
    })
    scrollChatToBottom()
  }

  const scrollChatToBottom = async () => {
    await sleep(10)
    const chatListNode = document.getElementById('chat-list')
    chatListNode.scrollTo({ top: 2e6, behavior: 'smooth' })
  }

  const injectGptChat = () => {
    isLoading = true
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
        isLoading = false
        scrollChatToBottom()
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

  const onResetClick = () => {
    userMsgText = ''
  }

  const handleEdit = (event) => {
    userMsgText = event.detail
  }

  const handleClose = () => {
    errorMsgText = ''
  }

  onMount(() => {
    openAIKey = getLocalStorage(OPEN_AI_KEY)
    chatTextArr = chatTextArr.concat(DEFAULT_CHAT)
  })
</script>

{#if errorMsgText !== ''}
  <Alert on:close={handleClose}>
    <p>{errorMsgText}</p>
  </Alert>
{/if}

<div class="flex flex-row items-center justify-between w-full mt-3">
  <input
    type="text"
    id="open-ai-key"
    bind:value={openAIKey}
    class="inline-block bg-gray-50 border border-gray-300 text-gray-900 text-sm 
		rounded-lg focus:ring-rose-500 focus:border-rose-500 w-full p-2.5 
		dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
		dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
    placeholder="请填写 OPEN AI KEY"
    required
  />
  <button
    type="button"
    on:click={onSaveClick}
    class="ml-2 mr-2 w-28 text-gray-900 bg-white border border-gray-300 
		focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 
		font-medium rounded-full text-sm px-5 py-2.5  dark:bg-gray-800 
		dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
		dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >保存
  </button>
</div>

<section
  id="chat-list"
  class="w-full px-4 py-2 mx-auto my-3 overflow-scroll chat-list bg-gradient-to-b from-gray-50"
>
  {#each chatTextArr as item, i}
    {#if item.from === 'user'}
      <UserChat params={item} on:edit={handleEdit} />
    {:else}
      <GptChat params={item} />
    {/if}
  {/each}
  {#if isLoading}
    <Loading />
  {/if}
</section>

<div
  class="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-between w-full max-w-2xl px-2 mx-auto"
>
  <input
    type="text"
    id="message"
    bind:value={userMsgText}
    class="inline-block w-full bg-gray-50 border border-gray-300 text-gray-900
		 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500
		 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
	 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
    placeholder="请输入您想与 Chat GPT 交流的内容"
    required
  />
  <div class="flex flex-row items-center justify-between w-full mt-2">
    <button
      type="button"
      on:click={onResetClick}
      class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden 
			text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
			from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 
			group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 
			focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        重置聊天
      </span>
    </button>
    <button
      type="button"
      on:click={onSendClick}
      class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
			hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 
			dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >发送
    </button>
  </div>
</div>

<style>
  .chat-list {
    min-height: calc(100vh - 16rem);
    max-height: calc(100vh - 16rem);
    overflow: scroll;
  }
</style>
