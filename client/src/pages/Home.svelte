<script lang="ts">
  import { link } from 'svelte-spa-router'
  import { APP_CONF_ARR } from './../helper/constant'
  import { gtagTracking } from '../helper/utils'

  const report = (action: string) => {
    gtagTracking(action, 'home')
  }
</script>

<div class="flex flex-row flex-wrap items-center justify-between w-full mt-4 pt-[64px] px-4">
  {#each APP_CONF_ARR as item}
    <a
      href={item.path}
      use:link
      on:click={() => report(item.path.replace('/', ''))}
      class="inline-block w-full p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
      {item.enable ? '' : 'pointer-events-none opacity-50'}"
    >
      <h2 class="mb-2 text-lg font-bold tracking-tight text-gray-600 md:text-base">{item.title}</h2>
      <p class="text-base font-normal text-gray-700 md:text-sm">{item.desc}</p>
    </a>
  {/each}
</div>
