// Обновите эти значения на новые, полученные из Spotify Developer Dashboard
const CLIENT_ID = "2f41bd8bc5a348209ae24d4440062751";
const CLIENT_SECRET = "54a1c59c62a8459b90e668cfce518c96";

// Импорт для работы с Buffer в браузере
import { Buffer } from 'buffer/';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

class SpotifyAuthService {
  private accessToken: string | null = null;
  private tokenExpirationTime: number = 0;

  /**
   * Получает действующий токен доступа, обновляя его при необходимости
   */
  async getAccessToken(): Promise<string> {
    if (this.isTokenValid()) {
      return this.accessToken!;
    }
    
    const tokenData = await this.fetchNewToken();
    this.setTokenData(tokenData);
    return this.accessToken!;
  }

  /**
   * Проверяет, является ли текущий токен действительным
   */
  private isTokenValid(): boolean {
    return !!this.accessToken && Date.now() < this.tokenExpirationTime;
  }

  /**
   * Запрашивает новый токен от Spotify API
   */
  private async fetchNewToken(): Promise<TokenResponse> {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
      
      if (!response.ok) {
        throw new Error(`Ошибка авторизации: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Ошибка при получении токена Spotify:', error);
      throw error;
    }
  }

  /**
   * Сохраняет данные токена
   */
  private setTokenData(tokenData: TokenResponse): void {
    this.accessToken = tokenData.access_token;
    // Устанавливаем время истечения с небольшим запасом (1 минута)
    this.tokenExpirationTime = Date.now() + (tokenData.expires_in * 1000 - 60000);
  }
}

// Экспортируем единственный экземпляр сервиса
export const spotifyAuthService = new SpotifyAuthService(); 