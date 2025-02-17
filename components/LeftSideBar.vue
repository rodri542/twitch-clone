<script setup lang="ts">
import texts from '@/assets/data/texts.json'
import { ref, watchEffect } from 'vue'
import type { TwitchStream } from '~/server/api/streams'
import type { TwitchUser } from '~/server/api/users'

const { data: streamsData, status, error } = useFetch<TwitchStream[]>('/api/streams')
const channels = ref<TwitchStream[]>([])
const users = ref<{ [key: string]: TwitchUser }>({})

watchEffect(async () => {
  if (streamsData.value) {
    channels.value = streamsData.value.slice(0, 7)

    const userIds = channels.value.map((stream) => stream.user_id)

    if (userIds.length > 0) {
      try {
        const usersData = await $fetch<TwitchUser[]>(`/api/users?ids=${userIds.join(',')}`)
        users.value = Object.fromEntries(usersData.map((user) => [user.id, user]))
      } catch {
        throw new Error('Error fetching users:')
      }
    }
  }
})

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

    <div v-if="status === 'pending'" class="loading-container">
      <div class="spinner" />
    </div>
    <div v-else-if="error" class="error-text">Error loading channels</div>
    <div v-else class="recommended-channels__list">
      <ClientOnly>
        <LeftsidebarComponentsRecomendedChanels
          v-for="channel in channels"
          :key="channel.id"
          :username="channel.user_name"
          :game="channel.game_name"
          :viewers="formatViewers(channel.viewer_count)"
          :avatar="users[channel.user_id]?.profile_image_url || ''"
        />
      </ClientOnly>
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
