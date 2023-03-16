<script setup lang="ts">
const navItems = [
  {
    name: "Asosiy",
    route: "/",
  },
  {
    name: "Biz haqimizda",
    route: "about",
  },
  {
    name: "Yangiliklar",
    route: "news",
  },
  {
    name: "Galereya",
    route: "galery",
  },
  {
    name: "Online test",
    route: "tests",
  },
  {
    name: "Bog'lanish",
    route: "contact",
  },
];
</script>

<template>
  <div class="py-5 flex justify-between items-center" style="backdrop-filter: blur(60px)">
    <router-link to="/"
      ><img src="/logo.png" class="w-28 h-16" alt="logo"
    /></router-link>
    <div class="flex justify-between items-center">
      <router-link
        class="text-base font-normal text-white ml-8"
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        ><p>{{ item.name }}</p></router-link
      >
    </div>
  </div>
</template>
