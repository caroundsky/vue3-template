<template>
  <div class="caround-wrap" style="display: flex; flex-direction: column; height: 100%">
    <div class="caround-tab">tab</div>
    <div class="caround-images" ref="el">
      <VirtualWaterfall
          :virtual="waterfallOption.virtual"
          :gap="waterfallOption.gap"
          :preload-screen-count="waterfallOption.preloadScreenCount"
          :item-min-width="waterfallOption.itemMinWidth"
          :max-column-count="waterfallOption.maxColumnCount"
          :min-column-count="waterfallOption.minColumnCount"
          :calc-item-height="calcItemHeight"
          :items="data.list"
        >
          <template #default="scope">
              <Card v-if="scope?.item" :item="scope.item" :only-image="waterfallOption.onlyImage"> </Card>
          </template>
        </VirtualWaterfall>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VirtualWaterfall } from '@lhlyu/vue-virtual-waterfall'
import useWaterfall from '@/components/useWaterfall'

import { getImages } from '@/api/main'

const { el, waterfallOption, data, calcItemHeight } = useWaterfall()
const pageIndex = ref(2)

onMounted(() => {
  // setInterval(() => {
    // getImages({ pageIndex: pageIndex.value++, pageSize: 20 }).then((res) => {
    //   console.log(res)
    // })
  // }, 1000);
})
</script>

<style lang="less">
.caround-images {
  flex: 1;
}
</style>
