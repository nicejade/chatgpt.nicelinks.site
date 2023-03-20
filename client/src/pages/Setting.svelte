<script lang="ts">
  import { getOpenAiKey, setOpenAiKey } from './../helper/aside'

  let openAIKey: string = getOpenAiKey()

  /*----------------CallBackEvent----------------*/
  const onSaveClick = () => {
    setOpenAiKey(openAIKey)
  }
</script>

<div class="flex flex-col items-center justify-between w-full mt-4">
  <label for="open-ai-key" class="block w-full font-bold">设置 OPEN AI KEY</label>
  <div class="flex flex-row items-center justify-between w-full mt-4">
    <input
      type="text"
      id="open-ai-key"
      bind:value={openAIKey}
      class="inline-block bg-gray-50 border border-gray-300 text-gray-900 text-base 
		rounded-lg focus:ring-rose-500 focus:border-rose-500 w-full p-2.5"
      placeholder="请填写 OPEN AI KEY"
      required
    />
    <button type="button" on:click={onSaveClick} class="ml-2 regular-btn">保存 </button>
  </div>
</div>
