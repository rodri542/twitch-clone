<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { TwitchStream } from '~/server/api/streams'
import type { TwitchUser } from '~/server/api/users'

const { data: streamsData, status, error } = useFetch<TwitchStream[]>('/api/streams')
const channels = ref<TwitchStream[]>([])
const users = ref<{ [key: string]: TwitchUser }>({})

watchEffect(async () => {
  if (streamsData.value) {
    channels.value = streamsData.value.slice(0, 3)

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
</script>

<template>
  <div class="streams-grid">
    <div v-if="status === 'pending'" class="loading-container">
      <div class="spinner" />
    </div>
    <div v-else-if="error" class="error-text">Error loading channels</div>
    <div v-else class="streams-grid__content">
      <ClientOnly>
        <HomepageComponentsStreamerBlockComponentsStreamerBox
          v-for="channel in channels"
          :key="channel.id"
          :username="channel.user_name"
          :title="channel.title"
          :game="channel.game_name"
          :thumbnail="channel.thumbnail_url"
          :tags="channel.tags"
          :avatar="users[channel.user_id]?.profile_image_url || ''"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;
@use '@/assets/styles/main.scss' as *;

.streams-grid {
  display: flex;
  width: 100%;
  padding: 0.75rem 0;
}

.streams-grid__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  gap: 0.625rem;
}

.loading-container {
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.spinner {
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid map.get($button-colors, 'secondary');
  border-top-color: map.get($button-colors, 'primary');
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
</style>
