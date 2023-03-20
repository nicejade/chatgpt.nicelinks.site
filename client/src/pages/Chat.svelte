<script lang="ts">
  import { onMount } from 'svelte'
  import Alert from '../components/Alert.svelte'
  import UserChat from '../components/Item/UserChat.svelte'
  import GptChat from '../components/Item/GptChat.svelte'
  import Loading from '../components/Loading.svelte'
  import apis from '../helper/apis'
  import { sleep } from '../helper/utils'
  import { getParentMessageId, setParentMessageId, getOpenAiKey } from './../helper/aside'

  let userMsgText: string = ''
  let errorMsgText: string = ''
  let currentChatId: string = getParentMessageId()
  let chatTextArr: Array<object> = []
  let isLoading: boolean = false
  let chatListNode: HTMLElement = null
  let textareaNode: HTMLElement = null
  const TEXTAREA_HEIGHT: number = 42

  const DEFAULT_CHAT: object = {
    from: 'assistant',
    text: '🎉 即可与 `AI` 对话，（可前往「[设置](/#/setting)」，使用您专属 OPEN AI KEY）',
    time: new Date().getTime(),
  }

  onMount(() => {
    chatTextArr = chatTextArr.concat(DEFAULT_CHAT)
    chatListNode = document.getElementById('chatlist')
    textareaNode = document.getElementById('message')
  })

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
    chatListNode.scrollTo({ top: 2e6, behavior: 'smooth' })
  }

  const injectGptChat = () => {
    isLoading = true
    const params: object = {
      key: getOpenAiKey(),
      text: userMsgText,
      id: currentChatId,
    }
    apis
      .requestChatGPT(params)
      .then((res) => {
        currentChatId = res.id
        setParentMessageId(currentChatId)
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
    textareaNode.style.height = `${TEXTAREA_HEIGHT}px`
    textareaNode.focus()
  }

  /*----------------CallBackEvent----------------*/
  const onSendClick = () => {
    checkAndAskGPT()
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
    if (event.keyCode === 13 && event.code === 'Enter' && !event.shiftKey) {
      checkAndAskGPT()
      event.preventDefault()
    }
  }

  const handleInput = (event) => {
    textareaNode.style.height = `${TEXTAREA_HEIGHT}px`
    const targetHeight = Math.max(event.target.scrollHeight - 15, TEXTAREA_HEIGHT)
    textareaNode.style.height = `${targetHeight}px`
  }
</script>

{#if errorMsgText !== ''}
  <Alert on:close={handleClose}>
    {errorMsgText}
  </Alert>
{/if}

<section
  id="chatlist"
  class="w-full p-2 mx-auto my-4 overflow-scroll chat-list bg-gradient-to-b from-gray-50"
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
    on:input={handleInput}
    class="inline-block w-full max-h-60 bg-gray-50 border resize-none border-gray-300 text-gray-900 
    text-base rounded-lg  p-2.5 focus:outline-none focus:ring-2 focus:ring-link focus:border-transparent"
    placeholder="请输入您想与 Chat GPT 交流的内容"
    required
  />
  <div class="flex flex-row items-center justify-between w-full my-2">
    <button type="button" on:click={onResetClick} class="!w-20 regular-btn"> 重置 </button>
    <button type="button" class="!w-20 primary-btn" on:click={onSendClick}>发送</button>
  </div>
</div>

<style>
  .chat-list {
    height: calc(100vh - 13rem);
    overflow: scroll;
  }
</style>
