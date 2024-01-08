import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from '@/entities/auth/model/slice'
import { baseApi } from '@/shared/api/baseApi'

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer
})

export default rootReducer
