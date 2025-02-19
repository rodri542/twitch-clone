import type { TwitchUser } from '../api/users'

interface APIUrls {
  token: string
  streams: string
  users: string
  categories: string
}

const API_URLS: APIUrls = {
  token: 'https://id.twitch.tv/oauth2/token',
  streams: 'https://api.twitch.tv/helix/streams',
  users: 'https://api.twitch.tv/helix/users',
  categories: 'https://api.twitch.tv/helix/games/top',
}

export default class TwitchService {
  private clientId: string
  private clientSecret: string
  private accessToken: string = ''

  constructor() {
    const config = useRuntimeConfig()
    this.clientId = config.public.twitchClientId
    this.clientSecret = config.twitchClientSecret
  }

  async getAccessToken(): Promise<string> {
    if (this.accessToken !== '') {
      return this.accessToken
    }

    try {
      const response = await fetch(API_URLS.token, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'client_credentials',
        }),
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()

      if (!data.access_token) {
        throw new Error('No access token received from Twitch API')
      }

      this.accessToken = data.access_token
      return this.accessToken
    } catch (error) {
      throw new Error('Failed to get Access Token: ' + error)
    }
  }

  async getTopStreams() {
    const token = await this.getAccessToken()
    const url = `${API_URLS.streams}?first=20`

    const response = await fetch(url, {
      headers: {
        'Client-ID': this.clientId,
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return response.json()
  }

  async getUsersInfo(userIds: string[]): Promise<{ data: TwitchUser[] }> {
    if (userIds.length === 0) return { data: [] }

    const token = await this.getAccessToken()
    const queryParams = userIds.map((id) => `id=${id}`).join('&')
    const url = `${API_URLS.users}?${queryParams}`

    const response = await fetch(url, {
      headers: {
        'Client-ID': this.clientId,
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to fetch user profiles: ${errorText}`)
    }

    const data: { data: TwitchUser[] } = await response.json()
    return data
  }

  async getTopCategories() {
    const token = await this.getAccessToken()
    const url = `${API_URLS.categories}?first=6`

    try {
      const response = await fetch(url, {
        headers: {
          'Client-ID': this.clientId,
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Error ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      return data.data
    } catch {
      return []
    }
  }
}
