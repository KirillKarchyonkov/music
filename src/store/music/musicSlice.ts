import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { spotifyApiService, Track, Artist } from '../../api/spotifyApi';

interface MusicState {
  topTracks: Track[];
  popularArtists: Artist[];
  isLoadingTracks: boolean;
  isLoadingArtists: boolean;
  error: string | null;
}

const initialState: MusicState = {
  topTracks: [],
  popularArtists: [],
  isLoadingTracks: false,
  isLoadingArtists: false,
  error: null
};

export const fetchArtistTopTracks = createAsyncThunk(
  'music/fetchArtistTopTracks',
  async (artistId: string, { rejectWithValue }) => {
    try {
      return await spotifyApiService.getArtistTopTracks(artistId);
    } catch (error) {
      return rejectWithValue('Не удалось загрузить треки артиста');
    }
  }
);

export const fetchPopularArtists = createAsyncThunk(
  'music/fetchPopularArtists',
  async (_, { rejectWithValue }) => {
    try {
      return await spotifyApiService.getPopularArtists();
    } catch (error) {
      return rejectWithValue('Не удалось загрузить популярных артистов');
    }
  }
);

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    clearMusicError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Обработка статусов загрузки треков
      .addCase(fetchArtistTopTracks.pending, (state) => {
        state.isLoadingTracks = true;
        state.error = null;
      })
      .addCase(fetchArtistTopTracks.fulfilled, (state, action) => {
        state.topTracks = action.payload;
        state.isLoadingTracks = false;
      })
      .addCase(fetchArtistTopTracks.rejected, (state, action) => {
        state.isLoadingTracks = false;
        state.error = action.payload as string;
      })
      
      // Обработка статусов загрузки артистов
      .addCase(fetchPopularArtists.pending, (state) => {
        state.isLoadingArtists = true;
        state.error = null;
      })
      .addCase(fetchPopularArtists.fulfilled, (state, action) => {
        state.popularArtists = action.payload;
        state.isLoadingArtists = false;
      })
      .addCase(fetchPopularArtists.rejected, (state, action) => {
        state.isLoadingArtists = false;
        state.error = action.payload as string;
      });
  }
});

export const { clearMusicError } = musicSlice.actions;
export default musicSlice.reducer; 