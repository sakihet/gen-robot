<script setup lang="ts">
import { reactive } from 'vue'
import PartPicker from './components/PartPicker.vue'
import RobotPreview from './components/RobotPreview.vue'
import { downloadPng, downloadSvg } from './lib/export'
import { renderRobotSvg } from './lib/render'
import { COLORS, defaultConfig, randomConfig } from './lib/robot'

const config = reactive(defaultConfig())

const headOptions = [
  { value: 'square', label: 'Square' },
  { value: 'circle', label: 'Circle' },
  { value: 'trapezoid', label: 'Trapezoid' },
] as const

const eyesOptions = [
  { value: 'square', label: 'Square' },
  { value: 'circle', label: 'Circle' },
  { value: 'visor', label: 'Visor' },
] as const

const mouthOptions = [
  { value: 'line', label: 'Line' },
  { value: 'grill', label: 'Grill' },
  { value: 'smile', label: 'Smile' },
] as const

const antennaOptions = [
  { value: 'ball', label: 'Single' },
  { value: 'double', label: 'Double' },
  { value: 'none', label: 'None' },
] as const

const earsOptions = [
  { value: 'none', label: 'None' },
  { value: 'bolt', label: 'Bolt' },
] as const

function randomize() {
  Object.assign(config, randomConfig())
}

function saveSvg() {
  downloadSvg(renderRobotSvg(config), 'robot.svg')
}

function savePng() {
  downloadPng(renderRobotSvg(config), 512, 'robot.png')
}
</script>

<template>
  <main class="app">
    <h1 class="title">gen-robot</h1>
    <div class="layout">
      <RobotPreview :config="config" />
      <div class="controls">
        <PartPicker v-model="config.head" label="Head" :options="headOptions" />
        <PartPicker v-model="config.eyes" label="Eyes" :options="eyesOptions" />
        <PartPicker v-model="config.mouth" label="Mouth" :options="mouthOptions" />
        <PartPicker v-model="config.antenna" label="Antenna" :options="antennaOptions" />
        <PartPicker v-model="config.ears" label="Ears" :options="earsOptions" />
        <div class="picker">
          <span class="picker-label">Eye color</span>
          <div class="swatches">
            <button
              v-for="color in COLORS"
              :key="color"
              type="button"
              class="swatch"
              :class="{ selected: color === config.eyeColor }"
              :style="{ background: color }"
              :aria-label="color"
              @click="config.eyeColor = color"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button type="button" class="action" @click="randomize">Random</button>
      <button type="button" class="action" @click="saveSvg">Save SVG</button>
      <button type="button" class="action" @click="savePng">Save PNG (512px)</button>
    </div>
  </main>
</template>

<style scoped>
.app {
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.picker {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.picker-label {
  font-size: 0.8125rem;
  color: #6b6b70;
}

.swatches {
  display: flex;
  gap: 0.375rem;
}

.swatch {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
}

.swatch.selected {
  border-color: #26262b;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.action {
  padding: 0.5rem 1rem;
  border: 1px solid #d9d9de;
  border-radius: 0.5rem;
  background: #fff;
  font-size: 0.875rem;
  cursor: pointer;
}

.action:hover {
  border-color: #a5a5ac;
}
</style>
