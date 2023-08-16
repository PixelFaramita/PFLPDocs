<script lang="ts" setup>
import { ref, computed, onMounted, reactive, type ComponentPublicInstance } from 'vue'
//https://d.mcpf.live/update/latest.json
import axios from 'axios'
import histversion from './histversion.vue'
import loading from './loading.vue'
import type { LatestVersionInfo } from './interface'
const latest = ref<LatestVersionInfo>()
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
  ).data as LatestVersionInfo
  globalLoading.value?.setProgress(100)
  setTimeout(() => {
    globalLoading.value?.hide()
  }, 1000)
})
function download(path: string[]) {
  var host = window.location.host
  const pathStr = path.join('/')
  const url = `http://${host}/${pathStr}`
  window.open(url, '_blank')
}
function openUrl(url: string | undefined) {
  if (url) {
    window.open(url, '_blank')
  }
}
function formatDate(dates: string) {
  var date = new Date(dates)
  if (Date.now() - date.getTime() < 24 * 60 * 60 * 1000) {
    return (
      Math.floor((Date.now() - date.getTime()) / (60 * 60 * 1000)) +
      '小时' +
      Math.floor(((Date.now() - date.getTime()) / (60 * 1000)) % 60) +
      '分钟前'
    )
  }
  //if less than 7 days ,show * days and * hrs ago
  if (Date.now() - date.getTime() < 7 * 24 * 60 * 60 * 1000) {
    return (
      Math.floor((Date.now() - date.getTime()) / (24 * 60 * 60 * 1000)) +
      '天' +
      Math.floor(((Date.now() - date.getTime()) / (60 * 60 * 1000)) % 24) +
      '小时前'
    )
  }
  return date.toLocaleString('zh-CN', {
    hour12: false
  })
}
</script>
<template>
  <it-loading-bar ref="globalLoading" global teleport="head" />
  <div v-if="latest">
    <it-tabs>
      <it-tab title="最新版本">
        <div class="grid place-items-center mt-10">
          <h1 class="text-2xl">v{{ latest.version }}</h1>
          <div class="grid">
            <span>
              Commit：{{ latest.content }} <br />
              发布时间：{{ formatDate(latest.date) }} <br />
              兼容信息：<br />
              <span class="ml-4"> BDS：{{ latest.bds }} <br /> </span>
              <span class="ml-4"> LL ：{{ latest.ll }} <br /> </span>
              <span class="ml-4"> LL.NET：{{ latest.llnet }} <br /> </span>
              版本：{{ latest.version }}<br />
            </span>
            <it-button
              class="m-1"
              :class="{
                'btn-explode': file.name.endsWith('.zip')
              }"
              v-for="file in latest?.files"
              outlined
              variant="primary"
              @click="() => download(file.path)"
            >
              {{ file.name }}<br />
              也就 {{ (file.size / 1024 / 1024).toFixed(1) }} MB
            </it-button>
            <it-button class="m-1" outlined variant="success" @click="() => openUrl(latest?.url)">
              GitHub发布地址
            </it-button>
          </div>
        </div>
      </it-tab>
      <it-tab title="历史版本">
        <histversion />
      </it-tab>
    </it-tabs>
  </div>
  <loading v-else message="正在获取最新版本" />
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
