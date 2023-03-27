<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon/index.vue";
import AboutVideo from '@/components/AboutVideo/index.vue'
import {useStore} from '@/stores/main'
const store:any = useStore()

function toggleVideo():void{
  store.aboutVideo = !store.aboutVideo
  console.log(store.aboutVideo);
  
}
</script>
<template>
  <div id="about" class="relative">
    <p class="text-4xl text-black font-semibold text-center pt-10">
      Biz haqimizda
    </p>
    <div class="grid px-24 grid-cols-2 mt-10">
      <div class="relative rounded-3xl overflow-hidden">
        <img src="/images/muhammadaliEshonqulov.jpg" class="" alt="" />
        <div
          class="bg-black opacity-10 w-full h-full absolute top-0 left-0"
        ></div>
        <div
          @click="toggleVideo"
          class="absolute cursor-pointer top-[40%] left-[45%] border-2 w-16 h-16 p-3 border-white rounded-full"
        >
          <BaseIcon class="w-10 h-10 text-white -rotate-90" name="Down" />
        </div>
      </div>
      <div class="px-10 text-black">
        <p class="text-center text-black font-semibold text-lg">
          Yuksalish maktabi haqida
        </p>
        <p class="mt-2">
          Muhammad Ali Eshonqulov - Xalqaro toifadagi iqtisodchi, Biznes va
          Shaxsiy Rivojlanish bo'yicha trener Patronlar ligasi, Biznes Kvadrat
          va Yuksalish loyihasining asoschisi
        </p>
        <p>
          Bizning maktabimizda 1-sinfdan 8-sinfgacha bòlgan òquvchilar òqishadi.
          Darslarimiz ertalab soat 9:00 dan 17:30 gacha bòlgan vaqt oraliģida
          bòlib òtadi. Ya'ni: Davlat ta'lim standarti (DTS) bòyicha darslar
          13:00 ga qadar, 13:00 dan 16:30 gacha bòlgan vaqtda chuqurlashtirib
          òrgatiladigan fanlar, 16:30 dan 17:20 gacha bòlgan vaqtda, haftada 3
          kun òģil bolalar uchun Taekwondo sport tògaraklari,qizlarimiz uchun
          Gimnastika sport tògaraklari bòlib òtadi. Bizda chet tillaridan Arab
          tili va Ingliz tili, Aniq fanlardan Matematika hamda Fizika fanlari
          chuqurlashtirilib òqitiladi.
        </p>
      </div>
    </div>
    <div>
      <AboutVideo toggle="toggleVideo" v-if="store.aboutVideo"/>
    </div>
  </div>
</template>
