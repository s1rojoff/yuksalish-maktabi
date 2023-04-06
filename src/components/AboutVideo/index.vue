<script setup lang="ts">
import type { PropType } from "vue";
import { storeToRefs } from "pinia";
import BaseIcon from "@/components/BaseIcon/index.vue";
import { useStore } from "@/stores/main";
const store:any = useStore()
function closeVideo(){
  store.aboutVideo = !store.aboutVideo
  
}
storeToRefs(store)
</script>
<template>
  <div class="fixed top-0 z-20">
    <div class="bg-black opacity-70 w-screen h-screen" @click="closeVideo"></div>
    <BaseIcon
      class="w-14 z-30 cursor-pointer h-14 top-5 right-10 text-white absolute"
      name="Close"
      @click="closeVideo"
    />
    <div class="absolute center-video top-[15%] w-[90%]">
      <iframe
        width="100%"
        class="h-[80vh]"
        src="https://www.youtube.com/embed/rtWW7nRu4II"
        title="Yuksalish dars jarayoni"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<style scoped>
.center-video{
  transform: translate(5%, -0%);
}
</style>
