<script setup lang="ts">
import { useRoute } from 'vue-router'
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
      <StreamerpageComponentsVideodisplayer :thumbnail="userStream!.thumbnail_url" />
      <StreamerpageComponentsStreamerinfo
        :username="userStream!.user_name"
        :title="userStream!.title"
        :category="userStream!.game_name"
        :avatar="userInfo?.profile_image_url || ''"
        :tags="userStream!.tags"
        :viewers="userStream!.viewer_count"
        :time="'3:23:05'"
      />
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.streamer-page {
  width: calc(100% - 20rem);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
