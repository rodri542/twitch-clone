import { defineEventHandler } from 'h3'
import TwitchService from '../services/TwitchService'

export interface TwitchAPIResponse {
  data: TwitchStream[]
}

export interface TwitchStream {
  id: string
  user_id: string
  user_name: string
  user_login: string
  game_id: string
  game_name: string
  type: string
  title: string
  tags: string[]
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids: string[]
  is_mature: boolean
}

export default defineEventHandler(async (): Promise<TwitchStream[]> => {
  const twitchService = new TwitchService()
  const response: TwitchAPIResponse = await twitchService.getTopStreams()

  return response.data.map(
    (stream): TwitchStream => ({
      id: stream.id,
      user_id: stream.user_id,
      user_name: stream.user_name,
      user_login: stream.user_login,
      game_id: stream.game_id,
      game_name: stream.game_name,
      type: stream.type,
      title: stream.title,
      tags: stream.tags,
      viewer_count: stream.viewer_count,
      started_at: stream.started_at,
      language: stream.language,
      thumbnail_url: stream.thumbnail_url.replace('{width}x{height}', '1920x1080'),
      tag_ids: stream.tag_ids,
      is_mature: stream.is_mature,
    }),
  )
})
