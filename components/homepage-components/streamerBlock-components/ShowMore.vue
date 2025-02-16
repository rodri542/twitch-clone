<script setup lang="ts">
import texts from '@/assets/data/texts.json'
</script>

<template>
  <div class="show-more">
    <div class="show-more__line" />
    <button class="show-more__button">
      {{ texts.HomePageTexts.ShMor }}
      <img :src="texts.Icons.Down" alt="User Icon" class="show-more__icon" />
    </button>
    <div class="show-more__line" />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.show-more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  gap: 0.625rem;
  color: map.get($text-colors, 'main-text-color');

  &__line {
    flex: 1;
    height: 1px;
    background-color: map.get($bg-colors, 'lines-colors');
    opacity: 0.48;
  }

  &__button {
    background: none;
    border: none;
    color: map.get($button-colors, 'primary');
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.3125rem;

    &:hover {
      opacity: 0.8;
    }
  }

  &__icon {
    width: 1rem;
    filter: invert(1);
  }
}
</style>
