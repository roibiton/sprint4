import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { stayService } from '../services/stay.service'
import { loadStays, setFilterBy } from '../store/stay.actions'
import { StayList } from '../cmps/stay-list'

export const Explore = () => {
  const { stays } = useSelector((state) => state.stayModule)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(doLoadStays, 400)
  }, [])

  const params = useParams()
  console.log('params:', params)

  const doLoadStays = () => {
    dispatch(loadStays(params))
  }

  const onRemoveStay = () => {
    console.log('remove!!!')
    stayService.remove()
  }

  if (!stays) return <div>Loading...</div>
  return (
    <section className="explore main-layout">
      <StayList stays={stays} onRemoveStay={onRemoveStay} />
    </section>
  )
}
