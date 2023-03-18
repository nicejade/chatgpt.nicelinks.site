<script>
  export let params
  import logo from './../../assets/icons/logo.svg'
  import { TITLE } from './../../helper/constant'
</script>

<div class="flex flex-row justify-start mb-4">
  <img
    class="w-10 h-10 m-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-50"
    src={logo}
    alt={TITLE}
  />
  <div class="mt-3 ml-3 text-rose-400 whitespace-pre-line	">{params.text}</div>
</div>
