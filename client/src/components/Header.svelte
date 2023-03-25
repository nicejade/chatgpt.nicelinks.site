<script lang="ts">
  import { link } from 'svelte-spa-router'
  import logo from './../assets/icons/logo.svg'
  import { TITLE } from './../helper/constant'
  import { gtagTracking } from '../helper/utils'

  const report = (action: string) => {
    gtagTracking(action, 'header')
  }
</script>

<header
  class="fixed top-0 left-0 z-50 flex flex-row items-center justify-between w-full h-16 px-4 bg-white shadow-md"
>
  <a class="flex flex-row items-center justify-center" on:click={() => report('title')} href="/">
    <img class="w-12 h-12 mr-3 logo" src={logo} alt={TITLE} />
    <h1 class="inline-block text-xl font-semibold leading-none md:hidden stroke-orange-50">
      {TITLE}
    </h1>
  </a>

  <nav class="flex flex-row items-center h-full text-lg md:text-base">
    <a on:click={() => report('friends')} href="https://nicelinks.site/friends">友情链接</a>
    <a on:click={() => report('sponsor')} href="/sponsor" use:link class="ml-4">赞助</a>
    <a on:click={() => report('setting')} href="/setting" use:link class="ml-4">设置</a>
    <a on:click={() => report('about')} href="/about" use:link class="ml-4">关于</a>
  </nav>
</header>

<style>
  .logo {
    display: inline-block;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
