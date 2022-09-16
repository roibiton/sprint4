import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import routes from '../routes'


import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'

function _AppHeader({ onLogin, onSignup, onLogout, user }) {

    return (
        <header className="app-header">

            <nav className="back">
                <NavLink to=''>Stays</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='map'>Map</NavLink>
                <NavLink to='stat'>Stat</NavLink>
                <NavLink to='home'>Home 🏠</NavLink>
                <NavLink to='admin'>Admin </NavLink>
                <NavLink to='review'>Review </NavLink>
                <NavLink to='chat'>Chat </NavLink>
               

            </nav>

            {user &&
                <span className="user-info">
                    <Link to={`user/${user._id}`}>
                        {user.imgUrl && <img src={user.imgUrl} />}
                        {user.fullname}
                    </Link>
                    <span className="score">{user.score?.toLocaleString()}</span>
                    <button onClick={onLogout}>Logout</button>
                </span>
            }

            {!user &&
                <section className="user-info">
                    <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                </section>
            }



            <h1>My App</h1>
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