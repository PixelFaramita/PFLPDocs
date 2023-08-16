<script lang="ts" setup>
import { ref, onMounted, reactive, type ComponentPublicInstance } from 'vue'
import DownloadItem from '../componment/DownloadItem.vue'
import axios from 'axios'
import HistVersionPage from './HistVersionPage.vue'
import LoadingPage from './LoadingPage.vue'
import type { VersionInfo } from './interface'
const latest = ref<VersionInfo>()
import { Loadingbar } from 'equal-vue'
const globalLoading = ref<ComponentPublicInstance<InstanceType<typeof Loadingbar>>>()
onMounted(async () => {
  globalLoading.value?.show()
  globalLoading.value?.setProgress(10)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 1000)
  })
  globalLoading.value?.setProgress(50)
  latest.value = reactive(
    await axios({
      method: 'get',
      url: '/update/latest.json',
      responseType: 'json'
    })
  ).data as VersionInfo
  globalLoading.value?.setProgress(100)
  setTimeout(() => {
    globalLoading.value?.hide()
  }, 1000)
})
const isWideScreen = ref(false)
//auto detect and reactive
onMounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  const updateIsWideScreen = () => {
    isWideScreen.value = mediaQuery.matches
  }
  mediaQuery.addEventListener('change', updateIsWideScreen)
  updateIsWideScreen()
})
</script>
<template>
  <it-loading-bar ref="globalLoading" global teleport="head" />
  <div v-if="latest">
    <it-tabs
      :vertical="isWideScreen"
      :class="{
        'h-28': isWideScreen
      }"
    >
      <it-tab title="最新版本">
        <div class="grid place-items-center mt-10">
          <download-item :item="latest"> </download-item>
        </div>
      </it-tab>
      <it-tab title="历史版本">
        <hist-version-page />
      </it-tab>
    </it-tabs>
  </div>
  <loading-page v-else message="正在获取最新版本" />
</template>
<style>
.btn-explode::before {
  content: '💥';
  position: absolute;
  top: -8px;
  left: calc(100% - 20px);
  font-size: 24px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
</style>
