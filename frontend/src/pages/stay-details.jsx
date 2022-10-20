import "../assets/styles/cmps/react_dates_overrides.css"
import "react-dates/lib/css/_datepicker.css"
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range"
// import { addDays } from "date-fns";

// import ClampLines from "react-clamp-lines";
import { React, useEffect, useState, Component } from "react"
import { useParams, Link } from "react-router-dom"
import { stayService } from "../services/stay.service"
import LoadingScreen from "react-loading-screen"
import { MdIosShare } from "react-icons/md"
import { FiHeart, FiStar } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"
import DateRangePickerWrapper from "../cmps/calendar-small"
import { VscKey } from "react-icons/vsc"
import { GiPoolDive } from "react-icons/gi"

import DatePicker from "../cmps/calendar-large"
import { userService } from "../services/user.service"
import { utilService } from "../services/util.service"
import { orderService } from "../services/order.service"

// import moment from "moment"


// import { memoryUsage } from "node:process";
// import process from "process";


export const StayDetails = () => {


    // var process = require("process")
    // console.log(process.showMemory())


    const [stay, setStay] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState("none")
    const params = useParams()
    const loggedInUser = userService.getLoggedinUser()
    // const [guestsLeft, setGuestsLeft] = useState(null)
    const [isModal, setIsModal] = useState("none")
    const [dates, setDates] = useState({ startDate: null, endDate: null })
    const [totalDays, setTotalDays] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)
    // const [counterMaxed, setCounterMaxed] = useState("guest-counter-round-border")
    // const [toggleTotal, setToggleTotal] = useState(null)
    const [guestsNum, setGuestsNum] = useState({
        adults: 1,
        kids: 0,
        infants: 0,
        pets: 0,
    })

    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then(stay => {
            setStay(stay)
        })
    }

    const computeFees = () => {
        console.log('cimputing fees')
        setTotalDays(dates.endDate.diff(dates.startDate, 'days'))
        setTotalPrice(stay.price * dates.endDate.diff(dates.startDate, 'days'))
        // dates.endDate ? setToggleTotal('block') : setToggleDropdown(null)
        // console.log('total price is', stay.price * to.diff(from, 'days'))
        // moment(new Date()).diff(moment(new Date()), 'days') // 0
        // const diffInMs = Math.abs(dates.startDate - dates.endDate)
        // console.log(dates.startDate - dates.endDate)
        // const res = diffInMs / (1000 * 60 * 60 * 24)
        // console.log(res)
        // console.log(totalDays)
    }

    const handleDates = (startDate, endDate) => {
        setDates({ startDate: startDate, endDate: endDate })
    }

    const handleDropdown = () => {
        setToggleDropdown(toggleDropdown === "block" ? "none" : "block")
    }

    const confirmModal = () => {
        console.log('confritming')
        console.log(dates.endDate)
        setIsModal(!isModal)
    }

    const addOrder = () => {
        const order = {

            hostId: stay.host._id,
            createdAt: Date.now(),
            buyer: {
                _id: loggedInUser._id,
                fullname: loggedInUser.fullname
            },
            totalPrice: stay.price,
            startDate: dates.startDate,
            endDate: dates.endDate,
            guests: {
                adults: guestsNum.adults,
                kids: guestsNum.kids,
            },
            stay: {
                _id: stay._id,
                name: stay.name,
                price: stay.price
            },
            status: "pending"
        }
        orderService.save(order)
        console.log('order made')
        // navigate(`user/${loggedInUser._id}`)
    }


    const updateGuestCount = (ev) => {
        const currGroup = ev.target.name
        if (ev.target.value === "+") {
            setGuestsNum({
                ...guestsNum,
                [ev.target.name]: utilService.limitNumInRange(guestsNum[ev.target.name] + 1, 1, stay.capacity),
            })

        } else if (ev.target.value === "-") {
            if (currGroup === "adults") {
                setGuestsNum({
                    ...guestsNum,
                    [ev.target.name]: utilService.limitNumInRange(guestsNum[ev.target.name] - 1, 1, stay.capacity),
                })

            } else if (currGroup !== "adults") {
                setGuestsNum({
                    ...guestsNum,
                    [ev.target.name]: utilService.limitNumInRange(guestsNum[ev.target.name] - 1, 0, stay.capacity),
                })

            }
        }
    }



    // const capacity = (ev) => {
    //     const currTotalGuests = {...guestsNum} 
    //     // console.log('tot gues', guestsNum.adults, '+', guestsNum.kids, currTotalGuests)
    //     console.log(currTotalGuests)
    //     setGuestsLeft(utilService.limitNumInRange(currTotalGuests, 0, stay.capacity))
    // console.log('cap is', stay.capacity, 'currTotal is', currTotalGuests, 'capacityLeft', capacityLeft, 'guestsLeft', guestsLeft)
    // if (ev === '+') { currTotalGuests-- }
    // else if (ev === '-' ) { currTotalGuests++ }
    // }
    // setGuestsLeft

    useEffect(() => {
        console.log("details is up")
        // const loggedInUser = userService.getLoggedinUser()

        loadStay()
    }, [])

    if (!stay) return <LoadingScreen
        loading={true}
        bgColor="rgba(255,255,255,0.5)"
        spinnerColor="#4850b9"
        textColor="#676767"
        logoSrc="../logo.png"
        text="details loading!"
    >
        {" "}
    </LoadingScreen>

    // const numbers = [1, 2, 3, 4, 5];
    // const listItems = numbers.map((number) => {`<li>${number}</li>`})

    // const reviews = stay.reviews ? stay.reviews : "No Reviews yet"
    const rate = stay.rate ? stay.rate : "0"
    const bathrooms = stay.bathrooms === 1 ? stay.bathrooms + " bath" : stay.bathrooms + " baths"
    const guestOrGuests = guestsNum.adults + guestsNum.kids >= 2 ? " guests" : " guest"
    const guestsNumTxtOutput = guestsNum.adults + guestsNum.kids + guestOrGuests
    const totalGuests = guestsNum.adults + guestsNum.kids

    const infantOrInfants = () => {
        if (guestsNum.infants === 1) return ', 1 infant'
        else if (guestsNum.infants >= 2) return `, ${guestsNum.infants} infants`
        else return ''
    }


    return (
        <div className="show-stay" onClick={toggleDropdown === "block" ? () => handleDropdown() : null}>
            <header className="details-header" >
                <div className="headline">
                    <h2 className="headline-content">{stay.name}</h2>
                </div>
                <div className="sub-headline-container">
                    <div className="sub-headline">
                        <div className="sub-headline-content">
                            <span className="score-icon"><AiFillStar /></span>
                            <span>{rate}</span>
                            <span className="details-sep">·</span>
                            <span className="details-reviews-total">{stay.reviews.length}</span>
                            <span className="details-sep">·</span>
                            <span className="location-contnet">{stay.loc.address}</span>
                        </div>
                    </div>
                    <div className="headline-btns">
                        <div className="details-share-btns">
                            <span className="details-share-icon"><MdIosShare /></span>
                            <span className="details-share-btn">Share</span>
                        </div>
                        <div className="details-save-btns">
                            <span className="details-like-icon"><FiHeart /></span>
                            <span className="details-like-btn">Save</span>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <ol className="preview-stays">
                    <li className="large-preview">
                        <img className="large-img" src={stay.imgUrls[0]} alt="stay image"></img>
                    </li>
                    <li className="small-preview-1">
                        <img className="small-img" src={stay.imgUrls[1]} alt="stay image"></img>
                    </li>
                    <li className="small-preview-2">
                        <img className="small-img" src={stay.imgUrls[2]} alt="stay image"></img>
                    </li>
                    <li className="small-preview-3">
                        <img className="small-img" src={stay.imgUrls[3]} alt="stay image"></img>
                    </li>
                    <li className="small-preview-4">
                        <img className="small-img" src={stay.imgUrls[4]} alt="stay image"></img>
                    </li>
                </ol>
            </section>

            <main className="main-details">
                <div className="row-left">
                    <section className="place-details-container">
                        <div className="place-details">
                            <div className="place-desc">
                                <div className="hosted-by">{stay.roomType} hosted by {stay.host.fullname}</div>
                                <ol className="stay-specs">
                                    <li className="guests-num">{stay.capacity} guests</li>
                                    <li className="details-sep">·</li>
                                    <li className="bedrooms">{stay.badrooms} badrooms</li>
                                    <li className="details-sep">·</li>
                                    <li className="beds">{stay.capacity} beds</li>
                                    <li className="details-sep">·</li>
                                    <li className="baths">{bathrooms}</li>
                                </ol>
                            </div>
                            <Link to={`/user/${stay.host._id}`} >
                                <div className="host-avatar-container">
                                    <img src={stay.host.thumbnailUrl} className="host-avatar" href="" alt="user image"></img>
                                </div>
                            </Link>
                        </div>
                    </section>

                    <section className="highlights-details border-line">
                        <ol className="highlights-list">
                            <li className="highlight-container">
                                <span className="highlight-icon"><VscKey /></span>
                                <div className="highlight-elements">
                                    <span className="highlight-headline">Great check-in experience</span>
                                    <span className="highlight-content">100% of recent guests gave the check-in process a 5-star rating.</span>
                                </div>
                            </li>
                            <li className="highlight-container">
                                <span className="highlight-icon"><GiPoolDive /></span>
                                <div className="highlight-elements">
                                    <span className="highlight-headline">Dive right in</span>
                                    <span className="snd-highlight-content">This is one of the few places in the area with a pool.</span>
                                </div>
                            </li>
                            <li className="highlight-container">
                                <span className="highlight-icon"><FiStar /></span>
                                <div className="highlight-elements">
                                    <span className="highlight-headline">Experienced host</span>
                                    <span className="highlight-content">{stay.host.name} has 31 reviews for other places.</span>
                                </div>
                            </li>
                        </ol>
                    </section >

                    <section className="air-cover border-line">
                        <div className="air-cover-container">
                            <img className="air-cover-img" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"></img>
                            <p className="air-cover-content">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                            <span className="air-cover-modal">Learn more</span>
                        </div>
                    </section>

                    <section className="stay-summary border-line">
                        {/* <div className="stay-summary"> */}
                        {stay.summary}
                        {/* </div> */}
                    </section>
                    {/* <br></br> */}
                    {/* <section className="air-cover"> */}
                    {/* <div className="air-cover-headline"></div> */}
                    {/* <p className="air-cover-desc">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p> */}
                    {/* <button className="air-cover-btn">Learn more</button> */}
                    {/* learn more opens modal with booking protection */}
                    {/* </section> */}
                    <section className="amenities-container border-line">
                        <div className="ameneties-headline">What this place offers</div>
                        <ol className="amenities">


                            {
                                stay.amenities.map((amenity, idx) => {
                                    if (idx < 10) {
                                        return (<li key={amenity.slice(0, 5)}>{amenity}</li>)
                                    }
                                }
                                )}
                        </ol>
                        <div className="button-23" role="button">Show all {stay.amenities.length} amenities</div>
                    </section>
                </div >
                <section className="sidenav-container" style={{ height: dates.endDate ? "44%" : "30%" }}>
                    <section className="order-container" onClick={() => computeFees}>
                        <div className="order-form-header">
                            <p>
                                <span className="reserve-span reserve-cost">${stay.price}</span>
                                / night</p>
                            <p><AiFillStar />4.38 ·
                                <span className="reserve-span reserve-reviews">{stay.reviews.length} reviews</span>
                            </p>
                        </div>
                        <div className="order-data">
                            <div className="date-picker">
                                <div className="date-input">

                                    <DateRangePickerWrapper computeFees={computeFees} handleDates={handleDates} dates={dates} />
                                </div>
                            </div>
                            <div className="guests-input-container">
                                <div className="guests-input" type="checkbox" onClick={() => handleDropdown()} >
                                    <div className="reserve-textbox-headline" value="GUESTS" readOnly>GUESTS</div>
                                    <span className="reserve-gustsnum-input">{guestsNumTxtOutput + infantOrInfants()}</span>
                                </div>
                            </div>
                            <div onClick={e => e.stopPropagation()} className="reserve-guests-options" style={{ display: toggleDropdown }}>
                                <div className="age-group-counter">
                                    <div className="age-group-container">
                                        <div className="reserve-counter-headline" value="Adults">Adults</div>
                                        <div className="reserve-participants">Age 13+</div>
                                    </div>
                                    <div className="reserve-counter">
                                        {
                                            guestsNum.adults < 2 ?
                                                <button className="guest-counter-round-border-OFF">-</button> :
                                                <button onClick={updateGuestCount} value="-" name="adults" className="guest-counter-round-border">-</button>
                                        }
                                        {guestsNum.adults}
                                        {
                                            totalGuests === stay.capacity ?
                                                <button className="guest-counter-round-border-OFF">+</button> :
                                                <button onClick={updateGuestCount} className="guest-counter-round-border" value="+" name="adults">+</button>
                                        }
                                    </div>
                                </div>

                                <div className="age-group-counter">

                                    <div className="age-group-container">
                                        <div className="reserve-counter-headline" value="Children">Kids</div>
                                        <div className="reserve-participants">Ages 2-12</div>
                                    </div>
                                    <div className="reserve-counter">
                                        {
                                            guestsNum.kids < 1 ?
                                                <button className="guest-counter-round-border-OFF">-</button> :
                                                <button onClick={updateGuestCount} value="-" name="kids" className="guest-counter-round-border">-</button>
                                        }
                                        {guestsNum.kids}
                                        {
                                            totalGuests === stay.capacity ?
                                                <button className="guest-counter-round-border-OFF">+</button> :
                                                <button onClick={updateGuestCount} className="guest-counter-round-border" value="+" name="kids">+</button>
                                        }
                                    </div>
                                </div>
                                <div className="age-group-counter">
                                    <div className="age-group-container">
                                        <div className="reserve-counter-headline" value="Infants">Infants</div>
                                        <div className="reserve-participants">Under 2</div>
                                    </div>
                                    <div className="reserve-counter">
                                        {
                                            guestsNum.infants === 0 ?
                                                <button className="guest-counter-round-border-OFF">-</button> :
                                                <button onClick={updateGuestCount} value="-" name="infants" className="guest-counter-round-border">-</button>
                                        }
                                        {guestsNum.infants}
                                        <button onClick={updateGuestCount} value="+" name="infants" className="guest-counter-round-border">+</button>
                                    </div>
                                </div>
                                <div className="age-group-counter">
                                    <div className="age-group-container">
                                        <div className="reserve-counter-headline" value="Pets">Pets</div>
                                        <div className="reserve-participants reserve-pets">Bringing a service animal?</div>
                                    </div>
                                    <div className="reserve-counter">
                                        {
                                            guestsNum.pets === 0 ?
                                                <button className="guest-counter-round-border-OFF">-</button> :
                                                <button onClick={updateGuestCount} value="-" name="pets" className="guest-counter-round-border">-</button>
                                        }
                                        {guestsNum.pets}
                                        <button onClick={updateGuestCount} value="+" name="pets" className="guest-counter-round-border">+</button>
                                    </div>
                                </div>
                                <div className="reserve-counter-capicity">This place has maximum of {stay.capacity} guests, not including infants.</div>
                                {/* <button className="close-reserve-counter button-23" onClick={() => handleDropdown()}>Close</button> */}
                            </div>
                        </div>


                        <div className="reserve-btn-container">
                            <div className="cell"></div>
                            <div className="reserve-content">
                                <button className="reserve-action-btn sidenav-submit reserve-trigger">
                                    <span className="reserve-span" onClick={confirmModal}>Check availability</span>
                                </button>

                                <div className="reserve-modal">
                                    <div className="reserve-modal-content">
                                        <span className="reserve-close-button">&times;</span>
                                        <h1>thank you for you're order!</h1> {<p>{stay.name},</p>}
                                        <span>will confirm you're order soon..</span>
                                        {/* <p><Link to={`/user/${loggedInUser._id}`} className="user-orders-link">my orders</Link></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* {toggleTotal ? <div> test</div> : <div>nooo</div> } */}
                        <div className="total-container" style={{ display: dates.endDate ? "flex" : "none" }}>
                            <div className="total-fee-inline">
                                <div className="content-fee">{stay.price} x {totalDays} nights</div>
                                <span className="total-fee">{totalPrice}</span>
                            </div>

                            <div className="total-fee-inline">
                                <div className="content-fee">Cleaning fee</div>
                                <span className="total-fee">$35</span>
                            </div>

                            <div className="total-fee-inline">
                                <div className="content-fee">Service fee</div>
                                <span className="total-fee">$0</span>
                            </div>

                            <div className="total-fee-inline border-line">
                                <div className="content-fee">Total</div>
                                <span className="total-fee">{totalPrice + 35}</span>
                            </div>
                        </div>


                    </section>
                    <p className="reserve-footer">Report this listing</p>
                </section>

                <section className="details-calendar border-line">
                    <DatePicker handleDates={handleDates} dates={dates} />
                </section>


            </main >
            <section className="reviews-specs border-line">
                <div className="total-reviews">
                    <span className="score-icon"><AiFillStar /></span>
                    <span>{rate}</span>
                    <span className="details-sep">·</span>
                    <span>{stay.reviews.length} reviews</span>
                </div>


                <div className="row">
                    <div className="reviews-container">
                        {
                            stay.reviews.map((review, index) => {
                                if (index < 6) {
                                    // console.log(review.txt.length)
                                    if (review.txt.length > 140) { // prep for read more
                                        const reviewText = review
                                    } else {
                                        const reviewText = review
                                    }
                                    return (
                                        <div className="review" key={review.by.fullname}>
                                            <div className="reviewer-avatar-container">
                                                <img src={review.by.imgUrl} className="reviewer-avatar" alt="user image"></img>
                                            </div>
                                            <div className="review-details">
                                                <ol className="name-date">
                                                    <li className="reviewr-name">{review.by.fullname}</li>
                                                    <li className="review-created">May 2022</li>
                                                    <li className="review-content">{review.txt}</li>

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
