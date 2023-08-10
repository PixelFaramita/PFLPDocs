<script lang="ts" setup>
import { ref, onMounted, reactive, type ComponentPublicInstance } from 'vue'
//https://d.mcpf.live/update/latest.json
import axios from 'axios'
import type { LatestVersionInfo } from './interface'
const latest = ref<LatestVersionInfo>()
import { Loadingbar } from 'equal-vue'
const globalLoading = ref<ComponentPublicInstance<InstanceType<typeof Loadingbar>>>()
onMounted(async () => {
  globalLoading.value?.show()
  globalLoading.value?.setProgress(10)
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
  }, 500)
})
function download(path: string[]) {
  var host = window.location.host
  const pathStr = path.join('/')
  const url = `http://${host}/${pathStr}`
  window.open(url)
}
function openUrl(url: string | undefined) {
  if (url) {
    window.open(url)
  }
}
</script>
<template>
  <it-loading-bar ref="globalLoading" global teleport="head" />
  <div v-if="latest">
    <h2 class="center">最新版本：{{ latest.version }}</h2>
    构建日期：{{ latest.date }} <br />
    BDS：{{ latest.bds }} <br />
    LL ：{{ latest.ll }} <br />
    LL.NET：{{ latest.llnet }} <br />
    版本：{{ latest.version }}<br />
    <div v-for="file in latest?.files">
      <it-button outlined variant="primary" @click="() => download(file.path)">
        下载 {{ file.name }} 大小 {{ (file.size / 1024 / 1024).toFixed(1) }} MB</it-button
      >
    </div>
    <it-button outlined variant="success" @click="() => openUrl(latest?.url)">
      GitHub发布地址
    </it-button>
  </div>
  <div v-else>
    <h2 class="center">正在获取最新版本</h2>
  </div>
</template>
