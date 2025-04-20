import { spotifyAuthService } from './spotifyAuth';

// Типы для данных Spotify
export interface Artist {
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
}

export interface Track {
  id: string;
  name: string;
  album: {
    images: { url: string; height: number; width: number }[];
  };
  artists: Artist[];
  duration_ms: number;
  preview_url: string | null;
}

export interface TopTracksResponse {
  tracks: Track[];
}

class SpotifyApiService {
  /**
   * Базовый метод для выполнения запросов к Spotify API
   */
  private async fetchFromSpotify<T>(endpoint: string): Promise<T> {
    try {
      // Получаем актуальный токен через сервис аутентификации
      const token = await spotifyAuthService.getAccessToken();
      
      const response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Ошибка при запросе к ${endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Получает топ треки артиста
   */
  async getArtistTopTracks(artistId: string, market: string = 'DE'): Promise<Track[]> {
    const data = await this.fetchFromSpotify<TopTracksResponse>(
      `/artists/${artistId}/top-tracks?market=${market}`
    );
    return data.tracks;
  }

  /**
   * Получает информацию об артисте
   */
  async getArtist(artistId: string): Promise<Artist> {
    return this.fetchFromSpotify<Artist>(`/artists/${artistId}`);
  }

  /**
   * Получает список популярных артистов
   */
  async getPopularArtists(): Promise<Artist[]> {
    // Пример - запрос нескольких конкретных артистов
    const ids = ['06HL4z0CvFAxyc27GXpf02', '4dpARuHxo51G3z768sgnrY', '6eUKZXaKkcviH0Ku9w2n3V'];
    const data = await this.fetchFromSpotify<{artists: Artist[]}>(`/artists?ids=${ids.join(',')}`);
    return data.artists;
  }
}

export const spotifyApiService = new SpotifyApiService(); 