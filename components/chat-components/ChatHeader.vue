<script setup lang="ts">
import texts from '@/assets/data/texts.json'
</script>

<template>
  <div class="chat-header">
    <div class="chat-header__container">
      <button class="chat-header__back">
        <img :src="texts.Icons.Collapse" alt="Back" class="chat-header__icon" />
      </button>
      <h1 class="chat-header__title">{{ texts.StreamPageTexts.schat }}</h1>
      <button class="chat-header__community">
        <img :src="texts.Icons.persons" alt="Community" class="chat-header__icon--P" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.chat-header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 0.0625rem solid map-get($bg-colors, 'lines-colors');
  }

  &__back,
  &__community {
    background: transparent;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.7;
    }
  }

  &__icon {
    width: 1.25rem;
    height: 1.25rem;
    filter: invert(1);
    transform: rotatey(180deg);
  }

  &__title {
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.05em;
  }
}
</style>
