<script setup lang="ts">
defineProps<{
  principalText: string
  secondaryText: string
}>()
</script>

<template>
  <h2 class="section-title">
    <span class="section-title__highlight">{{ principalText }}</span>
    {{ secondaryText }}
  </h2>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.section-title {
  font-size: 1.125rem;
  font-weight: bold;

  &__highlight {
    color: map.get($text-colors, 'especial-text-color');
  }
}
</style>
