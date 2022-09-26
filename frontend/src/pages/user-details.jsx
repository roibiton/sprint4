import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../store/user.actions'
import { stayService } from '../services/stay.service'

export function _UserDetails({ user, loadUser }) {
  const params = useParams()
console.log('hello')
  useEffect(() => {
    loadUser(params.id)
    
  }, [])
  // const loadStaysForUser=(filterBy)=>{
  //   var stays = stayService.query(filterBy)
  //   stays=stays.map()

  // }

  return (
    <section className="user-details">
      <h1>User Details123</h1>
      {user && (
        <div>
          <h3>{user.fullname}</h3>
          <section className='user-stays'>
          {}

          </section>






          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.watchedUser,
  }
}
const mapDispatchToProps = {
  loadUser,
}

export const UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_UserDetails)
