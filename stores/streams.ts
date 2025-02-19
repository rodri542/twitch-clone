// stores/streams.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { TwitchStream } from '~/server/api/streams'

export const useStreamsStore = defineStore('streams', () => {
  const streams = ref<TwitchStream[]>([])
  const loading = ref(false)
  const loadingChunked = ref(true)
  const error = ref<string | null>(null)

  const fetchStreams = async () => {
    if (streams.value.length > 0) return

    loading.value = true
    error.value = null

    try {
      const data = await $fetch<TwitchStream[]>('/api/streams')
      streams.value = data
    } catch {
      throw new Error('Error fetching streams')
    } finally {
      loading.value = false
    }
  }

  const getStreams = computed(() => streams.value)

  const chunkedStreams = computed(() => {
    const chunkSize = 3
    return streams.value.reduce((acc, stream, index) => {
      const chunkIndex = Math.floor(index / chunkSize)
      if (!acc[chunkIndex]) acc[chunkIndex] = []
      acc[chunkIndex].push(stream)
      return acc
    }, [] as TwitchStream[][])
  })

  watch(
    chunkedStreams,
    (newChunks) => {
      if (newChunks.length > 0) {
        loadingChunked.value = false
      }
    },
    { immediate: true },
  )

  return { streams, loading, error, fetchStreams, getStreams, chunkedStreams, loadingChunked }
})
