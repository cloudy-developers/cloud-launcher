import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export default store
export type TypedRootState = ReturnType<typeof store.getState>
