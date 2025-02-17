import { defineEventHandler } from 'h3'
import TwitchService from '../services/TwitchService'

export interface TwitchCategory {
  id: string
  name: string
  box_art_url: string
}

export default defineEventHandler(async () => {
  const twitchService = new TwitchService()

  try {
    const categories: TwitchCategory[] = await twitchService.getTopCategories()

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      box_art_url: category.box_art_url.replace('{width}x{height}', '320x180'),
    }))
  } catch {
    return { error: 'Failed to fetch Twitch categories' }
  }
})
