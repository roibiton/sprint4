import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { stayService } from '../services/stay.service'
import { addStay, updateStay } from '../store/stay.actions'

export const StayEdit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [stay, handleChange, setStay] = useForm({
    name: '',
    price: '',
  })

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    const stayId = params.id
    if (!stayId) return
    stayService
      .getById(stayId)
      .then((stay) => {
        setStay(stay)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }, [])

  const onSaveStay = (ev) => {
    ev.preventDefault()
    if (stay._id) {
      dispatch(updateStay(stay))
        .then(() => {
          navigate('/')
        })
    } else {
      stay.imgUrls=["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",]
      stay.summary="Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)..."
      stay.type= "House"
      dispatch(addStay(stay))
        .then(() => {
          navigate('/')
        })
    }
  }

  return (
    <section >
      <h1>{stay._id ? 'Edit' : 'Add'} Stay</h1>
      <div>
      <form className="stay-edit" onSubmit={onSaveStay}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            ref={inputRef}
            value={stay.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            value={stay.price}
            onChange={handleChange}
            type="number"
            name="price"
            id="price"
          />
        </div>
        <button>Save</button>
      </form>
      </div>
    </section>
  )
}
