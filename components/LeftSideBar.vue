<script setup lang="ts">
import texts from '@/assets/data/texts.json'
import { useStreamsStore } from '~/stores/streams'
import { useUsersStore } from '~/stores/users'

const streamsStore = useStreamsStore()
const usersStore = useUsersStore()

await streamsStore.fetchStreams()
await usersStore.fetchUsers()

const formatViewers = (count: number) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count.toString()
}
</script>

<template>
  <section class="recommended-channels">
    <div class="recommended-channels__header">
      <span>{{ texts.LeftSideBarTexts.recomChan }}</span>
      <img
        :src="texts.Icons.Collapse"
        alt="Collapse Icon"
        class="recommended-channels__collapse-icon"
      />
    </div>

    <div v-if="streamsStore.loading" class="loading-container">
      <div class="spinner" />
    </div>
    <div v-else-if="streamsStore.error" class="error-text">Error loading channels</div>
    <div v-else class="recommended-channels__list">
      <LeftsidebarComponentsRecomendedChanels
        v-for="channel in streamsStore.getStreams.slice(0, 7)"
        :key="channel.id"
        :username="channel.user_name"
        :game="channel.game_name"
        :viewers="formatViewers(channel.viewer_count)"
        :avatar="usersStore.getUsers[channel.user_id]?.profile_image_url || ''"
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

  .spinner {
    width: 2rem;
    height: 2rem;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
