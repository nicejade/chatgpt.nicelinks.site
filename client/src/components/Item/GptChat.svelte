<script>
  export let params
  import logo from './../../assets/icons/logo.svg'
</script>

<div class="flex flex-row justify-start mb-4">
  <img
    class="w-10 h-10 m-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
    src={logo}
    alt="智聊问异斋"
  />
  <div class="mt-3 ml-3">{params.text}</div>
</div>
