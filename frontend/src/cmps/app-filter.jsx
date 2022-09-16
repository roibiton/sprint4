import { useEffect, useState, useRef } from 'react'
import { stayService } from '../services/stay.service'

import { FaCampground, FaCity, FaHome } from 'react-icons/fa'
import { SiInkscape } from 'react-icons/si'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  GiFamilyHouse,
  GiIsland,
  GiPalmTree,
  GiWaveSurfer,
} from 'react-icons/gi'

export const AppFilter = () => {
  const idxCarouselIconsRef = useRef(0)

  // const [countIdx, setCountIdx] = useState(0)

  useEffect(() => {
    console.log('hi hi filter')
    return () => {
      console.log('bey bey filter')
      idxCarouselIconsRef.current = 0
    }
  }, [])

  const getFilterIcon = (val = false) => {
    console.log('val:', val)
    let idx = idxCarouselIconsRef.current
    console.log('idx:', idx)

    idxCarouselIconsRef.current = val === 'increment' ? idx + 1 : idx - 1

    console.log('idxCarouselIconsRef.current:', idxCarouselIconsRef.current)
    return stayService.getCarouselIcons(idxCarouselIconsRef.current)
  }

  return (
    <section className="app-filter">
      <button
        onClick={() => {
          getFilterIcon('decrement')
        }}
      >
        <FiChevronLeft />
      </button>
      <ul className="ul-filter">
        {/* {getFilterIcon().map((icon) => (
          <li key={icon.cmp}>
            < /> <h3>{icon.tag}</h3>
          </li>
        ))} */}
        <li>
          {' '}
          <GiFamilyHouse /> House
        </li>
        <li>
          {' '}
          <GiIsland /> Island
        </li>
        <li>
          {' '}
          <GiPalmTree /> Tropical
        </li>
        <li>
          {' '}
          <GiWaveSurfer /> Beach
        </li>
        <li>
          <SiInkscape /> Homes
        </li>

        <li>
          <FaHome /> Homes
        </li>
        <li>
          <FaCampground />
          Camping
        </li>
        <li>
          <FaCity /> City
        </li>
      </ul>
      <button
        onClick={() => {
          getFilterIcon('increment')
        }}
      >
        <FiChevronRight />
      </button>
      <button>Filters</button>
    </section>
  )
}
