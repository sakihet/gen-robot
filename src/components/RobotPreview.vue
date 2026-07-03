<script setup lang="ts">
import { computed } from 'vue'
import type { RobotConfig } from '../lib/robot'
import { renderRobotSvg } from '../lib/render'

const props = defineProps<{ config: RobotConfig }>()

const svg = computed(() => renderRobotSvg(props.config))
</script>

<template>
  <div class="preview" v-html="svg"></div>
</template>

<style scoped>
.preview {
  width: 16rem;
  height: 16rem;
  display: grid;
  place-items: center;
  border: 1px solid #d9d9de;
  border-radius: 1rem;
  background: repeating-conic-gradient(#f4f4f6 0% 25%, #fff 0% 50%) 0 0 / 2rem 2rem;
}

.preview :deep(svg) {
  width: 12rem;
  height: 12rem;
}
</style>
