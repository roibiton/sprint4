import { Component, React } from 'react'

export class FormFilterModal extends Component {
  getRoomsBeds = (element) => {
    return (
      <div>
        <h3>element</h3>
        <button>Any</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8+</button>
      </div>
    )
  }
  getFilterPropertyType = () => {
    return (
      <div>
        <button>
          <h2>🏠</h2>
          <h3>House</h3>
        </button>
        <button>
          <h2>🏠</h2>
          <h3>Apartment</h3>
        </button>
        <button>
          <h2>🏡</h2>
          <h3>Guesthouse</h3>
        </button>
        <button>
          <h2>🏩</h2>
          <h3>Hotel</h3>
        </button>
      </div>
    )
  }
  render() {
    return (
      <section className="main-form-filter">
        <article className="price-range">Price Range</article>

        <article className="type-of-place">
          <h1>Type of place</h1>
          <div className="entire-place">
            <input type="checkbox" id="entire-place"></input>
            <label htmlFor="entire-place">Entire place</label>
            <h3>A place all to yourself</h3>
          </div>
          <div className="shared-room">
            <input type="checkbox" id="shared-room"></input>
            <label htmlFor="shared-room">Shared room</label>
            <h3>
              A sleeping space and common areas that may be shared with others
            </h3>
          </div>
          <div className="private-room">
            <input type="checkbox" id="private-room"></input>
            <label htmlFor="private-room">Private room</label>
            <h3>
              Your own room in a home or a hotel, plus some shared common spaces
            </h3>
          </div>
        </article>

        <article className="rooms-and-beds">
          {this.getRoomsBeds('Bedrooms')}
          {this.getRoomsBeds('Beds')}
          {this.getRoomsBeds('Bathrooms')}
        </article>

        <article className="property-type">
          <h1>Property type</h1>
          {this.getFilterPropertyType()}
        </article>

        <article className="amenities">
          <h1>Amenities</h1>
          <h3>Essentials</h3>
          <div className="wifi">
            <input type="checkbox" id="wifi"></input>
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div className="washer">
            <input type="checkbox" id="washer"></input>
            <label htmlFor="washer">Washer</label>
          </div>
          <div className="air-conditioning">
            <input type="checkbox" id="air-conditioning"></input>
            <label htmlFor="air-conditioning">Air conditioning</label>
          </div>
          <div className="kitchen">
            <input type="checkbox" id="kitchen"></input>
            <label htmlFor="kitchen">Kitchen</label>
          </div>
        </article>

        <article className="language">
          <h1>Host language</h1>

          <div className="english">
            <input type="checkbox" id="english"></input>
            <label htmlFor="english">English</label>
          </div>
          <div className="german">
            <input type="checkbox" id="german"></input>
            <label htmlFor="german">German</label>
          </div>
          <div className="french">
            <input type="checkbox" id="french"></input>
            <label htmlFor="french">French</label>
          </div>
          <div className="japanese">
            <input type="checkbox" id="japanese"></input>
            <label htmlFor="japanese">Japanese</label>
          </div>
        </article>
      </section>
    )
  }
}
