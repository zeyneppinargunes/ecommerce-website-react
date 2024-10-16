import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backButtonVisible: false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    showBackButton: (state, action) => {
      state.backButtonVisible = action.payload
    },
  },
})

export const { showBackButton } = layoutSlice.actions

export default layoutSlice.reducer