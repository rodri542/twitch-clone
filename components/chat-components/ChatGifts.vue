<script setup lang="ts">
import texts from '@/assets/data/texts.json'
</script>

<template>
  <div class="gift-banner">
    <div class="gift-banner__container">
      <button class="gift-banner__nav gift-banner__nav--prev">
        <img :src="texts.Icons.arrow" alt="Previous" class="gift-banner__icon" />
      </button>

      <div class="gift-banner__content">
        <img :src="texts.Images.Gift" alt="Gift" class="gift-banner__gift-icon" />
        <span class="gift-banner__text">{{ texts.StreamPageTexts.giftSub }}</span>
      </div>

      <button class="gift-banner__nav gift-banner__nav--next">
        <img :src="texts.Icons.arrow" alt="Next" class="gift-banner__icon-r" />
      </button>
    </div>

    <ChatComponentsChat />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.gift-banner {
  padding: 0 1rem;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 0.0625rem solid map-get($bg-colors, 'lines-colors');
  }

  &__nav {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      opacity: 0.7;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__gift-icon {
    width: 2rem;
    height: 2rem;
  }

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
    transform: rotateY(180deg);
  }

  &__icon-r {
    width: 1.5rem;
    height: 1.5rem;
  }

  &__text {
    color: map-get($text-colors, 'especial-text-color');
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
}
</style>
