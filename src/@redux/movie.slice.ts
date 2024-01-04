import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type MovieState = {
  searchQuery: string;
};

const initialState: MovieState = {
  searchQuery: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    handleSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  },
});

export const { handleSearchQuery } = movieSlice.actions;
export default movieSlice.reducer;
