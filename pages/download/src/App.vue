<script setup lang="ts">
import DownloadPage from '@/pages/DownloadPage.vue'
</script>
<template>
  <main class="main">
    <download-page />
  </main>
</template>
<style scoped>
.main::after {
  background-color: white;
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
}
/**check if dark mode */
@media (prefers-color-scheme: dark) {
  .main::after {
    background-color: black;
  }
}
</style>
