<template>
  <div class="caround-wrap" style="display: flex; flex-direction: column; min-height: 100%;">
    <div>
      <div class="caround-tab">tab</div>
      <div class="caround-images">
        <VirtualWaterfall
            :virtual="waterfallOption.virtual"
            :gap="waterfallOption.gap"
            :padding="waterfallOption.padding"
            :preload-screen-count="[waterfallOption.topPreloadScreenCount, waterfallOption.bottomPreloadScreenCount]"
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
  </div>
</template>

<script setup lang="ts">
import { VirtualWaterfall } from '@lhlyu/vue-virtual-waterfall'
import useWaterfall from '@/components/useWaterfall'

const { waterfallOption, data, calcItemHeight } = useWaterfall()
</script>

<style lang="less">
.caround-wrap {
  background: radial-gradient(circle farthest-corner at center top,#f7fffc 0,#eef3fb 100%);
  &>div {
    max-width: 1200px;
    min-width: 800px;
    width: 80%;
    margin: 0 auto;
  }
}
.caround-images {
  flex: 1;
}
</style>
