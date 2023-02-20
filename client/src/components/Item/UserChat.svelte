<script>
  export let params
  import user from './../../assets/user.svg'
</script>

<div class="flex flex-row justify-end mb-4">
  <div class="mr-2">{params.text}</div>
  <img class="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user} />
</div>
