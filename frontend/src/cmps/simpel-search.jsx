import { BiSearch } from 'react-icons/bi'

export const SimpelSearch = () => {
  return (
    <section className="simple-search">
      <form>
        <label htmlFor="search-header">
          <input
            type="text"
            id="search-header"
            placeholder="Start your search "
          />
          <BiSearch className=" search-icon" />
        </label>
      </form>
    </section>
  )
}
