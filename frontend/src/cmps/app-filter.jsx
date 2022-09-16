import { useEffect, useState } from 'react'

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
  const state = {
    idx: 0,
    filterIcon: [
      { cmp: 'GiFamilyHouse', tag: 'House' },
      { cmp: 'GiIsland', tag: 'Island' },
      { cmp: 'FaCity ', tag: 'City' },
      { cmp: 'FaCampground', tag: 'Camping' },
      { cmp: 'FaHome ', tag: 'Homes' },
      { cmp: 'SiInkscape', tag: 'Mounte' },
      { cmp: 'GiPalmTree ', tag: 'Tropical' },
      { cmp: 'GiWaveSurfer  ', tag: ' Beach' },
    ],
  }

  // const [countIdx, setCountIdx] = useState(0)

  useEffect(() => {
    console.log('hi hi filter')

    return () => {
      console.log('bey bey filter')
    }
  }, [])

  const getFilterIcon = (val) => {
    let idx = state.idx
    const newIdx = val === 'increment' ? idx++ : idx--
    state.idx = newIdx

    console.log('newIdx:', newIdx)
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
        {/* {state.filterIcon.map((icon) => (
          <li key={icon.cmp}>
            <{icon.cmp} /> <h3>{icon.tag}</h3>
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
