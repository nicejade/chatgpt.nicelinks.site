<script>
  import { onMount } from 'svelte'
  import AboutMe from './../markdown/AboutMe.md'
  import { init } from '@waline/client'
  import '@waline/client/dist/waline.css'

  onMount(() => {
    init({
      el: '#waline',
      serverURL: 'https://comment.nicelinks.site/',
      path: 'https://chatgpt.nicelinks.site/',
      copyright: false,
      wordLimit: [10, 600],
      requiredMeta: ['nick', 'mail'],
    })
  })
</script>

<div class="flex-col justify-between mx-auto my-4 prose page-warpper lg:prose-xl md:prose-sm">
  <AboutMe />
  <div id="waline" />
</div>
