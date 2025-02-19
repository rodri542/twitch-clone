<script setup lang="ts">
defineProps<{
  text: string
  icon: string
  iconName: string
}>()
</script>

<template>
  <button class="category-button">
    <span class="category-button__text">{{ text }}</span>
    <img :src="icon" :alt="iconName" class="category-button__icon" />
    <slot name="icon" />
  </button>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;
@use '@/assets/styles/main.scss' as *;

.category-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14.25rem;
  height: 3.31rem;
  background-color: map.get($button-colors, 'primary');
  border: none;
  border-radius: 0.5rem;
  padding: 0.3125rem 0.625rem;
  padding: 0.3125rem 0.625rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: map.get($text-colors, 'main-text-color');
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &__text {
    z-index: 2;
    line-height: 1;
    text-align: start;
  }

  &__icon {
    width: 4.5rem;
    height: 4.5rem;
  }

  @include responsive('md') {
    width: 12rem;
    height: 2.8rem;
    font-size: 1.2rem;
  }

  @include responsive('sm') {
    width: 10rem;
    height: 2.5rem;
    font-size: 1rem;
    &__icon {
      width: 3rem;
      height: 3rem;
    }
  }

  @include responsive('xs') {
    width: 8.5rem;
    height: 2.2rem;
    font-size: 0.9rem;
    &__icon {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
</style>
