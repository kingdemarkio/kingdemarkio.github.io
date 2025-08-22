<script setup>
import { computed } from 'vue'

// access slot content
const slots = defineSlots()

// pick a random child immediately
const chosen = computed(() => {
  const children = slots.default ? slots.default() : []
  if (!children.length) return null
  const idx = Math.floor(Math.random() * children.length)
  return children[idx]
})
</script>

<template>
  <component :is="chosen" v-if="chosen" />
</template>