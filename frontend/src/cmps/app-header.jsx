// import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { StayDetails } from '../pages/stay-details'

import routes from '../routes'

import { SearchHeader } from './search-header'
import { SimpelSearch } from './simpel-search'
import { MainSearch } from './main-search'
import { DisplayMainSearch } from './display-main-search'
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
  const [isOpenMainSearch, setIsOpenMainSearch] = useState(true)
  const [isOpenDetails, setIsOpenDetails] = useState(false)

  const toggleSearch = () => {
    setIsOpenMainSearch(!isOpenMainSearch)
  }

  return (
    <header className="app-header ">
      <NavLink key="//" to="/">
        <div className="main-logo">
          <h1>
            <FaAirbnb />
          </h1>
          <h1>Travelo</h1>
        </div>
      </NavLink>

      {isOpenMainSearch && <MainSearch toggleSearch={toggleSearch} />}
      {!isOpenMainSearch && <DisplayMainSearch />}
      {isOpenDetails && <SimpelSearch />}

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
