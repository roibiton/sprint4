import { useEffect, useState, useRef } from 'react'

import { BiSearch } from 'react-icons/bi'

export const DisplayMainSearch = () => {
  const [type, setType] = useState({
    stays: true,
    experiences: false,
    onlineEx: false,
  })
  return (
    <section className="display-main-search">
      <div className="main-header-selected">
        <button>Stays</button>
        <button>Experiences</button>
        <button>Online Experiences</button>
      </div>
      <div className="second-header-selected">
        <article className="where">
          <button className=" btn-where">
            <h2>Where</h2>
            <h3>Search destinations</h3>
          </button>
        </article>
        <article className="check-in">
          <button className="btn-border btn-check-in">
            <h2>Check in</h2>
            <h3>Add dates</h3>
          </button>
        </article>
        <article className="check-out">
          <button className="btn-border btn-check-out">
            <h2>Check out</h2>
            <h3>Add dates</h3>
          </button>
        </article>
        <article className="who-search">
          <button className="btn-border btn-who">
            <h2>Who</h2>
            <h3>Add guests</h3>
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
