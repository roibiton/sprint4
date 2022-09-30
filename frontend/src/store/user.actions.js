import { userService } from '../services/user.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'

export function loadUsers() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING_START' })
      const users = await userService.getUsers()
      dispatch({ type: 'SET_USERS', users })
    } catch (err) {
      console.log('UserActions: err in loadUsers', err)
    } finally {
      dispatch({ type: 'LOADING_DONE' })
    }
  }
}

export function removeUser(userId) {
  return async (dispatch) => {
    try {
      await userService.remove(userId)
      dispatch({ type: 'REMOVE_USER', userId })
    } catch (err) {
      console.log('UserActions: err in removeUser', err)
    }
  }
}

export function onLogin(newUser) {
  return async (dispatch) => {
    try {
      const credentials = await userService.login(newUser)
      if(credentials){
      dispatch({
        type: 'SET_USER',
        credentials,
      })}
      else{
        dispatch({
          type: 'SET_MSG',
          msg:'Do you need to sign up?'
        })
      }
    } catch (err) {
      showErrorMsg('Cannot login')
      console.log('Cannot login', err)
    }
  }
}

export function onSignup(newUser) {
  return async (dispatch) => {
    try {
      const credentials = await userService.signup(newUser)
      dispatch({
        type: 'SET_USER',
        credentials,
      })
    } catch (err) {
      showErrorMsg('Cannot signup')
      console.log('Cannot signup', err)
    }
  }
}

export function onLogout() {
  return async (dispatch) => {
    try {
      await userService.logout()
      dispatch({
        type: 'SET_USER',
        user: null,
      })
    } catch (err) {
      showErrorMsg('Cannot logout')
      console.log('Cannot logout', err)
    }
  }
}

export function loadUser(userId) {
  return async (dispatch) => {
    try {
      const user = await userService.getById(userId)
      dispatch({ type: 'SET_WATCHED_USER', user })
    } catch (err) {
      showErrorMsg('Cannot load user')
      console.log('Cannot load user', err)
    }
  }
}
