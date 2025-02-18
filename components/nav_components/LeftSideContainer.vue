<script setup lang="ts">
import texts from '@/assets/data/texts.json'
</script>

<template>
  <NuxtLink to="/" class="left-side">
    <div class="left-side__logo">
      <img
        src="/assets/images/logo_twitch.png"
        alt="Midutch Logo"
        class="left-side__logo-logoimg"
      />
      <span class="left-side__logo-text">{{ texts.navText.navLeftSideText }}</span>
      <img :src="texts.Icons.More" alt="Midutch Logo" class="left-side__logo-moresvg" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.left-side {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.5em;

    &-logoimg {
      width: 1.75em;
      height: 1.75em;
      margin: 0.125em;
    }

    &-moresvg {
      width: 1.75em;
      height: 1.75em;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3125em;
      filter: invert(1);
    }
  }
}
</style>
