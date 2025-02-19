<script setup lang="ts">
import { useRoute } from 'vue-router'
import StreamerDescription from '~/components/streamerpage-components/StreamerDescription.vue'
import { useStreamsStore } from '~/stores/streams'
import { useUsersStore } from '~/stores/users'

definePageMeta({
  layout: 'chat-layout',
})

const route = useRoute()
const username = route.params.username as string

const streamsStore = useStreamsStore()
const usersStore = useUsersStore()

const userStream = computed(() =>
  streamsStore.getStreams.find(
    (stream) => stream.user_name.toLowerCase() === username.toLowerCase(),
  ),
)

const userInfo = computed(() => usersStore.getUsers[userStream.value?.user_id || ''])

const isLoading = computed(() => streamsStore.loading || usersStore.loading)
</script>

<template>
  <div class="streamer-page">
    <div v-if="!userStream || isLoading" class="loading-container">
      <div class="spinner" />
    </div>
    <ClientOnly v-else>
      <StreamerpageComponentsVideoDisplayer :thumbnail="userStream?.thumbnail_url || ''" />
      <StreamerpageComponentsStreamerInfo
        :username="userStream!.user_name"
        :title="userStream!.title"
        :category="userStream!.game_name"
        :avatar="userInfo?.profile_image_url || ''"
        :tags="userStream!.tags"
        :viewers="userStream!.viewer_count"
        :time="'3:23:05'"
      />
      <h2 class="title">About {{ userStream!.user_name }}</h2>
      <StreamerDescription :description="userInfo.description" :viewers="userInfo.view_count" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/styles/vars.scss' as *;
@use '@/assets/styles/main.scss' as *;

.streamer-page {
  min-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: start;
  align-self: flex-start;
  padding-bottom: 1rem;
}

.spinner {
  padding: 3rem;
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
