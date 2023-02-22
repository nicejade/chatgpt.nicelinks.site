<script lang="ts">
  import './assets/styles/app.css'
  import Header from './components/Header.svelte'
  import ChatGPT from './components/ChatGPT.svelte'
</script>

<Header />
<main class="flex flex-col w-full h-full max-w-2xl px-2 m-auto mx-auto">
  <ChatGPT />
</main>
