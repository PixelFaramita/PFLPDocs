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
  background-color: black;
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
}
</style>
