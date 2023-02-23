<script>
  export let params
  import user from './../../assets/icons/user.svg'
</script>

<div class="flex flex-row justify-end mb-4">
  <div class="mt-3 mr-3">{params.text}</div>
  <img
    class="w-10 h-10 m-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
    src={user}
    alt="智聊问异斋"
  />
</div>
