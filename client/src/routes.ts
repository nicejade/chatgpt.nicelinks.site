import { wrap } from 'svelte-spa-router/wrap'
import Home from './pages/Home.svelte'

export default {
  '/': Home,

  '/about': wrap({
    asyncComponent: () => import('./pages/About.svelte')
  }),

  '*': Home
}