<script lang="ts">
  import Alert from '../components/Alert.svelte'
  import Loading from '../components/Loading.svelte'
  import apis from '../helper/apis'
  import { gtagTracking } from '../helper/utils'
  import { parse, getParentMessageId, getOpenAiKey } from './../helper/aside'

  export let desc: string = ''

  let userMsgText: string = ''
  let gptReplyText: string = ''
  let errorMsgText: string = ''
  let isLoading: boolean = false

  const checkAndAskGPT = () => {
    if (!userMsgText.trim()) {
      return (errorMsgText = '嗨，主人，请输入您想与 AI 交流的内容.')
    }
    injectGptChat()
  }

  const createPromptText = () => {
    return `请将下面这段文本润色一下：${userMsgText}`
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
      })
      .catch((err) => {
        console.log(`Something Error :`, err)
        errorMsgText = err?.message
      })
      .finally(() => {
        isLoading = false
      })
  }

  /*----------------CallBackEvent----------------*/
  const onPolishClick = () => {
    checkAndAskGPT()
    gtagTracking('polish-text', 'polish')
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

<div class="flex flex-row flex-wrap items-center justify-between w-full mt-4">
  <textarea
    id="message"
    rows="10"
    bind:value={userMsgText}
    class="inline-block w-full bg-gray-50 border border-gray-300 text-gray-900 
    text-base rounded-lg  p-2.5 focus:outline-none focus:ring-2 focus:ring-link focus:border-transparent"
    placeholder={desc}
    required
  />
  <div class="flex flex-row items-center justify-end w-full my-4">
    <button type="button" class="primary-btn" on:click={onPolishClick}>一键润色</button>
  </div>
  {#if isLoading}
    <Loading />
  {/if}
  {#if gptReplyText}
    <div class="w-full p-2 my-4 whitespace-pre-line bg-gray-100 rounded-lg shadow text-brand">
      <h2 class="mb-2 text-lg font-bold">ChatGPT 润色结果：</h2>
      <article class="prose whitespace-pre-line md:prose-sm">
        {@html parse(gptReplyText)}
      </article>
    </div>
  {/if}
</div>
