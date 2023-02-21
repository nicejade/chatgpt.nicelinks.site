<script lang="ts">
  import logo from './../assets/logo.svg'
  import github from './../assets/github.svg'

  const title: string = '智聊问异斋'
</script>

<header class="fixed top-0 flex flex-row items-center justify-between w-full h-16 px-4 header">
  <div class="flex flex-row items-center">
    <img class="w-12 h-12 mr-2 logo" src={logo} alt={title} />
    <a
      class="inline-flex flex-col justify-center h-full align-center"
      href="https://chatgpt.nicelinks"
      rel="noreferrer"
    >
      <h1 class="inline-block text-2xl leading-none tracking-tight text-gray-900 dark:text-white">
        {title}
      </h1>
    </a>
  </div>
  <nav class="flex flex-row items-center">
    <a href="https://nicelinks.site" class="mr-4 text-lg" rel="noreferrer"> 倾城之链 </a>
    <a href="https://github.com/nicejade/chatgpt.nicelinks.site" rel="noreferrer">
      <img class="w-8 h-8 mr-2 logo" src={github} alt={title} />
    </a>
  </nav>
</header>

<style>
  .header {
    box-shadow: rgba(0, 0, 0, 0.5) 0px -0.4rem 0.9rem 0.2rem;
  }

  .logo {
    display: inline-block;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
