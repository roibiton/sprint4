import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import { BsPersonCircle } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'

export function AppUser() {
  console.log('shaloomm:')
  return (
    <section className="user-login">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="icon-humburger">
            <FiMenu />
          </div>
          <div className="icon-user">
            <BsPersonCircle />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">sign up</Dropdown.Item>
          <Dropdown.Item href="#/action-2">log in</Dropdown.Item>
          <Dropdown.Item href="#/action-3">log out</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Wishlist</Dropdown.Item>
          <Dropdown.Item href="#/action-2">About</Dropdown.Item>
          <Dropdown.Item href="#/action-3">help</Dropdown.Item>
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
