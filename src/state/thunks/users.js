import { createAsyncThunk } from '@reduxjs/toolkit'

const dummyAPI = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: {
        name: 'Tri',
        job: 'Web developer'
      }
    })
  }, 2000)
})

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await dummyAPI
    return response.data
  }
)
