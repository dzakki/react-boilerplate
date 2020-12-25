import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer as toastrReducer } from 'react-redux-toastr'

import { reducer as usersReducer } from './slices/users'

const rootReducer = combineReducers({
  users: usersReducer,
  toastr: toastrReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store)
