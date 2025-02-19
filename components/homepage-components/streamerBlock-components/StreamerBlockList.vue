<script setup lang="ts">
import { useUsersStore } from '~/stores/users'
import type { TwitchStream } from '~/server/api/streams'

defineProps<{ chunk: TwitchStream[] }>()

const usersStore = useUsersStore()
await usersStore.fetchUsers()
</script>

<template>
  <div class="streams-grid">
    <div class="streams-grid__content">
      <HomepageComponentsStreamerBlockComponentsStreamerBox
        v-for="channel in chunk"
        :key="channel.id"
        :username="channel.user_name"
        :title="channel.title"
        :game="channel.game_name"
        :thumbnail="channel.thumbnail_url"
        :tags="channel.tags"
        :avatar="usersStore.getUsers[channel.user_id]?.profile_image_url || ''"
      />
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

  @include responsive('md') {
    flex-direction: column;
    align-items: center;
  }
}

.streams-grid__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  gap: 0.625rem;

  @include responsive('md') {
    flex-wrap: wrap;
    justify-content: start;
  }

  @include responsive('sm') {
    flex-direction: column;
    align-items: start;
  }
}
</style>
