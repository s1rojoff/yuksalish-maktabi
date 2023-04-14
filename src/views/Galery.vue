<script setup lang="ts">
const lessonImg = [
  "/lesson_imgs/lesson1.png",
  "/lesson_imgs/lesson2.png",
  "/lesson_imgs/lesson3.png",
  "/lesson_imgs/lesson4.png",
  "/lesson_imgs/lesson5.png",
  "/lesson_imgs/lesson6.png",
];
</script>
<template>
  <div id="galery" class="px-24">
    <p class="text-3xl pb-10 text-black font-semibold text-center">
      Darslardan foto lavhalar
    </p>
    <div class="grid grid-cols-3 gap-16">
      <div
        v-for="(item, index) in lessonImg"
        class="w-[390px] h-[300px] rounded-md overflow-hidden"
      >
        <div class="max-w-[400px] hover:scale-150 bg-cover custom-transition max-h-[300px]">
          <img
            class="scale-110"
            :src="item"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-transition {
  transition: all 0.2s ease-in;
}
</style>
