import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import routes from '../routes'

import {
  onLogin,
  onLogout,
  onSignup,
  loadUsers,
  removeUser,
} from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'

function _SearchHeader({ onLogin, onSignup, onLogout, user }) {
  return (
    <section className="search-header">
      <form>
        <label htmlFor="search-header"></label>
        <input
          type="text"
          id="search-header"
          placeholder="     Start your search"
        />
      </form>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    users: state.userModule.users,
    user: state.userModule.user,
    count: state.userModule.count,
    isLoading: state.systemModule.isLoading,
  }
}
const mapDispatchToProps = {
  onLogin,
  onSignup,
  onLogout,
  loadUsers,
  removeUser,
}

export const SearchHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SearchHeader)
