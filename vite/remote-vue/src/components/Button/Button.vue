<template>
  <button class="button" type="button" @click="count++">
    count is {{ count }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<style scoped>
.button {
  background-color: #41b883;
}
</style>
