<script setup lang="ts">
import { reactive } from 'vue'
import PartPicker from './components/PartPicker.vue'
import RobotPreview from './components/RobotPreview.vue'
import { downloadPng, downloadSvg } from './lib/export'
import { renderRobotSvg } from './lib/render'
import { COLORS, FACE_COLORS, randomConfig } from './lib/robot'

const config = reactive(randomConfig())

const headOptions = [
  { value: 'square', label: 'Square' },
  { value: 'circle', label: 'Circle' },
  { value: 'trapezoid', label: 'Trapezoid' },
  { value: 'hexagon', label: 'Hexagon' },
  { value: 'arch', label: 'Arch' },
  { value: 'inverted', label: 'Inverted' },
  { value: 'tall', label: 'Tall' },
] as const

const eyesOptions = [
  { value: 'square', label: 'Square' },
  { value: 'circle', label: 'Circle' },
  { value: 'visor', label: 'Visor' },
  { value: 'scan', label: 'Scan' },
  { value: 'split', label: 'Split' },
  { value: 'mono', label: 'Mono' },
  { value: 'monosquare', label: 'Mono Sq' },
  { value: 'lens', label: 'Lens' },
  { value: 'triple', label: 'Triple' },
  { value: 'slit', label: 'Slit' },
  { value: 'goggle', label: 'Goggle' },
] as const

const mouthOptions = [
  { value: 'line', label: 'Line' },
  { value: 'grill', label: 'Grill' },
  { value: 'zigzag', label: 'Zigzag' },
  { value: 'teeth', label: 'Teeth' },
  { value: 'dots', label: 'Dots' },
] as const

const antennaOptions = [
  { value: 'ball', label: 'Single' },
  { value: 'double', label: 'Double' },
  { value: 'loop', label: 'Loop' },
  { value: 'zigzag', label: 'Zigzag' },
  { value: 'vee', label: 'V' },
  { value: 'dish', label: 'Dish' },
  { value: 'tee', label: 'Tee' },
  { value: 'coil', label: 'Coil' },
  { value: 'blade', label: 'Blade' },
  { value: 'mast', label: 'Mast' },
  { value: 'scope', label: 'Scope' },
  { value: 'beacon', label: 'Beacon' },
  { value: 'none', label: 'None' },
] as const

const earsOptions = [
  { value: 'none', label: 'None' },
  { value: 'bolt', label: 'Bolt' },
  { value: 'round', label: 'Round' },
  { value: 'pin', label: 'Pin' },
  { value: 'fin', label: 'Fin' },
  { value: 'hex', label: 'Hex' },
  { value: 'vent', label: 'Vent' },
  { value: 'bracket', label: 'Bracket' },
] as const

const neckOptions = [
  { value: 'plain', label: 'Plain' },
  { value: 'duct', label: 'Duct' },
  { value: 'twin', label: 'Twin' },
  { value: 'ball', label: 'Ball' },
  { value: 'collar', label: 'Collar' },
] as const

const bodyOptions = [
  { value: 'square', label: 'Square' },
  { value: 'round', label: 'Round' },
  { value: 'trapezoid', label: 'Trapezoid' },
  { value: 'inverted', label: 'Inverted' },
  { value: 'hexagon', label: 'Hexagon' },
  { value: 'capsule', label: 'Capsule' },
  { value: 'wide', label: 'Wide' },
  { value: 'dome', label: 'Dome' },
  { value: 'barrel', label: 'Barrel' },
  { value: 'broad', label: 'Broad' },
] as const

const chestOptions = [
  { value: 'none', label: 'None' },
  { value: 'buttons', label: 'Buttons' },
  { value: 'screen', label: 'Screen' },
  { value: 'core', label: 'Core' },
  { value: 'hazard', label: 'Hazard' },
  { value: 'vent', label: 'Vent' },
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
    <div class="header">
      <h1 class="title">GEN ROBOT</h1>
      <p class="tagline">MAKE MORE OF US.</p>
    </div>
    <div class="layout">
      <RobotPreview :config="config" />
      <div class="controls">
        <PartPicker v-model="config.head" label="Head" :options="headOptions" />
        <PartPicker v-model="config.eyes" label="Eyes" :options="eyesOptions" />
        <PartPicker v-model="config.mouth" label="Mouth" :options="mouthOptions" />
        <PartPicker v-model="config.antenna" label="Antenna" :options="antennaOptions" />
        <PartPicker v-model="config.ears" label="Ears" :options="earsOptions" />
        <PartPicker v-model="config.neck" label="Neck" :options="neckOptions" />
        <PartPicker v-model="config.body" label="Body" :options="bodyOptions" />
        <PartPicker v-model="config.chest" label="Chest" :options="chestOptions" />
        <div class="picker">
          <span class="picker-label">Base color</span>
          <div class="swatches">
            <button
              v-for="color in FACE_COLORS"
              :key="color"
              type="button"
              class="swatch"
              :class="{ selected: color === config.faceColor }"
              :style="{ background: color }"
              :aria-label="color"
              @click="config.faceColor = color"
            ></button>
          </div>
        </div>
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
    <footer class="footer">
      <a class="footer-link" href="https://github.com/sakihet/gen-robot" target="_blank" rel="noopener">GitHub</a>
    </footer>
  </main>
</template>

<style scoped>
.app {
  max-width: 44rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0;
}

.tagline {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #6b6b70;
}

.layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.controls {
  flex: 1;
  min-width: 14rem;
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
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.15);
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

.footer {
  padding-top: 0.5rem;
  font-size: 0.8125rem;
}

.footer-link {
  color: #6b6b70;
}

.footer-link:hover {
  color: #26262b;
}
</style>
