<script lang="ts">
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import Alert from '../components/Alert.svelte'
  import UserChat from '../components/Item/UserChat.svelte'
  import GptChat from '../components/Item/GptChat.svelte'
  import Loading from '../components/Loading.svelte'
  import apis from '../helper/apis'
  import { sleep, gtagTracking } from '../helper/utils'
  import {
    getParentMessageId,
    setParentMessageId,
    getOpenAiKey,
    setChatRecord,
    getIsSaveChat,
  } from './../helper/aside'

  let userMsgText: string = ''
  let errorMsgText: string = ''
  let currentChatId: string = getParentMessageId()
  let chatTextArr: Array<object> = []
  let isLoading: boolean = false
  let htmlBodyNode: HTMLBodyElement = null
  let textareaNode: HTMLElement = null
  const IS_MOBILE = window.innerWidth <= 768
  const TEXTAREA_HEIGHT: number = IS_MOBILE ? 38 : 42

  interface GptReply {
    id: string
    role: string
    text: string
    parentMessageId: string
  }

  const DEFAULT_CHAT: object = {
    from: 'assistant',
    text: '🎉 即刻与 [AI](https://nicelinks.site/tags/AI) 对话，（可前往「[设置](/#/setting)」，使用您专属 `OPEN AI KEY`）',
    time: new Date().getTime(),
  }

  onMount(() => {
    chatTextArr = chatTextArr.concat(DEFAULT_CHAT)
    htmlBodyNode = document.getElementsByTagName('body')[0]
    textareaNode = document.getElementById('message')
  })

  const injectUserChat = () => {
    chatTextArr = chatTextArr.concat({
      from: 'user',
      text: userMsgText,
      time: new Date().getTime(),
    })
  }

  const scrollChatToBottom = async () => {
    await sleep(10)
    htmlBodyNode.scrollTo({ top: 2e6, behavior: 'smooth' })
  }

  const saveChatContent = (userAsk: object, gptReply: GptReply) => {
    if (!getIsSaveChat()) return

    const { id, parentMessageId, role, text } = gptReply
    setChatRecord({ from: 'user', ...userAsk })
    setChatRecord({ id, parentMessageId, role, text })
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
        saveChatContent(params, res)
        chatTextArr = chatTextArr.concat({
          from: res.assistant,
          text: res.text,
          time: new Date().getTime(),
        })
        gtagTracking('request-success', 'chat')
      })
      .catch((err) => {
        gtagTracking('request-failure', 'chat')
        console.log(`Something Error :`, err)
        errorMsgText = err?.message
      })
      .finally(() => {
        gtagTracking('request-send', 'chat')
        isLoading = false
      })
  }

  const checkAndAskGPT = () => {
    if (!userMsgText.trim()) {
      return (errorMsgText = '嗨，主人，请输入您想与 AI 交流的内容.')
    }
    injectUserChat()
    injectGptChat()
    resetUserInput()
    scrollChatToBottom()
  }

  const resetUserInput = async () => {
    await sleep(10)
    userMsgText = ''
    textareaNode.style.height = `${TEXTAREA_HEIGHT}px`
  }

  /*----------------CallBackEvent----------------*/
  const onSendClick = () => {
    checkAndAskGPT()
    gtagTracking('send', 'chat')
  }

  const onNewChatClick = () => {
    currentChatId = ''
    setParentMessageId(currentChatId)
    chatTextArr = [].concat(DEFAULT_CHAT)
    gtagTracking('new-chat', 'chat')
  }

  const onRecordClick = () => {
    push('/record')
    gtagTracking('record', 'chat')
  }

  const handleEdit = (event) => {
    userMsgText = event.detail
    gtagTracking('reedit', 'chat')
  }

  const handleClose = () => {
    errorMsgText = ''
    gtagTracking('close-alert', 'chat')
  }

  const handleKeydown = (event) => {
    if (event.keyCode === 13 && event.code === 'Enter' && !event.shiftKey) {
      checkAndAskGPT()
      gtagTracking('key-enter', 'chat')
      event.preventDefault()
    }
  }

  const handleInput = (event) => {
    textareaNode.style.height = `${TEXTAREA_HEIGHT}px`
    const targetHeight = Math.max(event.target.scrollHeight, TEXTAREA_HEIGHT)
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
  class="flex-col pb-32 mx-auto page-warpper pt-14 bg-gradient-to-b from-gray-50"
>
  {#each chatTextArr as item, i}
    {#if item.from === 'user'}
      <UserChat params={item} hidden={false} on:edit={handleEdit} />
    {:else}
      <GptChat params={item} />
    {/if}
  {/each}
  {#if isLoading}
    <Loading />
  {/if}
</section>

<div
  class="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-between w-full max-w-2xl px-4 py-2 mx-auto bg-white rounded-t-lg shadow-inner"
>
  <textarea
    id="message"
    rows="1"
    bind:value={userMsgText}
    on:keydown={handleKeydown}
    on:input={handleInput}
    class="inline-block w-full px-2 text-base text-gray-600 border border-gray-300 rounded-lg resize-none md:text-sm max-h-60 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-link focus:border-transparent"
    placeholder="请输入您想与 Chat GPT 交流的内容"
    required
  />
  <div class="flex flex-row items-center justify-between w-full mt-3">
    <button type="button" on:click={onNewChatClick} class="regular-btn">新建会话</button>
    <button type="button" on:click={onRecordClick} class="regular-btn">聊天记录</button>
    <button type="button" class="!w-20 primary-btn" on:click={onSendClick}>发送</button>
  </div>
</div>
