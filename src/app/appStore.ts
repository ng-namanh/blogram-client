import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  storage,
  key: 'root'
}

export function makeStore() {

const store = configureStore({
  reducer: persistReducer(persistConfig, {
      
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST']
    }    

  })
)
  return store
}

export const appStore = makeStore()
export const persistedStore = persistStore(appStore)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch