import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { stayService } from '../services/stay.service'
import { StayPreview } from './stay-preview'

export const Explore = () => {
  const [stays, setStays] = useState([])

  useEffect(() => {
    loadStays()
  }, [])

  const params = useParams()

  const loadStays = () => {
    setTimeout(() => {
      stayService.query().then((stays) => setStays(stays))
    }, 400)
  }

  const onRemoveStay = () => {
    console.log('remove!!!')
  }
  const onUpdateStay = () => {
    console.log('update!!!')
  }

  if (!stays) return <div>Loading...</div>
  return (
    <section className="explore">
      <ul className="card-layout">
        {stays.map((stay) => (
          <li className="preview-card-explore" key={stay._id}>
            <StayPreview
              key={stay._id}
              stay={stay}
              onRemoveStay={onRemoveStay}
              onUpdateStay={onUpdateStay}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
