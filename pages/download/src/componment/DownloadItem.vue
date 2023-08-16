<template>
  <h1 class="text-2xl">v{{ item.version }}</h1>
  <div class="grid">
    <span>
      Commit：{{ item.content }} <br />
      发布时间：{{ formatDate(item.date) }} <br />
      兼容信息：<br />
      <span class="ml-4"> BDS：{{ item.bds }} <br /> </span>
      <span class="ml-4"> LL ：{{ item.ll }} <br /> </span>
      <span class="ml-4"> LL.NET：{{ item.llnet }} <br /> </span>
      版本：{{ item.version }}<br />
    </span>
    <it-button
      class="m-1"
      :class="{
        'btn-explode': file.name.endsWith('.zip')
      }"
      v-for="file in item?.files"
      outlined
      variant="primary"
      @click="() => download(file)"
    >
      {{ file.name }}<br />
      也就 {{ (file.size / 1024 / 1024).toFixed(1) }} MB
    </it-button>
    <it-button class="m-1" outlined variant="success" @click="() => openUrl(item?.url)">
      GitHub发布地址
    </it-button>
  </div>
</template>
<style scoped></style>
<script lang="ts" setup>
import { type VersionInfo, type File } from '../pages/interface'
const prop = defineProps<{
  item: VersionInfo
}>()
import { formatDate } from '../pages/utils'
function download(file: File) {
  var host = window.location.host
  if (file.path) {
    const pathStr = file.path.join('/')
    const url = `http://${host}/${pathStr}`
    window.open(url, '_blank')
  } else {
    window.open(file.download, '_blank')
  }
}
function openUrl(url: string | undefined) {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>
