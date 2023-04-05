<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from './components/Header.svelte'
  import StaticModal from './components/StaticModal.svelte'
  import { setPageMeta } from './helper/aside'
  import { SYSTEM_NOTICE_MAP } from './helper/constant'
  import './assets/styles/app.css'

  const routeLoaded = (event: CustomEvent) => {
    setPageMeta(event?.detail?.route)
  }

  const getSystemNotice = () => {
    const defaultInfoObj = {
      title: '系统公告',
      buttonText: '已知悉',
    }
    return { ...defaultInfoObj, ...SYSTEM_NOTICE_MAP[0] }
  }
</script>

<Header />
<main id="main" class="flex flex-col w-full h-full max-w-2xl m-auto mx-auto">
  <Router {routes} on:routeLoaded={routeLoaded} />
</main>
<StaticModal params={getSystemNotice()} />
