<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs()
const props = defineProps({
  text: {
    type: String,
    require: true,
  },
});
</script>
<template>
  <button v-bind="attrs" class="bg-[#F68220] py-3 px-10  rounded-3xl text-white text-base">
    {{props.text}}
  </button>
</template>
