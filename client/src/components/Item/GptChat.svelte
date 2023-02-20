<script>
  export let params
  import logo from './../../assets/logo.svg'
</script>

<div class="flex flex-row justify-start mb-4">
  <img class="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={logo} />
  <div class="ml-2">{params.text}</div>
</div>
