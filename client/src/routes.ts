import { wrap } from 'svelte-spa-router/wrap'
import Home from './pages/Home.svelte'
import { APP_CONF_ARR } from './helper/constant'

export default {
  '/': Home,

  '/chat': wrap({
    asyncComponent: () => import('./pages/Chat.svelte')
  }),

  '/polish': wrap({
    asyncComponent: () => import('./pages/Polish.svelte'),
    props: APP_CONF_ARR.filter(item => {
      return item.path === '/polish'
    })[0]
  }),

  '/record': wrap({
    asyncComponent: () => import('./pages/Record.svelte')
  }),

  '/setting': wrap({
    asyncComponent: () => import('./pages/Setting.svelte')
  }),

  '/about': wrap({
    asyncComponent: () => import('./pages/About.svelte')
  }),

  '*': Home
}