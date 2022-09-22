import { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ModalCalendarFilter } from './modal-calendar-filter'
import { ModalMapFilter } from './modal-map-filter'
import { WhoFilter } from './modal-who-filter'

import { BiSearch } from 'react-icons/bi'

export const DisplayMainSearch = () => {
  const [type, setType] = useState({
    stays: true,
    experiences: false,
    onlineEx: false,
  })
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [filterBy, setFilterBy] = useState({ txt: '' })
  const navigate = useNavigate()

  const openInputSearch = () => {
    console.log(isSearchOpen)
    setIsSearchOpen(!isSearchOpen)
  }
  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.type === 'range' ? +target.value : target.value

    setFilterBy({ txt: value })
  }

  const doSearch = () => {
    console.log('doSearch:')
    navigate(`/stay/explore/${filterBy.txt}`)
  }

  return (
    <section className="display-main-search">
      <div className="top-header-selected">
        <button>Stays</button>
        <button>Experiences</button>
        <button>Online Experiences</button>
      </div>
      <div className="bottom-header-selected">
        <article className="where">
          <button className=" btn-where" onClick={openInputSearch}>
            {!isSearchOpen && <ModalMapFilter />}
          </button>
          {isSearchOpen && (
            <input
              type="text"
              name="txt"
              placeholder="Search..."
              value={filterBy.txt}
              onChange={handleChange}
              className="input-search-filter"
            />
          )}
        </article>

        <article className="check-in">
          <button className="btn-border btn-check-in">
            <ModalCalendarFilter />
          </button>
        </article>

        <article className="check-out">
          <button className="btn-border btn-check-out">
            <ModalCalendarFilter />
          </button>
        </article>

        <article className="who-search">
          <button className="btn-border btn-who">
            <WhoFilter />
          </button>
          <button className="btn-search" onClick={doSearch}>
            <BiSearch className="search-icon" />
            <span> Search</span>
          </button>
        </article>
      </div>
    </section>
  )
}
