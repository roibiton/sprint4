import { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ModalCalendarFilter } from './modal-calendar-filter'
import { ModalMapFilter } from './modal-map-filter'
import { WhoFilter } from './modal-who-filter'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import pinMap from '../assets/img/pin-map.png'

// import ModalCalendarFilter from '../cmps/calendar-large';

export const DisplayMainSearch = () => {
  const [type, setType] = useState({
    stays: true,
    experiences: false,
    onlineEx: false,
  })
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [filterBy, setFilterBy] = useState({ txt: '' })
  const navigate = useNavigate()
  const inputRef = useRef()

  useEffect(() => {
    console.log('hellooo:')
    // inputRef.current.focus()
  },[])
  

  const openInputSearch = () => {
    console.log(isSearchOpen)
    setIsSearchOpen(!isSearchOpen)
   
  }
  const handleChange = (ev) => {
    ev.preventDefault()
    const target=ev.target
    const field = target.name
    let value = target.type === 'range' ? +target.value : target.value

    setFilterBy({ txt: value })
  }

  const doSearch = () => {
    
    setIsSearchOpen(!isSearchOpen)
    navigate(`/stay/explore/${filterBy.txt}`)
  }

  const getClassName=()=>{
  return !isSearchOpen?'where':'where active'
  }

  return (
    <section className="display-main-search">
      <div className="top-header-selected">
        
        <Link to={``}>
        <button>Stays</button>
        </Link>
        
        <Link to={`/stay/explore/Lakefront`} >
        <button>Experiences</button>
        </Link>
        <Link to={`/stay/explore/National parks`} >
        <button>Online Experiences</button>
        </Link>
       
      </div>
      <div className='bottom-header-selected'>
        <article className={getClassName()}>
          <button className=" btn-where btn-border" onClick={openInputSearch}>
          {!isSearchOpen && (
            <div className="btn-txt-where">
          <h3>Where</h3>
          <h4>Search destinations</h4>
          </div>)}
          </button>
            {(isSearchOpen&&!filterBy.txt ) && <ModalMapFilter />}
            {(isSearchOpen&&filterBy.txt )&&
             (<section className="filter-search-list">
              <ul>
                <Link to={`/stay/explore/us`} >
                <li>
                       <img src={pinMap} />
                       <h4>United States</h4>
                </li>
                  </Link>
                <Link to={`/stay/explore/Canada`} >
                <li>
                       <img src={pinMap} />
                       <h4>Canada</h4>
                </li>
                  </Link>
                <Link to={`/stay/explore/Portugal`} >
                <li>
                       <img src={pinMap} />
                       <h4>Portugal</h4>
                </li>
                  </Link>
                <Link to={`/stay/explore/Spain`} >
                <li>
                       <img src={pinMap} />
                       <h4>Spain</h4>
                </li>
                  </Link>
                <Link to={`/stay/explore/Turkey`} >
                <li>
                       <img src={pinMap} />
                       <h4>Turkey</h4>
                </li>
                  </Link>
              </ul>

             </section>)}
          {isSearchOpen && (
            <input
            ref={inputRef}
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
            {/* <ModalCalendarFilter type={'check-in'}/> */}
            {/* <DatePicker /> */}
          </button>
        </article>

        <article className="check-out">
          <button className="btn-border btn-check-out">
            {/* <ModalCalendarFilter type={'check-out'}/> */}
            <h3 >Check out</h3>
            <h4>Add dates</h4>
          </button>
        </article>

        <article className="who-search">
          <button className=" btn-who">
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
