<script setup lang="ts">
import Button from '@/components/MainButtons.vue'
import texts from '@/assets/data/texts.json'
import { ref } from 'vue'

const notificationCount = ref(63)
</script>

<template>
  <div class="navbar">
    <div class="navbar__notification">
      <span class="navbar__notification-counter">{{ notificationCount }}</span>
      <img :src="texts.Icons.Notification" alt="Premium Icon" class="navbar__notification-icon" />
    </div>

    <Button :color="'secondary'">{{ texts.ButtonTexts.loginButton }}</Button>
    <Button :color="'primary'">{{ texts.ButtonTexts.signUpButton }}</Button>

    <img :src="texts.Icons.Profile" alt="User Icon" class="navbar__notification-userIcon" />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.navbar {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__notification {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &-icon {
      width: 2rem;
      height: 2rem;
      margin: 0.25em 0.4rem;
      filter: invert(1);
    }

    &-counter {
      position: absolute;
      top: -0.45em;
      right: -0.5em;
      background-color: red;
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
      padding: 0.15em 0.4rem;
      border-radius: 50%;
      min-width: 1.25rem;
      min-height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }
  }

  &__notification-userIcon {
    width: 1.875rem;
    height: 1.875rem;
    filter: invert(1);
  }
}
</style>
