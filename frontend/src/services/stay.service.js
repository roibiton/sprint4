import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import {
  getActionRemoveStay,
  getActionAddStay,
  getActionUpdateStay,
} from '../store/stay.actions.js'
import { store } from '../store/store'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs

const STORAGE_KEY = 'stay'
const stayChannel = new BroadcastChannel('stayChannel')

;(() => {
  stayChannel.addEventListener('message', (ev) => {
    store.dispatch(ev.data)
  })
})()

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
}
window.cs = stayService

async function query(filterBy) {
  console.log('hello from query:')
  var stays = await storageService.query(STORAGE_KEY)
  console.log('stays from sevice:', stays)
  stays = stays.map((stay) => {
    stay.rate = 4.5
    return stay
  })

  if (filterBy) {
    const { name, type, maxPrice, minPrice } = filterBy

    maxPrice = maxPrice || Infinity
    minPrice = minPrice || 0
    stays = stays.filter(
      (stay) => stay.maxPrice < maxPrice && stay.minPrice > minPrice
    )

    if (name) {
      stays = stays.filter((stay) =>
        stay.name.toLowerCase().includes(name.toLowerCase())
      )
    }

    if (type) {
      stays = stays.filter((stay) =>
        stay.type.toLowerCase().includes(type.toLowerCase())
      )
    }
  }
  return stays
}
function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
  // return axios.get(`/api/stay/${stayId}`)
}
async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId)
  stayChannel.postMessage(getActionRemoveStay(stayId))
}
async function save(stay) {
  var savedStay
  if (stay._id) {
    savedStay = await storageService.put(STORAGE_KEY, stay)
    stayChannel.postMessage(getActionUpdateStay(savedStay))
  } else {
    // Later, owner is set by the backend
    stay.owner = userService.getLoggedinUser()
    savedStay = await storageService.post(STORAGE_KEY, stay)
    stayChannel.postMessage(getActionAddStay(savedStay))
  }
  return savedStay
}

function getEmptyStay() {
  return {
    name: 'Susita-' + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(1000, 9000),
    type: 'House',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
    ],
    summary:
      'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
  }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {name: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
