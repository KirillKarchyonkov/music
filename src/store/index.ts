import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import musicReducer from './music/musicSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    music: musicReducer,
    // Другие редюсеры...
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Типизированные хуки для использования в компонентах
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 