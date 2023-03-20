<script lang="ts">
  import { onMount } from 'svelte'
  import Alert from '../components/Alert.svelte'
  import Loading from '../components/Loading.svelte'
  import apis from '../helper/apis'
  import { TITLE } from './../helper/constant'
  import { sleep } from '../helper/utils'
  import { getParentMessageId, setParentMessageId, getOpenAiKey } from './../helper/aside'

  export let desc: string = ''
  export let title: string = ''

  let userMsgText: string = ''
  let gptReplyText: string = ''
  let errorMsgText: string = ''
  let isLoading: boolean = false

  const checkAndAskGPT = () => {
    if (!userMsgText.trim()) {
      errorMsgText = '嗨，主人，请输入您想与 AI 交流的内容.'
      resetUserInput()
      return
    }
    injectGptChat()
  }

  onMount(() => {
    window.document.title = `${title} - ${TITLE}`
  })

  const createPromptText = () => {
    return `请将下面这段文本润色一下：${userMsgText}`
  }

  const resetUserInput = async () => {
    await sleep(10)
    userMsgText = ''
  }

  const injectGptChat = () => {
    isLoading = true
    const params: object = {
      key: getOpenAiKey(),
      text: createPromptText(),
      id: getParentMessageId(),
    }
    apis
      .requestChatGPT(params)
      .then((res) => {
        gptReplyText = res.text
        setParentMessageId(res.id)
      })
      .catch((err) => {
        console.log(`Something Error :`, err)
        errorMsgText = err?.message
      })
      .finally(() => {
        isLoading = false
        resetUserInput()
      })
  }

  /*----------------CallBackEvent----------------*/
  const onPolishClick = () => {
    checkAndAskGPT()
  }

  const handleClose = () => {
    errorMsgText = ''
  }
</script>

{#if errorMsgText !== ''}
  <Alert on:close={handleClose}>
    {errorMsgText}
  </Alert>
{/if}

<div class="flex flex-row flex-wrap items-center justify-between w-full mt-3">
  <textarea
    id="message"
    rows="10"
    bind:value={userMsgText}
    class="inline-block w-full bg-gray-50 border resize-none border-gray-300 text-gray-900 
    text-sm rounded-lg  p-2.5 focus:outline-none focus:ring-2 focus:ring-link focus:border-transparent"
    placeholder={desc}
    required
  />
  <div class="flex flex-row items-center justify-end w-full my-3">
    <button
      type="button"
      on:click={onPolishClick}
      class="text-white w-28 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
			hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  
      font-medium rounded-full text-sm px-5 py-2.5 text-center"
      >一键润色
    </button>
  </div>
  {#if isLoading}
    <Loading />
  {/if}
  {#if gptReplyText}
    <div class="p-2 my-3 whitespace-pre-line bg-gray-100 rounded-lg shadow text-brand">
      <h2 class="mb-2 text-lg font-bold">ChatGPT 润色结果：</h2>
      {gptReplyText}
    </div>
  {/if}
</div>
