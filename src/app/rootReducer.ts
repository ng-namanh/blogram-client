import { combineReducers } from '@reduxjs/toolkit'
import { jwtSessionSlice } from '@/entities/auth/model/slice'

const rootReducer = combineReducers({
  [jwtSessionSlice.name]: jwtSessionSlice.reducer
})

export default rootReducer
