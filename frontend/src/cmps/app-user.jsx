import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {  useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ModalLogin } from './modal-login'

import { BsPersonCircle } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'

import { onLogout} from '../store/user.actions.js'


export function AppUser() {
  const { user } = useSelector((state) => state.userModule)
  const dispatch = useDispatch()
  
   useEffect(() => {
    console.log('user:', user)
     }, [user])

  return (
    <section className="user-login">
      {user&& <button className="host">Become a Host</button>}
     
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="icon-humburger">
            <FiMenu />
          </div>
          <div className="icon-user">
            {user&& <img src={user.imgUrl} className="img-user"/>}
            {!user&& <BsPersonCircle />}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {!user&&<Dropdown.Item href="/login/sign-up">Sign up</Dropdown.Item>}
          {!user&& <Dropdown.Item href="/login/log-in">Log in</Dropdown.Item>}
          {user&&<Dropdown.Item onClick={()=>{
            dispatch(onLogout())
          }}>
            log out
          </Dropdown.Item>}
          {user&&<Dropdown.Item href="#/action-3">Acount</Dropdown.Item>}
          <Dropdown.Item href="#/action-1">Wishlist</Dropdown.Item>
          <Dropdown.Item href="#/action-2">About</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        
      
    </section>
  )
}

// export default AppUser

// export const AppUser = () => {
//   return (
//     <section className="carousel-filter">
//       <ul>
//         <li>sign up</li>
//         <li>log in</li>
//       </ul>
//       {/* {user && (
//         <span className="user-info">
//           <Link to={`user/${user._id}`}>
//             {user.imgUrl && <img src={user.imgUrl} />}
//             {user.fullname}
//           </Link>
//           <span className="score">{user.score?.toLocaleString()}</span>
//           <button onClick={onLogout}>Logout</button>
//         </span>
//       )}

//       {!user && (
//         <section className="user-info">
//           <LoginSignup onLogin={onLogin} onSignup={onSignup} />
//         </section>
//       )} */}
//     </section>
//   )
// }
