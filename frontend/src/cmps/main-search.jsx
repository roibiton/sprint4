import { BiSearch } from 'react-icons/bi'

export const MainSearch = ({ toggleSearch }) => {
  return (
    <section className="main-search">
      <button
        onClick={() => {
          toggleSearch()
        }}
      >
        <h3>Anywhere | Any Week | Add guests</h3>

        <h2>
          <BiSearch className=" search-icon" />
        </h2>
      </button>
    </section>
  )
}
