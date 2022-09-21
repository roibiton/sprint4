import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { stayService } from '../services/stay.service'
import { loadStays, setFilterBy } from '../store/stay.actions'
import { StayPreview } from '../cmps/stay-preview'

export const Explore = () => {
  const { stays } = useSelector((state) => state.stayModule)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => doLoadStays, 400)
  }, [])

  const params = useParams()

  const doLoadStays = () => {
    dispatch(loadStays())
  }

  const onRemoveStay = () => {
    console.log('remove!!!')
  }
  const onUpdateStay = () => {
    console.log('update!!!')
  }

  if (!stays) return <div>Loading...</div>
  console.log('stays from explore:', stays)
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
