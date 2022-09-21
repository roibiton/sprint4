import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { stayService } from '../services/stay.service'
import { StayList } from './stay-list'

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
    stayService.remove()

  }
  const onUpdateStay = () => {
    console.log('update!!!')
  }

  if (!stays) return <div>Loading...</div>
  return (
    <section className="explore main-layout">
     
      <StayList stays={stays} 
       onRemoveStay={onRemoveStay}
       />
    </section>
  )
}
