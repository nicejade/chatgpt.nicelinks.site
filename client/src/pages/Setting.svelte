<script lang="ts">
  import { gtagTracking } from '../helper/utils'
  import { getOpenAiKey, setOpenAiKey, getIsSaveChat, setIsSaveChat } from './../helper/aside'

  let openAIKey: string = getOpenAiKey()
  let isSaveChat: boolean = getIsSaveChat() || false

  $: {
    setIsSaveChat(isSaveChat)
    gtagTracking(`${isSaveChat ? 'do' : 'no-'}save-chat`, 'setting')
  }

  /*----------------CallBackEvent----------------*/
  const handleInput = () => {
    setOpenAiKey(openAIKey)
    gtagTracking('save-key', 'setting')
  }
</script>

<div class="flex flex-col items-center justify-between w-full mt-4 divide-y divide-solid">
  <div class="flex flex-row items-center justify-between w-full pb-4 md:flex-wrap">
    <label for="open-ai-key" class="w-56 font-bold md:pb-2">设置 OPEN AI KEY</label>
    <input
      type="text"
      id="open-ai-key"
      bind:value={openAIKey}
      on:input={handleInput}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-base 
		  rounded-lg focus:ring-rose-500 focus:border-rose-500 w-full p-2.5"
      placeholder="请填写 OPEN AI KEY"
      required
    />
  </div>
  <div class="flex flex-row items-center justify-between w-full py-4">
    <label for="open-ai-key" class="block w-full text-lg font-bold">保存对话内容</label>
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" bind:checked={isSaveChat} class="sr-only peer" />
      <div
        class="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full 
        peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white 
        after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-link"
      />
    </label>
  </div>
</div>
