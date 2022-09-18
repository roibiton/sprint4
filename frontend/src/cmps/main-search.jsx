import { BiSearch } from 'react-icons/bi'

export const MainSearch = ({ toggleSearch }) => {
  return (
    <section className="main-search">
      <button
        onClick={() => {
          toggleSearch()
        }}
      >
        Anywhere | Any Week | Add guests
        <span>
          <BiSearch className=" search-icon" />
        </span>
      </button>
    </section>
  )
}
