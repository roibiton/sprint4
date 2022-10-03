import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../store/user.actions'
import { stayService } from '../services/stay.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service'
import { StayList } from '../cmps/stay-list'
import { orderService } from '../services/order.service'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../cmps/user-details-title';
import { UserDetailsChart } from '../cmps/user-details-chart';
import { UserDetailsLineChart } from '../cmps/user-details-line-chart'
export function _UserDetails({ user, loadUser }) {

  const params = useParams()
  console.log('hello')
  var [user, setUser] = useState(null)
  var [userStays, setUserStays] = useState([])
  var [userOrders, setUserOrders] = useState([])
  var [userStaysOrders, setUserStaysOrders] = useState([])

  const loggedInUser = userService.getLoggedinUser()
  const profileUserId = params.id

  useEffect(() => {
    async function getUser() {
      user = await userService.getById(profileUserId)
      setUser(user)
      loadStaysForUser()
      loadOrdersForUser()
      loadOrdersForUserStays()
    }
    getUser()


  }, [])


  async function loadStaysForUser() {
    try {
      const stays = await stayService.query()
      console.log('loggedInUser', loggedInUser)
      const userStays = stays.filter((stay) => stay.host._id === profileUserId)
      setUserStays(userStays)
    }
    catch (err) {
      showErrorMsg('Cannot load stays')
      console.log('Cannot load stays', err)
    }
  }

  async function loadOrdersForUser() {
    try {
      const orders = await orderService.query()
      console.log('orders', orders)
      console.log('loggedInUser', loggedInUser)
      const userOrders = orders.filter((order) => order.buyer._id === profileUserId)
      setUserOrders(userOrders)
    }
    catch (err) {
      showErrorMsg('Cannot load orders')
      console.log('Cannot load orders', err)
    }
  }

  async function loadOrdersForUserStays() {
    try {
      const orders = await orderService.query()
      console.log('orders', orders)
      console.log('loggedInUser', loggedInUser)
      const userStaysOrders = orders.filter((order) => order.hostId === profileUserId)
      setUserStaysOrders(userStaysOrders)
    }
    catch (err) {
      showErrorMsg('Cannot load orders')
      console.log('Cannot load orders', err)
    }
  }
  const toggleStatus = async (order) => {
    order.status = (order.status === 'pending') ? 'approved' : 'pending'
    const savedOrder = await orderService.save(order)
    console.log('Saved Order', savedOrder)
    userStaysOrders = userStaysOrders.map((order) => { if (order._id === savedOrder._id) { return order = savedOrder } return order })
    setUserStaysOrders(userStaysOrders)
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };


  return (
    <section className="main-layout user-details">
      {/* <h1>User Details123</h1> */}

      {user && (
        <section>

          {(userStaysOrders.length >= 1) && (<section className='user-details-charts flex'>
            <UserDetailsLineChart userStays={userStays} />
            <hr />
            <UserDetailsChart  />
          </section>
          )}


          <div className='host-avatar-container'>
            <img src="https://xsgames.co/randomusers/assets/avatars/female/8.jpg" className='host-avatar'></img>
          </div>

          <section className='user-orders'>
            {/* {(userOrders.length>=1) &&(<h3>{user.fullname} ,your orders are:</h3>)} */}
            {/* <pre>
              {JSON.stringify(userOrders, null, 2)}
            </pre> */}

            <section className='order-details-container'>
              {(userOrders.length >= 1) && (<Title>{user.fullname}, your orders are:</Title>)}
              {(userOrders.length >= 1) && (<Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Guests</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell align="right">status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userOrders.map((userOrder) => (
                    <TableRow key={userOrder.id}>
                      <TableCell>{userOrder.stay.name}</TableCell>
                      <TableCell>{userOrder.startDate}-{userOrder.endDate}</TableCell>
                      <TableCell>{userOrder.guests.adults}</TableCell>
                      <TableCell>{userOrder.totalPrice}</TableCell>
                      <TableCell align="right">{userOrder.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              )}
              {/* {userOrders.map(userOrder =>
                  <div className='order-details-li' key={userOrder._id}>
                    <div>{userOrder.stay.name}</div>
                    <div>{userOrder.startDate}-{userOrder.endDate}</div>
                    <div>{userOrder.guests.adults}</div>
                    <div>{userOrder.totalPrice}</div>
                    <div>{userOrder.status}</div>
                    <button>Cancel</button>
                  </div>)} */}
            </section>
          </section>




          <section className='user-stays-reserved'>
            <section className='order-details-container'>
              {(userStaysOrders.length >= 1) && (<Title>{user.fullname}- reserved stays:</Title>)}
              {(userStaysOrders.length >= 1) && (<Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Guests</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell align="right">status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userStaysOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.stay.name}</TableCell>
                      <TableCell>{order.startDate}-{order.endDate}</TableCell>
                      <TableCell>{order.guests.adults}</TableCell>
                      <TableCell>{order.totalPrice}</TableCell>
                      <TableCell align="right"><button className='btn' onClick={() => toggleStatus(order)}>{order.status}</button></TableCell>
                      {/* <button>{userStaysOrder.status}</button> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              )}
              {/* {userStaysOrders.map(userStaysOrder =>
                <div className='order-details-li' key={userStaysOrder._id}>
                  <div>{userStaysOrder.stay.name}</div>
                  <div>{userStaysOrder.startDate}-{userStaysOrder.endDate}</div>
                  <div>{userStaysOrder.guests.adults}</div>
                  <div>{userStaysOrder.totalPrice}</div>
                  <div>{userStaysOrder.status}</div>
                  <button>Cancel</button>
                </div>)} */}
            </section>
          </section>




          {(userStays.length >= 1) && (<section className='user-stays'>
            <Title>{user.fullname} stays:</Title>
            {/* <pre>
              {JSON.stringify(userStays, null, 2)}
            </pre> */}
            <div className="stay-list">
              <StayList stays={userStays} />
            </div>
          </section>
          )}
          {/* <Dashboard /> */}
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </section>
      )}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.watchedUser,
    loggedInUser: state.userModule.user
  }
}
const mapDispatchToProps = {
  loadUser,
}

export const UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_UserDetails)


