<script setup lang="ts">
defineProps<{
  label: string
  options: readonly { value: string; label: string }[]
}>()

const model = defineModel<string>({ required: true })
</script>

<template>
  <div class="picker">
    <span class="picker-label">{{ label }}</span>
    <div class="picker-options">
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        class="picker-option"
        :class="{ selected: option.value === model }"
        @click="model = option.value"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.picker {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.picker-label {
  font-size: 0.8125rem;
  color: #6b6b70;
}

.picker-options {
  display: flex;
  gap: 0.375rem;
}

.picker-option {
  padding: 0.375rem 0.75rem;
  border: 1px solid #d9d9de;
  border-radius: 0.5rem;
  background: #fff;
  font-size: 0.8125rem;
  cursor: pointer;
}

.picker-option:hover {
  border-color: #a5a5ac;
}

.picker-option.selected {
  border-color: #26262b;
  background: #26262b;
  color: #fff;
}
</style>
