<script setup lang="ts">
import texts from '@/assets/data/texts.json'

const channels = [
  { username: 'Miduncy', game: 'Coding Live', viewers: '2.3K' },
  { username: 'Miduxokas', game: 'Debugging Sessions', viewers: '1.1K' },
  { username: 'Midubai', game: 'Frontend Fun', viewers: '50K' },
]
</script>

<template>
  <section class="recommended-channels">
    <div class="recommended-channels__header">
      <span>{{ texts.LeftSideBarTexts.recomChan }}</span>
      <img
        src="/public/icons/collapse.svg"
        alt="Collapse Icon"
        class="recommended-channels__collapse-icon"
      />
    </div>

    <div class="recommended-channels__list">
      <LeftsidebarComponentsRecomendedChanels
        v-for="channel in channels"
        :key="channel.username"
        :username="channel.username"
        :game="channel.game"
        :viewers="channel.viewers"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;

.recommended-channels {
  width: 16.25rem;
  min-width: 16.25rem;
  border-radius: 0.5rem;
  margin: 0.625rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 0.8125rem;
    padding: 0.625rem 0.3125rem;
  }

  &__collapse-icon {
    width: 1.25rem;
    height: 1.25rem;
    filter: invert(1);
    cursor: pointer;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }
}
</style>
