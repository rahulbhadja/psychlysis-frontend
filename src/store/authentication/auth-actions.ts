/* eslint-disable arrow-body-style */
import axios from 'axios'
import { AuthActions } from '../authentication/auth-slice'

export const getAuthenticatedUser = () => {
  return async (dispatch) => {
    const getUserData = async () => {
      const { data } = await axios({
        method: 'GET',

        url: `http://localhost:8080/auth/user`,
        withCredentials: true,
      })

      return data.user
    }
    try {
      const user = await getUserData()
      console.log(user)

      dispatch(
        AuthActions.getAuthenticatedUser({
          authenticatedUser: user,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
}

export const logOutUser = () => {
  return async (dispatch) => {
    const getUserLogOut = async () => {
      const { data } = await axios({
        method: 'GET',
        url: `http://localhost:8080/auth/logout`,
        withCredentials: true,
      })

      return data
    }
    try {
      await getUserLogOut()
      dispatch(
        AuthActions.getAuthenticatedUser({
          authenticatedUser: null,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
}
