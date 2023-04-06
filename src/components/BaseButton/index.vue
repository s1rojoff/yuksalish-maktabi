<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs()
const props = defineProps({
  text: {
    type: String,
    require: true,
  },
  size:{
    type:String,
    default: 'md'
  }
});
</script>
<template>
  <button v-bind="attrs" class="bg-[#F68220] hover:bg-[#f39549]   rounded-3xl text-white text-base" 
    :class="{
      'py-3 px-10': props.size === 'lg',
      'py-1.5 px-5' : props.size === 'md'
    }"
  >
    {{props.text}}
  </button>
</template>
