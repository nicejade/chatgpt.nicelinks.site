<script>
  export let params
  import logo from './../../assets/icons/logo.svg'
  import { TITLE } from './../../helper/constant'
  import { parse } from './../../helper/aside'
</script>

<div class="flex flex-row justify-start mb-4">
  <img class="w-10 h-10 m-1 rounded-full ring-2 ring-gray-300" src={logo} alt={TITLE} />
  <div class="mt-4 ml-3 whitespace-pre-line text-brand">{@html parse(params.text)}</div>
</div>
