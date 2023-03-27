<script lang="ts">
  import { gtagTracking } from '../helper/utils'
  import { getOpenAiKey, setOpenAiKey, getIsSaveChat, setIsSaveChat } from './../helper/aside'
  import { version } from './../../package.json'

  let openAIKey: string = getOpenAiKey()
  let isSaveChat: boolean = getIsSaveChat() || false

  $: {
    setIsSaveChat(isSaveChat)
    gtagTracking(`${isSaveChat ? 'do' : 'no'}-save-chat`, 'setting')
  }

  /*----------------CallBackEvent----------------*/
  const handleInput = () => {
    setOpenAiKey(openAIKey)
    gtagTracking('save-key', 'setting')
  }
</script>

<div class="flex-col items-center justify-between text-base divide-y page-warpper divide-solid">
  <div
    class="flex flex-row items-center justify-between w-full pb-4 text-base md:flex-wrap md:text-sm"
  >
    <label for="open-ai-key" class="w-56 text-base font-bold md:pb-2 md:text-sm"
      >设置 OPEN AI KEY</label
    >
    <input
      type="text"
      id="open-ai-key"
      bind:value={openAIKey}
      on:input={handleInput}
      class="w-full p-2 text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-rose-500 focus:border-rose-500 md:text-sm"
      placeholder="请填写 OPEN AI KEY"
      required
    />
  </div>
  <div class="flex flex-row items-center justify-between w-full py-4">
    <label for="open-ai-key" class="block w-full font-bold md:text-sm">保存对话内容</label>
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" bind:checked={isSaveChat} class="sr-only peer" />
      <div
        class="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full 
        peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white 
        after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-link"
      />
    </label>
  </div>
  <div class="flex flex-row items-center justify-between w-full py-4">
    <label for="open-ai-key" class="block w-full font-bold md:text-sm">当前版本</label>
    <p class="text-gray-600">{`V${version}`}</p>
  </div>
</div>
