<template>
  <div v-if="list">
    <it-collapse>
      <it-collapse-item :title="formatTitle(item)" v-for="item in list">
        <download-item :item="item" />
      </it-collapse-item>
    </it-collapse>
  </div>
  <div v-else>
    <loading-page message="正在获取历史版本" />
  </div>
</template>
<style scoped></style>
<script lang="ts" setup>
import DownloadItem from '../componment/DownloadItem.vue'
import loadingPage from './LoadingPage.vue'
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
import type { VersionInfo } from './interface'
type VersionList = Record<string, VersionInfo>
const list = ref<VersionList>()
onMounted(async () => {
  list.value = reactive(
    await axios({
      method: 'get',
      url: '/update/versions.json',
      responseType: 'json'
    })
  ).data as VersionList
})
import { formatDate } from './utils'
function formatTitle(item: VersionInfo) {
  return `v${item.version} (${formatDate(item.date)})`
}
</script>
