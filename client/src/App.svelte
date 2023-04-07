<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from './components/Header.svelte'
  import NoticeModal from './components/Modal/Notice.svelte'
  import { gtagTracking } from './helper/utils'
  import { setPageMeta } from './helper/aside'
  import './assets/styles/app.css'

  const routeLoaded = (event: CustomEvent) => {
    const route = event?.detail?.route
    setPageMeta(route)
    gtagTracking(`page-${route.replace('/', '') || 'home'}`, 'page')
  }

  const getSystemAnnouncement = () => {
    const LatestAnnouncement = {
      id: '230405',
      date: '2023 年 4 月 5 日 15 时',
      body: '🎉 尊敬的用户，先前 <a href="https://chatgpt.nicelinks.site/">素问智聊斋</a> 后台调用 Open AI 接口出现不可抗力错误（Error：429），经多方折腾，现已得到解决，您可以正常使用，无需填写 Open AI KEY；为保证服务持续健康运行，对使用频次有增加些许限制🚫，希望您在发送请求之前，认真组织好问题（Prompt Text），以避免被限制，期待您的理解与支持（于 #DATE）。',
    }
    const baseAnnouncementInfo = {
      title: '系统公告',
      buttonText: '已知悉',
    }
    return { ...baseAnnouncementInfo, ...LatestAnnouncement }
  }
</script>

<Header />
<main id="main" class="flex flex-col w-full h-full max-w-2xl m-auto mx-auto">
  <Router {routes} on:routeLoaded={routeLoaded} />
</main>
<NoticeModal params={getSystemAnnouncement()} />
