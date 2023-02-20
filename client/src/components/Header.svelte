<script lang="ts">
  import logo from './../assets/logo.svg'

  const title: string = '智聊问异斋'
</script>

<header class="header h-16 flex flex-row justify-start items-center px-2">
  <img class="logo mr-2" src={logo} alt={title} />
  <a
    class="inline-flex h-full flex-col justify-center align-center"
    href="https://chatgpt.nicelinks"
    rel="noreferrer"
  >
    <h1 class="inline-block	text-2xl leading-none tracking-tight text-gray-900 dark:text-white">
      {title}
    </h1>
  </a>
</header>

<style>
  .header {
    box-shadow: rgba(0, 0, 0, 0.5) 0px -0.4rem 0.9rem 0.2rem;
  }

  .logo {
    display: inline-block;
    width: 3rem;
    height: 3rem;
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
