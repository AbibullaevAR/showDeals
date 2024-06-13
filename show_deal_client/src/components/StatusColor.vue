<script setup lang="ts">
import { toRefs } from 'vue';

interface IProps {
  status: string
}

// eslint-disable-next-line no-undef
const props = defineProps<IProps>();

const { status } = toRefs(props);

</script>

<template>
  <div class="status-card">
    {{ status }}
  </div>
</template>

<style lang="scss">
.status-card {
  padding: 2px;

  &_solution {
    background-color: rgb(255, 204, 102);
  }

  &_close {
    background-color: rgb(213, 216, 219);
  }

  &_conversation {
    background-color: rgb(255, 255, 153);
  }
}
</style>