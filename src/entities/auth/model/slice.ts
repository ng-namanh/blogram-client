import { RootState } from '@/app/appStore'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SessionSliceState =
  | {
      accessToken: string | null
      userId: number
      isAuthorized: true
    }
  | {
      isAuthorized: false
      accessToken?: string | null
      userId?: number
    }

const initialState: SessionSliceState = {
  isAuthorized: false
}

export const jwtSessionSlice = createSlice({
  name: 'jwtSession',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    },
    clearToken: (state) => {
      state.accessToken = undefined
      state.userId = undefined
      state.isAuthorized = false
    }
  }
})

export const selectIsAuthorized = (state: RootState) => {
  return state.jwtSession.isAuthorized
}

export const selectUserId = (state: RootState) => state.jwtSession.userId

export const { setToken, clearToken: clearSessionData } =
  jwtSessionSlice.actions
