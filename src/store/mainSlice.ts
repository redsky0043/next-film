import { IFavorites } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IFavorites = {
  favorites: [],
}

export const mainSlice = createSlice({
  name: 'mainData',
  initialState,
  reducers: {
    addFavorites: (state, {
      payload: {
        favorites
      },
    }) => {
      state.favorites = favorites
    },
  },
})

export const { reducer, actions } = mainSlice
