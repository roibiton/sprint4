import { useEffect, useState, useRef } from 'react'

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
  return (
    <section className="display-main-search">
      <div className="top-header-selected">
        <button>Stays</button>
        <button>Experiences</button>
        <button>Online Experiences</button>
      </div>
      <div className="bottom-header-selected">
        <article className="where">
          <button className=" btn-where">
            <ModalMapFilter />
          </button>
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
          <button className="btn-search">
            <BiSearch className="search-icon" />
            <span> Search</span>
          </button>
        </article>
      </div>
    </section>
  )
}
