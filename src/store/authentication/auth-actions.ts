/* eslint-disable arrow-body-style */
import axios from 'axios'
import { AuthActions } from '../authentication/auth-slice'

export const getAuthenticatedUser = () => {
  return async (dispatch) => {
    const getUserData = async () => {
      const { data } = await axios({
        method: 'GET',

        url: `${process.env.NEXT_PUBLIC_API_URL}/auth/user`,
        withCredentials: true,
      })
      console.log(data)

      return data.user
    }
    try {
      const user = await getUserData()

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
        url: `${process.env.SERVER_URL}/logout`,
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
