<script lang="ts">
  import { link } from 'svelte-spa-router'
  import logo from './../assets/icons/logo.svg'
  import { TITLE } from './../helper/constant'
</script>

<header class="flex flex-row items-center justify-between w-full h-16 px-4 shadow-md">
  <a class="inline-flex flex-row items-center justify-center" href="/" rel="noreferrer">
    <img class="w-12 h-12 mr-2 logo" src={logo} alt={TITLE} />
    <h1 class="inline-block text-xl font-semibold leading-none md:hidden stroke-orange-50">
      {TITLE}
    </h1>
  </a>

  <nav class="inline-flex flex-row items-center h-full">
    <a href="https://nicelinks.site/friends" class="text-lg" rel="noreferrer">友情链接</a>
    <a href="/setting" use:link class="ml-4 text-lg" rel="noreferrer">设置</a>
    <a href="/about" use:link class="ml-4 text-lg" rel="noreferrer">关于</a>
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
