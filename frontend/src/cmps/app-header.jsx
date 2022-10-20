import React from 'react'
import { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { NavLink, useParams, useLocation } from 'react-router-dom'
import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'
// import routes from '../routes'

import { AppFilterOld } from './AppFilterOld'
import { ModalFilter } from './modal-filter'
import { SimpelSearch } from './simpel-search'
import { MainSearch } from './main-search'
import { DisplayMainSearch } from './display-main-search'
import { AppUser } from './app-user'

import { FaAirbnb } from 'react-icons/fa'
import { AppFilter } from './app-filter.jsx'

function _AppHeader({ onLogin, onSignup, onLogout, user }) {
  const [isOpenUser, setIsOpenUser] = useState(false)
  const [isOpenMainSearch, setIsOpenMainSearch] = useState(true)
  // const [isOpenDetails, setIsOpenDetails] = useState(false)

  const location = useLocation()

  const toggleSearch = () => {
    setIsOpenMainSearch(!isOpenMainSearch)
  }

  const isOpenDetails = () => {
    const strParams = location.pathname
    const params = strParams.split('/')
    return params.length === 3 && params[2] !== 'edit'
  }

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="top-header border-bottom">
          <NavLink key="//" to="/">
            <div className="main-logo">
              <h1>
                <FaAirbnb />
              </h1>
              <h1>Travelo</h1>
            </div>
          </NavLink>

          {isOpenMainSearch && !isOpenDetails() && (
            <MainSearch toggleSearch={toggleSearch} />
          )}

          {!isOpenMainSearch && !isOpenDetails() && <DisplayMainSearch />}
          {isOpenDetails() && <SimpelSearch />}

          <AppUser user={user} onLogout={onLogout} />
        </div>


        {
          location.pathname === "/" ?
            <div className="bottom-header">
              {isOpenMainSearch && <AppFilter /> }
              <div className="btn-filter">
                <ModalFilter />
              </div>
            </div>
            : <br></br>
        }

      </div>
    </header>
  )
}
function mapStateToProps(state) {
  return {
    users: state.userModule.users,
    user: state.userModule.user,
    count: state.userModule.count,
    isLoading: state.systemModule.isLoading
  }
}
const mapDispatchToProps = {
  onLogin,
  onSignup,
  onLogout,
  loadUsers,
  removeUser
}



export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)
