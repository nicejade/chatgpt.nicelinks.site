<script>
  export let params
  import { onMount, tick } from 'svelte'
  import hljs from 'highlight.js/lib/core'
  import javascript from 'highlight.js/lib/languages/javascript'
  import typescript from 'highlight.js/lib/languages/typescript'
  import markdown from 'highlight.js/lib/languages/markdown'
  import python from 'highlight.js/lib/languages/python'
  import rust from 'highlight.js/lib/languages/rust'
  import bash from 'highlight.js/lib/languages/bash'
  import xml from 'highlight.js/lib/languages/xml'
  import css from 'highlight.js/lib/languages/css'
  import 'highlight.js/styles/github.css'
  import logo from './../../assets/icons/logo.svg'
  import { TITLE } from './../../helper/constant'
  import { parse } from './../../helper/aside'

  onMount(async () => {
    await tick()
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.registerLanguage('javascript', javascript)
      hljs.registerLanguage('typescript', typescript)
      hljs.registerLanguage('markdown', markdown)
      hljs.registerLanguage('python', python)
      hljs.registerLanguage('rust', rust)
      hljs.registerLanguage('bash', bash)
      hljs.registerLanguage('xml', xml)
      hljs.registerLanguage('css', css)
      hljs.highlightAll()
    })
  })
</script>

<div class="flex flex-row justify-start mb-4">
  <img class="w-10 h-10 m-1 rounded-full ring-2 ring-gray-300" src={logo} alt={TITLE} />
  <article
    class="max-w-lg px-4 mt-3 prose whitespace-pre-line md:max-w-xs sm:max-w-tiny md:prose-sm"
  >
    {@html parse(params.text)}
  </article>
</div>
