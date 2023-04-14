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
function clickNav(val:any){

}
</script>

<template>
  <div class="flex pr-24 pl-24 h-28 justify-between items-center" style="background-color: rgb(8, 15, 70);">
    <router-link to="/"
      ><img src="/logo.png" class="w-28 h-16" alt="logo"
    /></router-link>
    <div class="flex justify-between items-center">
      <p
        class="text-base custom-transition font-normal text-white ml-8"
        v-for="(item, index) in navItems"

        :key="index"
        ><a :href="`#${item.route}`">{{ item.name }}</a></p
      >
    </div>
  </div>
</template>
