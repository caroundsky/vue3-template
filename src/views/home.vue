<template>
  <div class="caround-wrap" style="display: flex; flex-direction: column; min-height: 100%;">
    <div>
      <div class="caround-tab">
        <div v-for="item in tagList" :key="item.id" class="caround-tab_item">{{ item.tag }}</div>
      </div>
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
import { getTag } from '@/api/main'

const { waterfallOption, data, calcItemHeight } = useWaterfall()

const tagList = ref<any>([])
getTag().then(({ result }) => {
  tagList.value = result
})

onMounted(() => {

})

</script>

<style lang="less">
.caround-wrap {
  background: radial-gradient(circle farthest-corner at center top, #f7fffc 0, #eef3fb 100%);

  &>div {
    max-width: 1300px;
    min-width: 800px;
    width: 85%;
    margin: 0 auto;
  }
}

.caround-tab {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0 10px;
  &_item {
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
}

.caround-images {
  flex: 1;
}
</style>
