import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import {
  onLogin,
  onLogout,
  onSignup,
  loadUsers,
  removeUser,
} from '../store/user.actions.js'
import { LoginSignup } from '../cmps/login-signup'

export const LogInApp = () => {
  //   const [user, setUser] = useState({ name: 'puki', id: 'u102', imgUrl: '🥸' })
  const [user, setUser] = useState(false)
  return (
    <section className="login-app">
      <ul>
        <li>sign up</li>
        <li>log in</li>
      </ul>
      {user && (
        <span className="user-info">
          <Link to={`user/${user._id}`}>
            {user.imgUrl && <img src={user.imgUrl} />}
            {user.fullname}
          </Link>
          <span className="score">{user.score?.toLocaleString()}</span>
          <button onClick={onLogout}>Logout</button>
        </span>
      )}

      {!user && (
        <section className="user-info">
          <LoginSignup onLogin={onLogin} onSignup={onSignup} />
        </section>
      )}
    </section>
  )
}
