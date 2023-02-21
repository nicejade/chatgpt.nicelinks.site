<script lang="ts">
  import './app.css'
  import Header from './components/Header.svelte'
  import ChatGPT from './components/ChatGPT.svelte'
</script>

<Header />
<main class="relative flex flex-col justify-start w-2/3 h-full max-w-3xl m-auto mx-auto mt-16">
  <ChatGPT />
</main>
