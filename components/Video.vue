<template>
  <a :href="link" target="”_blank”">
    <div class="w-full py-3 pr-3">
      <img :src="thumbnail" class="w-full">
      <p class="font-bold text-sm">{{ name }}</p>
      <div class="flex items-center">
        <img src="~/assets/school_black_24dp 1.png" width="20">
        <p class="font-bold text-sm">{{ provider }}</p>
        <p class="font-bold text-sm mx-2 bg-gray-800 text-white px-2">{{ category }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['name', 'category', 'thumbnail', 'provider', 'link']
}
</script>
