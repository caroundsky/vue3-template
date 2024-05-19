<template>
  <header class="caround-navbar">
    <div class="caround-icon">
      <img :src="lemon" style="max-width: 100%" />
    </div>
    <div class="navbar-wrapper">
      <div
        v-for="item in tagList"
        :key="item.id"
        :class="['caround-tab_item', { cur: tabActive === item.id }]"
        @click="() => handleTab(item.id)"
      >
        {{ item.tag }}
      </div>
    </div>
    <div class="caround-sort" title="排序">
      <el-dropdown trigger="click" @command="handleCommand">
        <img :src="sort" style="max-width: 100%" />
        <template #dropdown>
          <el-dropdown-menu style="font-size: 12px">
            <el-dropdown-item
              :icon="Refresh"
              command="shuffle"
              :class="['caround-sort-item', { cur: orderActive === 'shuffle' }]"
            >
              随机
            </el-dropdown-item>
            <el-dropdown-item
              :icon="Top"
              command="asc"
              :class="['caround-sort-item', { cur: orderActive === 'asc' }]"
            >
              时间升序
            </el-dropdown-item>
            <el-dropdown-item
              :icon="Bottom"
              command="desc"
              :class="['caround-sort-item', { cur: orderActive === 'desc' }]"
            >
              时间倒序
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
  <div class="caround-wrap" style="display: flex; flex-direction: column">
    <div>
      <div class="caround-images">
        <VirtualWaterfall
          :virtual="waterfallOption.virtual"
          :gap="waterfallOption.gap"
          :padding="waterfallOption.padding"
          :preload-screen-count="[
            waterfallOption.topPreloadScreenCount,
            waterfallOption.bottomPreloadScreenCount,
          ]"
          :item-min-width="waterfallOption.itemMinWidth"
          :max-column-count="waterfallOption.maxColumnCount"
          :min-column-count="waterfallOption.minColumnCount"
          :calc-item-height="calcItemHeight"
          :items="data.list"
        >
          <template #default="scope">
            <Card
              v-if="scope?.item"
              :item="scope.item"
              :only-image="waterfallOption.onlyImage"
            ></Card>
          </template>
        </VirtualWaterfall>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import lemon from '@/assets/lemon.svg'
import sort from '@/assets/sort.svg'
import { Top, Bottom, Refresh } from '@element-plus/icons-vue'

import { VirtualWaterfall } from '@lhlyu/vue-virtual-waterfall'
import useWaterfall from '@/components/useWaterfall'
import { getTag } from '@/api/main'

const { waterfallOption, data, reset, calcItemHeight } = useWaterfall()

const tagList = ref<any>([])
getTag().then(({ result }) => {
  tagList.value = [
    {
      id: -1,
      tag: '全部',
    },
  ].concat(result)
})

const orderActive = ref('shuffle')
function handleCommand(order: 'shuffle' | 'asc' | 'desc') {
  if (orderActive.value === order) return
  orderActive.value = order
  reset()
  data.order = order
}

const tabActive = ref(-1)
function handleTab(id: number) {
  if (tabActive.value === id) return
  tabActive.value = id
  reset()
  data.tag = id
}

onMounted(() => {})
</script>

<style lang="less">
.caround-icon {
  position: absolute;
  left: 1%;
  top: 8px;
  width: 30px;
}

.caround-sort {
  position: absolute;
  right: 1%;
  top: 10px;
  width: 26px;
  cursor: pointer;
  &-item.cur {
    color: #409eff;
  }
}

.caround-wrap {
  & > div {
    width: 85%;
    margin: 0 auto;
  }
}

.caround-navbar {
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #dcdfe6;
  box-shadow: 1px -1px 5px #dcdfe6;

  .navbar-wrapper {
    display: flex;
    width: 80%;
    height: 46px;
    padding: 0 10px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
  }

  &_item {
    margin-right: 10px;

    :last-child {
      margin-right: 0;
    }
  }
}

.caround-tab_item {
  cursor: pointer;
  &.cur {
    color: #409eff;
  }
}

.caround-images {
  flex: 1;
}

@media only screen and (max-width: 600px) {
  .caround-wrap {
    & > div {
      width: 100%;
    }
  }
}
</style>
