import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter.slice';
import movieSlice from './movie.slice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    movie: movieSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
