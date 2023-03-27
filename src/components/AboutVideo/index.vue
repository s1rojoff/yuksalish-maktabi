<script setup lang="ts">
import type { PropType } from "vue";
import BaseIcon from '@/components/BaseIcon/index.vue'

const props = defineProps({
  closeVideo:{
    type: String as PropType<string>
  }
});
</script>
<template>
  <div class="fixed top-0 z-20">
    <div class="bg-black opacity-70 w-screen h-screen" @click="props.closeVideo" ></div>
    <BaseIcon @click="props.closeVideo" class="w-14 z-30 cursor-pointer h-14 top-5 right-10 text-white absolute " name="Close" />
    <div class="absolute px-24 top-[15%] w-full">
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
