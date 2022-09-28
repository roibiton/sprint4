import "../assets/styles/cmps/react_dates_overrides.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range'
// import { addDays } from 'date-fns';

// import ClampLines from 'react-clamp-lines';
import { React, Component } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import LoadingScreen from "react-loading-screen"
import { MdIosShare } from 'react-icons/md'
import { FiHeart, FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import DateRangePickerWrapper from '../cmps/calendar-small';
import { VscKey } from 'react-icons/vsc';
import { GiPoolDive } from 'react-icons/gi';
import DatePicker from '../cmps/calendar-large';
import "react-dates/lib/css/_datepicker.css";
import Dropdown from 'react-bootstrap/Dropdown'

// import { memoryUsage } from 'node:process';
// import process from 'process';


export const StayDetails = () => {


    // var process = require('process')
    // console.log(process.showMemory())


    // Prints the output as an object
    const [stay, setStay] = useState(null)
    const params = useParams()
    // const navigate = useNavigate()
    useEffect(() => {
        // console.log('details params', params)
        console.log('stay', typeof stay)
        console.log('details is up')
        loadStay()
        // console.log(stay.reviews)
    }, [])


    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then(stay => {
            setStay(stay)
        })
    }

    if (!stay) return <LoadingScreen
        loading={true}
        bgColor="rgba(255,255,255,0.5)"
        spinnerColor="#4850b9"
        textColor="#676767"
        logoSrc=""
        text="details loading!"
    >
        {" "}
    </LoadingScreen>

    // const numbers = [1, 2, 3, 4, 5];
    // const listItems = numbers.map((number) => {`<li>${number}</li>`})

    // const reviews = stay.reviews ? stay.reviews : 'No Reviews yet'
    const rate = stay.rate ? stay.rate : '0'
    const bathrooms = stay.bathrooms === 1 ? stay.bathrooms + ' bath' : stay.bathrooms + ' baths'

    return (
        <div className='show-stay'>
            <header className='details-header'>
                <div className='headline'>
                    <h2 className='headline-content'>{stay.name}</h2>
                </div>
                <div className='sub-headline-container'>
                    <div className='sub-headline'>
                        <div className='sub-headline-content'>
                            <span className='score-icon'><AiFillStar /></span>
                            <span>{rate}</span>
                            <span className='details-sep'>·</span>
                            <span className='details-reviews-total'>{stay.reviews.length}</span>
                            <span className='details-sep'>·</span>
                            <span className='location-contnet'>{stay.loc.address}</span>
                        </div>
                    </div>
                    <div className='headline-btns'>
                        <div className='details-share-btns'>
                            <span className='details-share-icon'><MdIosShare /></span>
                            <span className='details-share-btn'>Share</span>
                        </div>
                        <div className='details-save-btns'>
                            <span className='details-like-icon'><FiHeart /></span>
                            <span className='details-like-btn'>Save</span>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <ol className='preview-stays'>
                    <li className='large-preview'>
                        <img className='large-img' src={stay.imgUrls[0]} alt="Whoops!"></img>
                    </li>
                    <li className='small-preview-1'>
                        <img className='small-img' src={stay.imgUrls[1]} alt="Whoops!"></img>
                    </li>
                    <li className='small-preview-2'>
                        <img className='small-img' src={stay.imgUrls[2]} alt="Whoops!"></img>
                    </li>
                    <li className='small-preview-3'>
                        <img className='small-img' src={stay.imgUrls[3]} alt="Whoops!"></img>
                    </li>
                    <li className='small-preview-4'>
                        <img className='small-img' src={stay.imgUrls[4]} alt="Whoops!"></img>
                    </li>
                </ol>
            </section>

            <main className='main-details'>
                <div className='row-left'>
                    <section className='place-details-container'>
                        <div className='place-details'>
                            <div className='place-desc'>
                                <div className='hosted-by'>{stay.roomType} hosted by {stay.host.fullname}</div>
                                <ol className='stay-specs'>
                                    <li className='guests-num'>{stay.capacity} guests</li>
                                    <li className='details-sep'>·</li>
                                    <li className='bedrooms'>{stay.badrooms} badrooms</li>
                                    <li className='details-sep'>·</li>
                                    <li className='beds'>{stay.capacity} beds</li>
                                    <li className='details-sep'>·</li>
                                    <li className='baths'>{bathrooms}</li>
                                </ol>
                            </div>
                            <div className='host-avatar-container'>
                                <img src={stay.host.thumbnailUrl} className='host-avatar' alt="Whoops!"></img>
                            </div>
                        </div>
                    </section>

                    <section className='highlights-details reserve-border'>
                        <ol className='highlights-list'>
                            <li className='highlight-container'>
                                <span className='highlight-icon'><VscKey /></span>
                                <div className='highlight-elements'>
                                    <span className='highlight-headline'>Great check-in experience</span>
                                    <span className='highlight-content'>100% of recent guests gave the check-in process a 5-star rating.</span>
                                </div>
                            </li>
                            <li className='highlight-container'>
                                <span className='highlight-icon'><GiPoolDive /></span>
                                <div className='highlight-elements'>
                                    <span className='highlight-headline'>Dive right in</span>
                                    <span className='snd-highlight-content'>This is one of the few places in the area with a pool.</span>
                                </div>
                            </li>
                            <li className='highlight-container'>
                                <span className='highlight-icon'><FiStar /></span>
                                <div className='highlight-elements'>
                                    <span className='highlight-headline'>Experienced host</span>
                                    <span className='highlight-content'>{stay.host.name} has 31 reviews for other places.</span>
                                </div>
                            </li>
                        </ol>
                    </section >

                    <section className='air-cover reserve-border'>
                        <div className='air-cover-container'>
                            <img className='air-cover-img' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"></img>
                            <p className='air-cover-content'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                            <span className='air-cover-modal'>Learn more</span>
                        </div>
                    </section>

                    <section className='stay-summary reserve-border'>
                        {/* <div className='stay-summary'> */}
                        {stay.summary}
                        {/* </div> */}
                    </section>
                    {/* <br></br> */}
                    {/* <section className='air-cover'> */}
                    {/* <div className='air-cover-headline'></div> */}
                    {/* <p className='air-cover-desc'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p> */}
                    {/* <button className='air-cover-btn'>Learn more</button> */}
                    {/* learn more opens modal with booking protection */}
                    {/* </section> */}
                    <section className='amenities-container reserve-border'>
                        <div className='ameneties-headline'>What this place offers</div>
                        <ol className='amenities'>


                            {
                                stay.amenities.map((amenity, idx) => {
                                    if (idx < 10) {
                                        return (<li>{amenity}</li>)
                                    }
                                }
                                )}
                        </ol>
                        <div className="button-23" role="button">Show all {stay.amenities.length} amenities</div>
                    </section>
                    {/* <div className='reserve-border'><CalendarDetails /></div> */}
                </div >
                {/* <section className='side-row'> */}
                < section className='sidenav-container' >
                    <form className="sidenav-form">
                        <div className='reserve-header'>
                            <span>${stay.price} night</span>
                            <span><FiStar />{rate} · {stay.reviews.length}</span>

                        </div>
                        <div className='reserve-calendar'>
                            <DateRangePickerWrapper />
                            {/* <div className='check-in'>check-in</div> */}
                            {/* <div className='check-out'>check-out</div> */}
                        </div>

                     
                            {/* <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="icon-humburger">
            <FiMenu />
          </div>
          <div className="icon-user">
            <BsPersonCircle />
          </div>
        </Dropdown.Toggle> */}
                            <Dropdown>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Adults</Dropdown.Item>
                                    <Dropdown.Item>Children</Dropdown.Item>
                                    <Dropdown.Item>Infants</Dropdown.Item>
                                    <Dropdown.Item>Pets</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                            <button className='sidenav-submit'>Reserve</button>
                            <p className='under-line-reserve'>You won't be charged yet</p>
                            <div className='fees'>
                                <span className='total-nights'>{stay.price} x 5 nights</span>
                                <span className='nights-fee'>₪981</span>
                            </div>
                            <div className='service'>
                                <span className='service-txt'>Service fee</span>
                                <span className='service-fee'>₪150</span>
                            </div>
                            <div className='reserve-total'>
                                <span>Total</span>
                                <span>₪1,216</span>
                            </div>
                    </form>
                </section >

                <section className='details-calendar reserve-border'>
                    <DatePicker />
                </section>


            </main >
            <section className='reviews-specs reserve-border'>
                <div className='total-reviews'>
                    <span className='score-icon'><AiFillStar /></span>
                    <span>{rate}</span>
                    <span className='details-sep'>·</span>
                    <span>{stay.reviews.length} reviews</span>
                </div>


                <div className="row">
                    <div className='reviews-container'>
                        {
                            stay.reviews.map((review, index) => {
                                if (index < 6) {
                                    console.log(review.txt.length)
                                    if (review.txt.length > 140) {
                                        const reviewText = review
                                        console.log('first', reviewText)
                                    } else {
                                        const reviewText = review
                                        console.log('second', reviewText)
                                    }
                                    return (
                                        <div className='review'>
                                            <div className='reviewer-avatar-container'>
                                                <img src={review.by.imgUrl} className='reviewer-avatar' alt="Whoops!"></img>
                                            </div>
                                            <div className='review-details'>
                                                <ol className='name-date'>
                                                    <li className='reviewr-name'>{review.by.fullname}</li>
                                                    <li className='review-created'>May 2022</li>

                                                    <li className='review-content'>{review.txt}</li>


                                                </ol>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </section>

        </div >
    )
}
