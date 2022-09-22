import { Link } from 'react-router-dom'
import { utilService } from '../services/util.service'
import { userService } from '../services/user.service'
import { ImgCarousel } from '../cmps/img-carousel'
import { LikeBtn } from '../cmps/like-btn'
export function StayPreview({ stay, onRemoveStay, onUpdateStay }) {
  const loggedinUser = userService.getLoggedinUser()
  const loggedinUserLoc = { lat: 32.109333, lng: 34.855499 }

  const measure = (lat1, lon1, lat2, lon2) => {
    // if (window.navigator.geolocation) {
    //     console.log(' Geolocation available',window.navigator.geolocation.getCurrentPosition())
    //    }

    var R = 6378.137 // Radius of earth in KM
    var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180
    var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c
    return d * 1000 // meters
  }
  // const destination=measure(loggedinUserLoc.lat,loggedinUserLoc.lng,stay.loc.lat,stay.loc.lng)
  // const loggedinUser=''
  // console.log('stay.owner',loggedinUser)
  return (
    <div className="stay-preview">
      {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" class="liked"
                style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: var(--f-mkcy-f); stroke-width: 2; overflow: visible;">
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.05
                1-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg> */}
      <div className="preview-img-container">
        <ImgCarousel imgUrls={stay.imgUrls} />
        <div className="like-btn-preview-container">
          <LikeBtn />
        </div>
      </div>
      <Link to={`/stay/${stay._id}`} className="info">
        {/* <img className='preview-img' src='https://stayinn-vacation.herokuapp.com/assets/253.fe906c29.jpeg' alt="" /> */}
        <div className="preview-text-container">
          {/* <div><i className="fa-solid fa-gamepad"></i></div> */}
          <section className="preview-title-container">
            <div className="preview-title">
              <span>{stay.loc.city}</span>,<span>{stay.loc.country}</span>
            </div>
            <div>
              <img
                className="preview-star-img"
                src="https://stayinn-vacation.herokuapp.com/assets/star.692b808f.svg"
                alt=""
              />
              <span>{stay.rate}</span>
            </div>
          </section>
          {/* <p><small>{stay.type}</small>-|-
                        <small>Owner: <span>{stay.owner && stay.owner.fullname}</span></small>
                    </p> */}
          <section className="preview-details-container">
            <p>
              <small>{stay.type}</small>
            </p>
            <small>
              {/* <span>{(destination / 1000).toLocaleString()}</span> */}
              <span>kilometers</span>
            </small>
          </section>

          <span>
            {' '}
            $<span>{stay.price.toLocaleString()}</span>\night
          </span>
          {/* <p><small>{utilService.getFormattedTime(new Date(stay.createdAt))}</small></p> */}
        </div>
      </Link>
      <section className="actions">
        {/* <button onClick={() => { onRemoveStay(stay._id) }}>❌</button> */}
        {stay?.owner === loggedinUser && (
          <Link to={`/stay/edit/${stay._id}`}>
            <button>🖍</button>
          </Link>
        )}
      </section>
    </div>
  )
}
