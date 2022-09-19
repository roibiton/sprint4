import { useEffect, useState, useRef } from 'react'
import { stayService } from '../services/stay.service'
import { Link } from 'react-router-dom'

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
  const [carouselIcons, setCarouselIcons] = useState([])

  const idxCarouselIconsRef = useRef()

  useEffect(() => {
    idxCarouselIconsRef.current = 0
    loadCarouselIcons()
    return () => {
      console.log('bey bey filter')
      idxCarouselIconsRef.current = 0
    }
  }, [])

  useEffect(() => {
    console.log('update filter')
  }, [carouselIcons])

  const loadCarouselIcons = () => {
    const arr = stayService.getCarouselIcons(idxCarouselIconsRef.current)
    console.log('arr:', arr)
    setCarouselIcons(arr)
  }

  const setCarouselIdx = (val = false) => {
    let idx = idxCarouselIconsRef.current

    if (!val || idx > 2 || idx < 0) {
      loadCarouselIcons()
      return
    } else if (idx < 2 && val === 'increment') {
      idxCarouselIconsRef.current = idx + 1
    } else if (idx > 0 && val === 'decrement') {
      idxCarouselIconsRef.current = idx - 1
    }
    loadCarouselIcons()
  }

  return (
    <section className="app-filter">
      <button
        className="btn-page"
        onClick={() => {
          setCarouselIdx('decrement')
        }}
      >
        <FiChevronLeft />
      </button>
      <ul className="ul-carousel">
        {carouselIcons.map((icon) => (
          <li key={icon.cmp}>
            <div>
              <Link to={`/stay/explore/${icon.tag}`} className="explore-list">
                {icon.cmp}
                {icon.tag}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="btn-page"
        onClick={() => {
          setCarouselIdx('increment')
        }}
      >
        <FiChevronRight />
      </button>
      <button className="btn-main-filter">Filters</button>
    </section>
  )
}
