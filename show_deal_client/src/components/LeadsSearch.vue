<script setup lang="ts">
import { defineModel, watch } from 'vue';

const model = defineModel();

watch(model, () => {
  console.log('Tye')
})
</script>

<template>
  <div class="leads-search">
    <input v-model="model" type="input" placeholder="Найти...">
  </div>
</template>