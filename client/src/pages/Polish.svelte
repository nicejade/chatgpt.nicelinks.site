<script lang="ts">
  import Alert from '../components/Alert.svelte'
  import Loading from '../components/Loading.svelte'
  import apis from '../helper/apis'
  import { gtagTracking } from '../helper/utils'
  import { ERROR_MSG_MAP } from '../helper/constant'
  import { parse, getParentMessageId, getOpenAiKey } from './../helper/aside'

  export let desc: string = ''

  let userMsgText: string = ''
  let gptReplyText: string = ''
  let errorMsgText: string = ''
  let isLoading: boolean = false
  const PROMPT_TEXT_LEN_LIMIT: number = 800

  const checkAndAskGPT = () => {
    if (!userMsgText.trim()) {
      gtagTracking('no-prompt-filled', 'polish')
      return (errorMsgText = ERROR_MSG_MAP.noPromptFilled)
    }
    if (userMsgText.length > PROMPT_TEXT_LEN_LIMIT) {
      gtagTracking('prompt-over-limit', 'polish')
      return (errorMsgText = ERROR_MSG_MAP.promptOverLimit)
    }
    if (isLoading) {
      return (errorMsgText = ERROR_MSG_MAP.requestInProgress)
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

<div class="flex-row flex-wrap items-center justify-between page-warpper">
  <textarea
    id="message"
    rows="10"
    bind:value={userMsgText}
    class="inline-block w-full p-2 text-base text-gray-600 border border-gray-300 rounded-lg bg-gray-50 t md:text-sm focus:outline-none focus:ring-2 focus:ring-link focus:border-transparent"
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
      <h2 class="mb-2 text-lg font-bold md:text-base">ChatGPT 润色结果：</h2>
      <article class="prose whitespace-pre-line md:prose-sm">
        {@html parse(gptReplyText)}
      </article>
    </div>
  {/if}
</div>
