<template>
  <div class="m-10">
    <!-- Header -->
    <div class="border-b-2 border-black py-5">
      <!-- <img src="~/assets/logo.png" width="150"/> -->
      <h1 class="font-bold text-4xl">TELEUNI</h1>
    </div>
    <!-- Newly added -->
    <div class="my-10">
      <h2 class="font-bold text-sm text-gray-700">RECENTLY ADDED TO COMPUTER SCIENCE</h2>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3" v-for="course in courses" :key="course.title">
          <Video 
            :name="course.title" 
            :provider="course.provider" 
            :category="course.category" 
            :thumbnail="course.thumbnail" 
          />
        </div>
      </div>
    </div>
    <!-- Category -->
    <div class="my-16 flex flex-wrap"> 
      <div class="w-full md:w-1/2" v-for="category in categories" :key="category.title">
        <Category :name="category.title"/>
      </div>
    </div>
    <!-- About -->
    <div class="border-t-2 border-black"> 
      <div class="py-14">
        <h2 class="font-bold text-8xl">
          Free Online Courses In One Place
        </h2>
        <p class="text-gray-400 text-2xl pt-2">
          TELEUNI allows you to search a wide range of free online courses available on the Internet. Start learning now from universities all over the world.
        </p>
        <div class="pt-14">
          <a href="#" class="font-bold text-3xl">✨Want to contribute?</a>
          <br>
          <a href="#" class="font-bold text-3xl">🐞Bug report</a>
          <br>
          <a href="#" class="font-bold text-3xl">⛏Feature request / Contact owner</a>
        </div>
        <div class="pt-14">
          <p class="font-bold">Created by Risako</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from '../components/Video.vue'
import Category from '../components/Category.vue'
export default {
  components: {
    Video,
    Category
  },
  data: function () {
    return {
      courses: [
        {
          title: "MIT 6.042J Mathematics for Computer Science, Fall 2010",
          provider: "MIT",
          category: "Computer Science",
          thumbnail: "https://i.ytimg.com/vi/L3LMbpZIKhQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2qC1oEMaJ36Y-PVoektYNNLkL6Q"
        },
        {
          title: "MIT 6.042J Mathematics for Computer Science, Fall 2010",
          provider: "MIT",
          category: "Computer Science",
          thumbnail: "https://i.ytimg.com/vi/L3LMbpZIKhQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2qC1oEMaJ36Y-PVoektYNNLkL6Q"
        },
        {
          title: "MIT 6.042J Mathematics for Computer Science, Fall 2010",
          provider: "MIT",
          category: "Computer Science",
          thumbnail: "https://i.ytimg.com/vi/L3LMbpZIKhQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2qC1oEMaJ36Y-PVoektYNNLkL6Q"
        }
      ],
      categories: [
        { 
          title: "💻 Computer Science"
        },
        { 
          title: "➗ Math"
        },
        { 
          title: "🍎 Physics"
        },
        { 
          title: "🧠 Phychology"
        },
      ]
    }
  }
}
</script>
<style>
a:hover {
  border-bottom: 2px solid black;
}
</style>
