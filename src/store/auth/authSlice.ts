import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { spotifyAuthService } from '../../api/spotifyAuth';

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const fetchSpotifyToken = createAsyncThunk(
  'auth/fetchSpotifyToken',
  async (_, { rejectWithValue }) => {
    try {
      return await spotifyAuthService.getAccessToken();
    } catch (error) {
      return rejectWithValue('Не удалось получить токен доступа');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpotifyToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSpotifyToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(fetchSpotifyToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  }
});

export const { clearAuthError } = authSlice.actions;
export default authSlice.reducer; 