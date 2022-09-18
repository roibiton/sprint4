// import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { StayDetails } from '../pages/stay-details'

import routes from '../routes'

import { SearchHeader } from './search-header'
import { AppUser } from './app-user'

import { BsPersonCircle } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { FaAirbnb } from 'react-icons/fa'
// import {
//   onLogin,
//   onLogout,
//   onSignup,
//   loadUsers,
//   removeUser,
// } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export const AppHeader = () => {
  const [isOpenUser, setIsOpenUser] = useState(false)

  return (
    <header className="app-header">
      <NavLink key="//" to="/">
        <FaAirbnb className="main-logo" />
      </NavLink>

      <SearchHeader />

      {isOpenUser && <AppUser />}

      <button
        className="btn-user-menu"
        onClick={() => {
          setIsOpenUser(!isOpenUser)
        }}
      >
        <FiMenu />
        <BsPersonCircle />
      </button>
    </header>
  )
}

// function mapStateToProps(state) {
//   return {
//     users: state.userModule.users,
//     user: state.userModule.user,
//     count: state.userModule.count,
//     isLoading: state.systemModule.isLoading,
//   }
// }
// const mapDispatchToProps = {
//   onLogin,
//   onSignup,
//   onLogout,
//   loadUsers,
//   removeUser,
// }

// export const AppHeader = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(_AppHeader)
