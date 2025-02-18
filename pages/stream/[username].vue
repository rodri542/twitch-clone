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

// const isLoading = computed(() => streamsStore.loading || usersStore.loading)
</script>

<template>
  <div class="streamer-page">
    <ClientOnly>
      <StreamerpageComponentsVideoDisplayer :thumbnail="userStream!.thumbnail_url" />
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
.streamer-page {
  width: 100%;
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
</style>
