import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type CounterState = {
  selectedFilter: number
}

const initialState: CounterState = {
  selectedFilter: -1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSelectedFilter: (state, action: PayloadAction<number>) => {
      state.selectedFilter = action.payload;
    },
  },
})

export const { setSelectedFilter } = counterSlice.actions
export default counterSlice.reducer