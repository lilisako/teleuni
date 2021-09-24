<template>
  <div class="m-10">
    <!-- Header -->
    <div class="border-b-2 border-black py-5">
      <!-- <img src="~/assets/logo.png" width="150"/> -->
      <NuxtLink to="/">
        <h1 class="font-bold text-4xl">TELEUNI - {{ categories[$route.params.id].title }}</h1>
      </NuxtLink>
    </div>
    <!-- Newly added -->
    <div class="my-10">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3" v-for="course in getCoursesByName(categories[$route.params.id].path)" :key="course.title">
          <Video 
            :name="course.title" 
            :provider="course.provider" 
            :category="course.category" 
            :thumbnail="course.thumbnail"
            :link="course.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from '../../components/Video.vue'
import Category from '../../components/Category.vue'
import categories from '../../static/src/categories.json'
import { getCoursesByName, getRandomCourseName } from "../../helpers/getCourse"
export default {
  components: {
    Video,
    Category
  },
  data: function () {
    return {
      categories: categories
    }
  },
  methods: {
    getCoursesByName: getCoursesByName
  }
}
</script>
<style>
a:hover {
  border-bottom: 2px solid black;
}
</style>
