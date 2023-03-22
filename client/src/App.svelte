<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from './components/Header.svelte'
  import { setPageMeta } from './helper/aside'
  import './assets/styles/app.css'

  const routeLoaded = (event: CustomEvent) => {
    setPageMeta(event?.detail?.route)
  }
</script>

<Header />
<main class="flex flex-col w-full h-full max-w-2xl px-4 m-auto mx-auto">
  <Router {routes} on:routeLoaded={routeLoaded} />
</main>
