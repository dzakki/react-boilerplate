import { createSlice } from '@reduxjs/toolkit'

import { fetchUserById } from 'state/thunks/users'

const initialState = {
  detail: {},
  loading: false,
  error: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clear: (state) => initialState
  },
  extraReducers: {
    [fetchUserById.pending]: (state) => {
      state.loading = true
    },
    [fetchUserById.fulfilled]: (state, action) => {
      state.loading = false
      state.detail = action.payload
    },
    [fetchUserById.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const actions = {
  ...usersSlice.actions,
  fetchUserById
}

export const reducer = usersSlice.reducer
