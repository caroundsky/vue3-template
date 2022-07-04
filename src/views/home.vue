<template>
  <div @click="jumpDemo">home</div>
</template>

<script setup lang="ts">
const router = useRouter()

function jumpDemo() {
  router.push({
    name: 'demo',
  })
}
</script>
