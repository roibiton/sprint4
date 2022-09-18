export const AppUser = () => {
  return (
    <section className="carousel-filter">
      <ul>
        <li>sign up</li>
        <li>log in</li>
      </ul>
      {/* {user && (
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
      )} */}
    </section>
  )
}
