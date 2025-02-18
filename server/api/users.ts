import { defineEventHandler } from 'h3'
import TwitchService from '../services/TwitchService'

export interface TwitchAPIUserResponse {
  data: TwitchUser[]
}

export interface TwitchUser {
  id: string
  login: string
  display_name: string
  profile_image_url: string
  offline_image_url: string
  description: string
  broadcaster_type: string
  view_count: number
  created_at: string
}

export default defineEventHandler(async (event): Promise<TwitchUser[]> => {
  const twitchService = new TwitchService()

  const query = getQuery(event)
  const userIds = query.ids ? query.ids.toString().split(',') : []

  if (userIds.length === 0) throw new Error('No broadcaster IDs provided')

  const response = await twitchService.getUsersInfo(userIds)
  return response.data.map(
    (user): TwitchUser => ({
      id: user.id,
      login: user.login,
      display_name: user.display_name,
      profile_image_url: user.profile_image_url,
      offline_image_url: user.offline_image_url,
      description: user.description,
      broadcaster_type: user.broadcaster_type,
      view_count: user.view_count,
      created_at: user.created_at,
    }),
  )
})
