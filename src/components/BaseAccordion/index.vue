<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    data:{
        type:Array as PropType<any[]> ,
        default: []
    }
})
</script>
<template>
  <div>
    <p class="mt-3" v-for="item, index in data" :key="index"><span class="text-lg font-semibold">{{ item.name }}</span>: <span class="text-">{{ item.classes.join('  , ') }}</span></p>
  </div>
</template>
