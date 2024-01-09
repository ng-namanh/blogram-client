import { RootState } from '@/app/appStore'
import { createSlice } from '@reduxjs/toolkit'
import { authApiSlice } from '@/entities/auth/api/authApi'
import { User } from './types'
type AuthSliceState =
  | {
      accessToken: string | null
      user: User
      isAuthorized: true
    }
  | {
      isAuthorized: false
      accessToken?: string | null
      user?: User | null
    }

const initialState: AuthSliceState = {
  user: null,
  isAuthorized: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null
      state.user = null
      state.isAuthorized = false
    },
    setCredentials: (state, action) => {
      const { accessToken, user } = action.payload
      if (accessToken && user) {
        state.accessToken = accessToken
        state.user = user
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state: AuthSliceState, { payload }) => {
        state.isAuthorized = true

        if (state.isAuthorized) {
          state.user = payload.user
          state.accessToken = payload.accessToken
        }
      }
    )
  }
})

export const selectIsAuthorized = (state: RootState) => {
  return state.auth.isAuthorized
}

export const selectedUser = (state: RootState) => state.auth.user

export const { logout, setCredentials } = authSlice.actions
