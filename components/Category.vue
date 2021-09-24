<template>
  <NuxtLink :to="'/category/' + id">
    <div class="font-bold text-md border-2 border-black p-2 mr-2 my-2">
      <p>{{ emoji }} {{ name }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['name', 'id', 'emoji']
}
</script>
