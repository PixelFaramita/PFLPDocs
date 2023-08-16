<template>
  <div class="justify-between flex">
    <it-select
      class="mx-1"
      track-by="key"
      label-top="筛选BDS版本"
      v-model="versionsSelected"
      :options="versions"
    />
    <it-input label-top="筛选更多信息" v-model="filterStr" />
    <it-button class="mt-6 mx-1" @click="reset"> 重置 </it-button>
  </div>
  <div v-if="list">
    <it-collapse v-if="listVisable">
      <it-collapse-item class="mx-1 my-2" v-for="item in listVisable">
        <template #title>
          v{{ item.version }} <span class="mx-2">{{ formatDate(item.date) }}</span></template
        >
        <download-item :item="item" />
      </it-collapse-item>
    </it-collapse>
    <div v-else>空空如也</div>
  </div>
  <div v-else>
    <loading-page message="正在获取历史版本" />
  </div>
</template>
<style scoped></style>
<script lang="ts" setup>
import DownloadItem from '../componment/DownloadItem.vue'
import loadingPage from './LoadingPage.vue'
import { ref, onMounted, computed, reactive, watch } from 'vue'
import axios from 'axios'
import type { VersionInfo } from './interface'
type VersionList = Record<string, VersionInfo>
const list = ref<VersionInfo[]>()
onMounted(async () => {
  const data = (
    await axios({
      method: 'get',
      url: '/update/versions.json',
      responseType: 'json'
    })
  ).data as VersionList
  const keys = Object.keys(data).reverse()
  //remove the latest version
  keys.pop()
  list.value = keys.map((key) => data[key])
})
import { formatDate } from './utils'
const versions = computed(() => {
  if (!list.value) return []
  var all = list.value
    .map((item) => ({
      name: `${item.bds} LL${item.ll}`,
      key: item.bds
    }))
    .filter((item, index, self) => self.findIndex((t) => t.name === item.name) === index)
  // all.push({
  //   name: '全部',
  //   key: 'all'
  // })
  return all
})
const filterStr = ref('')
const versionsSelected = ref(undefined as { name: string; key: string } | undefined)
const filter = computed(() => {
  return {
    version: versionsSelected.value,
    str: filterStr.value
  }
})
const listVisable = computed(() => {
  if (!list.value) return []
  console.log(filter.value.version)
  return list.value.filter((item) => {
    if (filter.value.version && item.bds !== filter.value.version.key) return false
    if (filter.value.str) {
      const str = filter.value.str.toLowerCase()
      if (
        !(
          item.content?.toLowerCase().includes(str) ||
          item.bds?.toLowerCase().includes(str) ||
          item.ll?.toLowerCase().includes(str) ||
          item.llnet?.toLowerCase().includes(str) ||
          item.version?.toLowerCase().includes(str)
        )
      )
        return false
    }
    return true
  })
})
function reset() {
  filterStr.value = ''
  versionsSelected.value = undefined
}
</script>
