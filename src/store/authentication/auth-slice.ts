/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export type AuthState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authenticatedUser: any
}

const initialState: AuthState = {
  authenticatedUser: null,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthenticatedUser(state, action) {
      state.authenticatedUser = action.payload.authenticatedUser
    },
  },
})
export const AuthActions = authSlice.actions

export default authSlice
