<script setup lang="ts">
import BaseNavbar from "@/components/BaseNavbar/index.vue";
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const newItems: any = [
  {
    img: "/news_imgs/news1.png",
    title: "Mental arifmetikani",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nobis illo quidem distinctio ratione",
  },
  {
    img: "/news_imgs/news2.png",
    title: "IELTS imtixoni haqida",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nobis illo quidem distinctio ratione",
  },
  {
    img: "/news_imgs/news3.png",
    title: "Ingliz tili",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nobis illo quidem distinctio ratione",
  },
  {
    img: "/news_imgs/news4.png",
    title: "Matematika",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nobis illo quidem distinctio ratione",
  },
  {
    img: "/news_imgs/news5.png",
    title: "Fizika",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nobis illo quidem distinctio ratione",
  },
];
</script>
<template>
  <div id="news" class="my-10 px-24">
    <p class="text-3xl text-black font-semibold text-center">
      Maktabimizdagi yangiliklar
    </p>
    <div class="mt-5">
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="slide in newItems" :key="slide">
          <div>
            <div class="flex justify-center">
              <img :src="slide.img" alt="" />
            </div>
            <div class="px-10">
              <p class="text-lg font-medium">{{ slide.title }}</p>
              <p>{{ slide.text }}</p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
