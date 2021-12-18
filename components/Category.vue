<template>
  <NuxtLink :to="'/category/' + id">
    <div class="p-2 my-2 mr-2 font-bold border-2 border-black text-md">
      <p>{{ emoji }} {{ name }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['name', 'id', 'emoji']
}
</script>
