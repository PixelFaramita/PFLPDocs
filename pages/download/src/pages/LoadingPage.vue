<template>
  <div class="grid place-items-center" style="height: min(100vw - 50px, 100vh - 50px)">
    <div>
      <h2 class="h-2">{{ message }}</h2>
      <it-spinner
        class="mx-auto my-8"
        :variant="loadingVariant"
        :variants="{
          red: { root: '!border-r-red-500' },
          blue: { root: '!border-r-blue-600' },
          yellow: { root: '!border-r-yellow-500' },
          green: { root: '!border-r-green-500' }
        }"
      />
    </div>
  </div>
</template>
<style scoped></style>
<script lang="ts" setup>
import { computed, onUnmounted, ref } from 'vue'
defineProps<{
  message: string
}>()
const loadingVariantId = ref(0)
const loadingId = setInterval(() => {
  loadingVariantId.value = (loadingVariantId.value + 1) % 4
  //console.debug('active')
}, 150)
const loadingVariant = computed(() => {
  switch (loadingVariantId.value) {
    case 0:
      return 'red'
    case 1:
      return 'yellow'
    case 2:
      return 'blue'
    case 3:
      return 'green'
  }
})
onUnmounted(() => {
  clearInterval(loadingId)
})
</script>
