<template>
  <div class="m-10">
    <!-- Header -->
    <div class="border-b-2 border-black py-5">
      <!-- <img src="~/assets/logo.png" width="150"/> -->
      <NuxtLink to="/">
        <h1 class="font-bold text-4xl">
          TELEUNI
        </h1>
      </NuxtLink>
    </div>
    <!-- About -->
    <div class="border-t-2 border-black">
      <div class="py-7">
        <h2 class="font-bold text-5xl md:text-8xl">
          Free Online Courses In One Place
        </h2>
        <p class="text-gray-400 text-md md:text-2xl pt-2">
          TELEUNI allows you to search a wide range of free online courses available on the Internet. Start learning now from universities all over the world.
        </p>
        <div class="pt-7 font-bold text-md md:text-3xl">
          <a href="https://github.com/lilisako/teleuni#how-to-contribute" target="”_blank”">✨Want to contribute?</a>
          <br>
          <a href="https://github.com/lilisako/teleuni/issues" target="”_blank”">🐞Bug report / Feature request</a>
          <br>
          <a href="https://twitter.com/ice2eat/" target="”_blank”">⛏Contact owner(@ice2eat)</a>
        </div>
      </div>
    </div>
    <!-- Category -->
    <div class="my-8 flex flex-wrap">
      <div v-for="category in categories" :key="category.title" class="w-full md:w-1/2">
        <Category
          :id="category.id"
          :name="category.title"
          :emoji="category.emoji"
        />
      </div>
    </div>
    <!-- Newly added -->
    <div class="my-10">
      <h2 class="font-bold text-sm text-gray-700">
        RECENTLY ADDED
      </h2>
      <div class="flex flex-wrap">
        <div v-for="course in courses.slice(0, 3)" :key="course.title" class="w-full md:w-1/3">
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
import Video from '../components/Video.vue'
import Category from '../components/Category.vue'
import categories from '../static/src/categories.json'
import { getRandomCourses } from '../helpers/getCourse'
export default {
  components: {
    Video,
    Category
  },
  data () {
    return {
      courses: getRandomCourses(),
      categories
    }
  },
  methods: {
    getRandomCourses
  }
}
</script>
<style>
a:hover {
  border-bottom: 2px solid black;
}
</style>
