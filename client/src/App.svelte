<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from './components/Header.svelte'
  import StaticModal from './components/StaticModal.svelte'
  import { setPageMeta } from './helper/aside'
  import './assets/styles/app.css'

  const routeLoaded = (event: CustomEvent) => {
    setPageMeta(event?.detail?.route)
  }

  const ModalParams = {
    title: '系统公告',
    body: '尊敬的用户，2023 年 4 月 1 日 11 时，<a href="https://chatgpt.nicelinks.site/">素问智聊斋</a> 后台调用 Open AI 接口出现不可抗力错误（Error：429），给您带来的不便，深感抱歉；解决该问题，须要联系 Open AI 官方，预计 4 月 3 日可修复，请耐心等待⌛️。<br/> <br/> 再次感到抱歉（于 2023 年 4 月 1 日 18 时）。',
    buttonText: '已知悉',
  }
</script>

<Header />
<main id="main" class="flex flex-col w-full h-full max-w-2xl m-auto mx-auto">
  <Router {routes} on:routeLoaded={routeLoaded} />
</main>
<StaticModal params={ModalParams} />
