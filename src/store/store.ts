import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as mainReducer } from './mainSlice'

const rootReducer = combineReducers({
  mainData: mainReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
