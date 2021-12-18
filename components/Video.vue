<template>
  <a :href="link" target="”_blank”">
    <div class="py-3 pr-3 w-full">
      <img :src="thumbnail" class="w-full">
      <p class="text-sm font-bold">{{ name }}</p>
      <div class="flex items-center">
        <img src="~/assets/school_black_24dp 1.png" width="20">
        <p class="text-sm font-bold">{{ provider }}</p>
        <p class="px-2 mx-2 text-sm font-bold text-white bg-gray-800">{{ category }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['name', 'category', 'thumbnail', 'provider', 'link']
}
</script>
