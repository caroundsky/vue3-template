<template>
  <article class="card" :data-id="item.id">
    <div class="cover" v-if="!noImage">
      <Transition>
        <img v-if="loaded" :src="item.url" alt="图片" @click="() => show(item)" />
      </Transition>
    </div>
    <div class="body" v-if="!onlyImage">
      <h3>
        {{ item.name }}
        <span>{{ item.time_range }}</span>
      </h3>
      <p v-if="item.desc" :title="item.desc">{{ item.desc }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { api as viewerApi } from "v-viewer"

interface ItemOption {
  id: number
  name: string
  url: string
  width: number
  height: number
  desc: string
  time_range: string
}

const props = withDefaults(
  defineProps<{
    item: ItemOption
    onlyImage?: boolean
    noImage?: boolean
    width?: string
    desc?: string
  }>(),
  {
    onlyImage: false,
    noImage: false,
    width: '100%',
    desc: ''
  }
)

const loaded = ref(false)
const height = ref('auto')

onBeforeMount(() => {
  if (!props.noImage) {
    height.value = '100%'
    new Promise((resolve, reject) => {
      const image = new Image()

      image.onload = () => {
        loaded.value = true
        resolve(true)
      }

      image.onerror = error => {
        console.error(props.item.url, error)
        loaded.value = true
        resolve(true)
      }

      image.src = props.item.url
    })
  }
})

function show({ url, name }: any) {
  viewerApi({
    images: [url],
    options: {
      zoomRatio: 0.3,
      title: (image: any, imageData: any) => {
        return `${name} (${imageData.naturalWidth} × ${imageData.naturalHeight})`
      }
    }
  })
}
</script>

<style scoped lang="less">
.card {
  display: flex;
  flex-direction: column;
  width: v-bind(width);
  height: v-bind(height);
  overflow: hidden;
  background: white;
  border: 1px solid #e3e8f7;
  border-radius: 10px;

  .cover {
    flex: 1;
    flex-shrink: 0;
    width: 100%;
    height: 100%;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .body {
    flex-shrink: 0;
    box-sizing: border-box;
    height: fit-content;
    padding: 12px;
    text-align: left;

    h3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
      font-weight: bolder;
      font-size: 14px;
      span {
        font-size: 12px;
        color: #666;
      }
    }

    p {
      font-size: 13px;
      color: #333;
      margin-top: 10px;
      overflow: hidden; 
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.4s linear;
  will-change: opacity;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  will-change: opacity;
}
</style>
