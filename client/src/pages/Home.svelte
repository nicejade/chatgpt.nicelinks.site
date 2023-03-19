<script lang="ts">
  import { link } from 'svelte-spa-router'
  import { APP_CONF_ARR } from './../helper/constant'
</script>

<div class="flex flex-row flex-wrap items-center justify-between w-full mt-3">
  {#each APP_CONF_ARR as item}
    <a
      href={item.path}
      use:link
      class="inline-block w-full p-4 mb-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
      {item.enable ? '' : 'pointer-events-none opacity-50'}"
    >
      <h2 class="mb-2 text-lg font-bold tracking-tight text-gray-900">{item.title}</h2>
      <p class="font-normal text-gray-700">{item.desc}</p>
    </a>
  {/each}
</div>
