// import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { StayDetails } from '../pages/stay-details'
import { AppFilter } from './app-filter'

import routes from '../routes'

import { SearchHeader } from './search-header'
import { SimpelSearch } from './simpel-search'
import { MainSearch } from './main-search'
import { DisplayMainSearch } from './display-main-search'
import { AppUser } from './app-user'

import { BsPersonCircle } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { FaAirbnb } from 'react-icons/fa'

export const AppHeader = () => {
  const [isOpenUser, setIsOpenUser] = useState(false)
  const [isOpenMainSearch, setIsOpenMainSearch] = useState(true)
  // const [isOpenDetails, setIsOpenDetails] = useState(false)

  let location = useLocation()

  const toggleSearch = () => {
    setIsOpenMainSearch(!isOpenMainSearch)
  }

  const isOpenDetails = () => {
    const strParams = location.pathname
    const params = strParams.split('/')
    return params.length === 3 && params[2] !== 'edit'
  }

  return (
    <header className="app-header ">
      <div className="top-header">
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
      </div>

      <div className="bottom-header">{isOpenMainSearch && <AppFilter />}</div>
    </header>
  )
}
