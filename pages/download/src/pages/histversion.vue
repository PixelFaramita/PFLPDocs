<template>
  <div v-if="list">
    <it-collapse>
      <it-collapse-item title="Title 1">
        The First Things First manifesto was written 29 November 1963 and published in 1964 by Ken
        Garland. It was backed by over 400 graphic designers and artists and also received the
        backing of Tony Benn, radical left-wing MP and activist, who published it in its entirety in
        The Guardian newspaper.
      </it-collapse-item>
      <it-collapse-item title="Title 2">
        Reacting against a rich and affluent Britain of the 1960s, it tried to re-radicalise a
        design industry which the signatories felt had become lazy and uncritical. Drawing on ideas
        shared by critical theory, the Frankfurt School, and the counter-culture of the time, it
        explicitly reaffirmed the belief that design is not a neutral, value-free process.
      </it-collapse-item>
      <it-collapse-item title="Title 3">
        It rallied against the consumerist culture that was purely concerned with buying and selling
        things and tried to highlight a Humanist dimension to graphic design theory. It was later
        updated and republished with a new group of signatories as the First Things First 2000
        manifesto.
      </it-collapse-item>
      <it-collapse-item title="Title 4"> Try Equal UI, you'll like it </it-collapse-item>
    </it-collapse>
  </div>
  <div v-else>
    <loading message="正在获取历史版本" />
  </div>
</template>
<style scoped></style>
<script lang="ts" setup>
import loading from './loading.vue'
import { ref } from 'vue'
import type { LatestVersionInfo } from './interface'
const list = ref<Record<string, LatestVersionInfo>>()
</script>
