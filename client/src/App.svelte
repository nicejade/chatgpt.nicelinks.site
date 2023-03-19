<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'

  import './assets/styles/app.css'
  import Header from './components/Header.svelte'
</script>

<Header />
<main class="flex flex-col w-full h-full max-w-2xl px-4 m-auto mx-auto">
  <Router {routes} />
</main>
