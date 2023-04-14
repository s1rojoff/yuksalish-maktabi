<script setup lang="ts">
import BaseNavbar from "@/components/BaseNavbar/index.vue";
import BaseButton from "@/components/BaseButton/index.vue";
</script>

<template>
  <header id="/" class="relative back h-screen overflow-y-hidden">
    <video autoplay playsinline loop muted class="absolute -z-10 top-0 left-0">
      <source src="/images/header.mp4" type="video/mp4" />
    </video>
    <div class="w-full h-screen">
      <div class="fixed z-10 top-0 w-full"> 
        <BaseNavbar />
      </div>
      <div class="flex px-24 translate-y-full mt-20 justify-center text-center">
        <div>
          <p
            class="text-white text-5xl uppercase font-semibold"
            style="letter-spacing: 7px"
          >
            yuksalish maktabi
          </p>
          <p
            class="text-lg text-white mt-3 font-medium"
            style="letter-spacing: 4px"
          >
            Ta'lim va tarbiya birlashgan dargoh
          </p>
          <a href="#contact"
            ><BaseButton size="lg" class="mt-5 tracking-widest" text="Murojaat uchun"
          /></a>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.back {
  background-color: rgba(8, 15, 70, 0.7);
}
</style>
