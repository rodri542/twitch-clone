// stores/users.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { TwitchUser } from '~/server/api/users'
import { useStreamsStore } from './streams'

export const useUsersStore = defineStore('users', () => {
  const users = ref<{ [key: string]: TwitchUser }>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchUsers = async () => {
    if (Object.keys(users.value).length > 0) return

    const streamsStore = useStreamsStore()
    const userIds = streamsStore.streams.map((stream) => stream.user_id)

    if (userIds.length === 0) return

    loading.value = true
    error.value = null

    try {
      const usersData = await $fetch<TwitchUser[]>(`/api/users?ids=${userIds.join(',')}`)
      users.value = Object.fromEntries(usersData.map((user) => [user.id, user]))
    } catch {
      throw new Error('Error fetching users')
    } finally {
      loading.value = false
    }
  }

  const getUsers = computed(() => users.value)

  return { users, loading, error, fetchUsers, getUsers }
})
