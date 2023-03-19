<script lang="ts">
  import { onMount } from 'svelte'
  import Alert from '../components/Alert.svelte'
  import UserChat from '../components/Item/UserChat.svelte'
  import GptChat from '../components/Item/GptChat.svelte'
  import Loading from '../components/Loading.svelte'
  import apis from '../helper/apis'
  import { setLocalStorage, getLocalStorage, sleep } from '../helper/utils'

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
        isLoading = false
        resetUserInput()
        scrollChatToBottom()
      })
  }

  onMount(() => {
    openAIKey = getLocalStorage(OPEN_AI_KEY)
    chatTextArr = chatTextArr.concat(DEFAULT_CHAT)
  })

  const checkAndAskGPT = () => {
    if (!userMsgText.trim()) {
      errorMsgText = '嗨，主人，请输入您想与 AI 交流的内容.'
      resetUserInput()
      return
    }
    injectUserChat()
    injectGptChat()
  }

  const resetUserInput = async () => {
    await sleep(10)
    userMsgText = ''
  }

  /*----------------CallBackEvent----------------*/
  const onSendClick = () => {
    checkAndAskGPT()
  }

  const onSaveClick = () => {
    setLocalStorage(OPEN_AI_KEY, openAIKey)
  }

  const onResetClick = () => {
    resetUserInput()
  }

  const handleEdit = (event) => {
    userMsgText = event.detail
  }

  const handleClose = () => {
    errorMsgText = ''
  }

  const handleKeydown = (event) => {
    if (event.keyCode === 13 && event.code === 'Enter') {
      checkAndAskGPT()
    }
  }
</script>

{#if errorMsgText !== ''}
  <Alert on:close={handleClose}>
    {errorMsgText}
  </Alert>
{/if}

<div class="flex flex-row items-center justify-between w-full mt-3">
  <input
    type="text"
    id="open-ai-key"
    bind:value={openAIKey}
    class="inline-block bg-gray-50 border border-gray-300 text-gray-900 text-sm 
		rounded-lg focus:ring-rose-500 focus:border-rose-500 w-full p-2.5"
    placeholder="请填写 OPEN AI KEY"
    required
  />
  <button type="button" on:click={onSaveClick} class="ml-2 regular-btn">保存 </button>
</div>

<section
  id="chat-list"
  class="w-full p-2 mx-auto my-3 overflow-scroll chat-list bg-gradient-to-b from-gray-50"
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
  class="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-between w-full max-w-2xl px-4 mx-auto"
>
  <textarea
    id="message"
    rows="1"
    bind:value={userMsgText}
    on:keydown={handleKeydown}
    class="inline-block w-full bg-gray-50 border resize-none border-gray-300 text-gray-900 
    text-sm rounded-lg  p-2.5 focus:outline-none focus:ring-2 focus:ring-link focus:border-transparent"
    placeholder="请输入您想与 Chat GPT 交流的内容"
    required
  />
  <div class="flex flex-row items-center justify-between w-full my-2">
    <button type="button" on:click={onResetClick} class="!w-20 regular-btn"> 重置 </button>
    <button
      type="button"
      on:click={onSendClick}
      class="text-white w-20 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
			hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  
      font-medium rounded-full text-sm px-5 py-2.5 text-center"
      >发送
    </button>
  </div>
</div>

<style>
  .chat-list {
    height: calc(100vh - 15rem);
    overflow: scroll;
  }
</style>
