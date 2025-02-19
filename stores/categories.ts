import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TwitchCategory } from '~/server/api/categories'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<TwitchCategory[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchCategories = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await $fetch<TwitchCategory[]>('/api/categories')
      categories.value = response
    } catch {
      throw new Error('Error fetching categories')
    } finally {
      loading.value = false
    }
  }

  return { categories, loading, error, fetchCategories }
})
