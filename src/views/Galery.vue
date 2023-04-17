<script setup lang="ts">
import {ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import BaseAccordion from '@/components/BaseAccordion/index.vue'
const allClasses = [
  {
    name: "1-sinflar",
    classes: ["Harvard", "Cambridge", "Stanford"],
  },
  {
    name: "2-sinflar",
    classes: ["Californiya", "Oxford"],
  },
  {
    name: "3-sinflar",
    classes: ["Toronto", "Columbiya"],
  },
  {
    name: "4-sinflar",
    classes: ["Michigan", "Chicago"],
  },
  {
    name: "5-sinflar",
    classes: ["Pensylvania", "Tokyo", "Yuksalish"],
  },
  {
    name: "6-sinflar",
    classes: ["Singapore", "Washington", "MIT"],
  },
  {
    name: "7-sinflar",
    classes: ["Shanhai", "Wharton", "Leaders", "Westminister"],
  },
  {
    name: "8-sinflar",
    classes: ["Princeton", "London"],
  },
];
const lessonImg = [
  "/lesson_imgs/lesson1.png",
  "/lesson_imgs/lesson2.png",
  "/lesson_imgs/lesson3.png",
  "/lesson_imgs/lesson4.png",
  "/lesson_imgs/lesson5.png",
  "/lesson_imgs/lesson6.png",
];
const currentSlide = ref<number>(0);
function slideTo(val: number) {
  currentSlide.value = val;
}
</script>
<template>
  <div id="galery" class="px-24">
    <p class="text-3xl pb-10 text-black font-semibold text-center">
      Darslardan foto lavhalar
    </p>
    <div class="flex justify-between items-start">
      <Carousel
        class="w-[60%]"
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
      >
        <Slide v-for="(slide, index) in lessonImg" :key="index">
          <img class="w-full" :src="slide" :alt="slide" />
        </Slide>
      </Carousel>

      <div class="mt-4 w-[40%]">
        <Carousel
          id="thumbnails"
          :items-to-show="4"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
          class=""
        >
          <Slide v-for="(slide, index) in lessonImg" :key="slide">
            <div class="carousel__item" @click="slideTo(index)">
              <img class="" :src="slide" alt="" />
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
        <div class="mt-3">
          <p class="text-xl font-semibold text-center">Sinflarimiz</p>
          <div class="pl-5">
            <BaseAccordion :data="allClasses"/>
          </div>
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
