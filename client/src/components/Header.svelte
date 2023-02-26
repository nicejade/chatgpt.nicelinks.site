<script lang="ts">
  import { link } from 'svelte-spa-router'
  import logo from './../assets/icons/logo.svg'
  import github from './../assets/icons/github.svg'
  import { TITLE } from './../helper/constant'
</script>

<header class="flex flex-row items-center justify-between w-full h-16 px-4 shadow-md">
  <div class="inline-flex flex-row items-center h-full">
    <img class="w-12 h-12 mr-2 logo" src={logo} alt={TITLE} />
    <a class="inline-flex flex-col justify-center h-full md:hidden" href="/" rel="noreferrer">
      <h1 class="inline-block text-xl font-semibold leading-none stroke-orange-50">
        {TITLE}
      </h1>
    </a>
  </div>
  <nav class="inline-flex flex-row items-center h-full">
    <a href="https://nicelinks.site/friends" class="mr-4 text-lg" rel="noreferrer">友情链接</a>
    <a href="/about" use:link class="mr-4 text-lg" rel="noreferrer">关于</a>
    <a href="https://github.com/nicejade/chatgpt.nicelinks.site" rel="noreferrer">
      <img class="w-8 h-8 mr-2 logo" src={github} alt={TITLE} />
    </a>
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
