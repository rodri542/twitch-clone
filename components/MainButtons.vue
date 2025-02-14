<script setup lang="ts">
defineProps<{
  color?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button class="btn" :class="`btn--${color}`">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '/assets/styles/vars' as *;

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  font-size: 0.8125em;
  font-weight: bold;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.1s;
  color: white;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }

  @each $name, $color in $button-colors {
    &--#{$name} {
      background-color: $color;
    }
  }
}
</style>
