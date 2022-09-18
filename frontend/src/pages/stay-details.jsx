import { React, Component } from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import LoadingScreen from "react-loading-screen"
import { MdIosShare } from 'react-icons/md'
import { FiHeart, FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'


export const StayDetails = (props) => {

    const debugging = true
    const [stay, setStay] = useState(null)
    const params = useParams()
    // const navigate = useNavigate()
    useEffect(() => {
        console.log(params)
        console.log('stay app is up')
        loadStay()
    }, [])


    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then(stay => {
            setStay(stay)
        })
    }


    if (!debugging) return <LoadingScreen
        loading={true}
        bgColor="rgba(255,255,255,0.5)"
        spinnerColor="#4850b9"
        textColor="#676767"
        logoSrc=""
        text="details loading!"
    >
        {" "}
    </LoadingScreen>


    return (
        <div className='show-stay'>
            <header className='details-header'>
                <div className='headline'>
                    <h1 className='headline-content'>Adrasan da Sonsuzluk Havuzlu Mağara Villa (No:5)</h1>
                </div>
                <div className='sub-headline-container'>
                    <div className='sub-headline'>
                        <div className='sub-headline-content'>
                            <span className='score-icon'><AiFillStar /></span>
                            <span>4.88</span>
                            <span className='details-sep'>·</span>
                            <span>8 reviews</span>
                            <span className='details-sep'>·</span>
                            <span className='location-contnet'>Kumluca, Antalya, Turkey</span>
                        </div>
                    </div>
                    <div className='headline-btns'>
                        <div className='share-btns'>
                            <span className='share-icon'><MdIosShare /></span>
                            <span className='share-btn'>Share</span>
                        </div>
                        <div className='save-btns'>
                            <span className='like-icon'><FiHeart /></span>
                            <span className='like-btn'>Save</span>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <ol className='preview-imgs'>
                    <li className='large-img'>
                        <img src="https://stayinn-vacation.herokuapp.com/assets/202.7a346774.jpeg" className='large-preview'></img>
                    </li>
                    <li className='fst-imgs-row'>
                        <img src="https://stayinn-vacation.herokuapp.com/assets/016.788b9ce3.jpeg" className='small-preview'></img>
                        <img src="https://stayinn-vacation.herokuapp.com/assets/121.d365d6fa.jpeg" className='small-preview'></img>
                    </li>
                    <li className='snd-imgs-row'>
                        <img src="https://stayinn-vacation.herokuapp.com/assets/070.822f9f43.jpeg" className='small-preview'></img>
                        <img src="https://stayinn-vacation.herokuapp.com/assets/141.84d5af48.jpeg" className='small-preview'></img>
                    </li>
                </ol>
            </section>

            <main className='main-details'>
                
                <section className='place-details-container'>
                    <div className='place-details'>
                        <div className='place-desc'>
                            <h2 className='hosted-by'>Entire villa hosted by Halis</h2>
                            <ol className='stay-specs'>
                                <li className='guests-num'>5 guests</li>
                                <li className='details-sep'>·</li>
                                <li className='bedrooms'>2 bedrooms</li>
                                <li className='details-sep'>·</li>
                                <li className='beds'>2 beds</li>
                                <li className='details-sep'>·</li>
                                <li className='baths'>2 baths</li>
                            </ol>
                        </div>
                        <div className='host-avatar-container'>
                            <img src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" className='host-avatar'></img>
                        </div>
                    </div>
                </section>
                <form class="sidenav">
                    <div className='reserve-header'></div>
                    <div className='reserve-calendar'>
                        <div className='check-in'>check-in</div>
                        <div className='check-out'>check-out</div>
                    </div>
                    <div className='guests-dropdown'></div>
                    <button className='sidenav-submit'>Reserve</button>
                </form>
                <br></br>
                <section className='stay-summary'>
                    {/* <div className='stay-summary'> */}
                    Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ "The Space" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.
                    {/* </div> */}
                </section>
                {/* <br></br> */}
                {/* <section className='air-cover'> */}
                {/* <div className='air-cover-headline'></div> */}
                {/* <p className='air-cover-desc'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p> */}
                {/* <button className='air-cover-btn'>Learn more</button> */}
                {/* learn more opens modal with booking protection */}
                {/* </section> */}
                <section className='amenities-container'>
                    
                <div className='ameneties-headline'>What this place offers</div>
                        <ol className='amenities'>
                            <li>Essentials</li>
                            <li>Bathtub</li>
                            <li>Elevator</li>
                            <li>BBQ grill</li>
                            <li>Stove</li>
                            <li>Dishes and silverware</li>
                            <li>Hot water</li>
                            <li>Free parking on premises</li>
                        </ol>
                    
                </section>
            </main>
            <section className='reviews-specs'>
                <div className='total-reviews'>
                    <span className='score-icon'><AiFillStar /></span>
                    <span>4.88</span>
                    <span className='details-sep'>·</span>
                    <span>8 reviews</span>
                </div>
                <div className='reviews-container'>
                    <div className='review'>
                        <div className='reviewer-avatar-container'>
                            <img src='https://xsgames.co/randomusers/assets/avatars/female/0.jpg' className='reviewer-avatar'></img>
                        </div>
                        <div className='review-details'>
                            <ol className='name-date'>
                                <li className='reviewr-name'>Stacy</li>
                                <li className='review-created'>May 2022</li>
                                <input type="checkbox" id="readmore" />
                                <li className='review-content'>I had a great experience working with Patty and Peter. Both were very attentive in sorting out the booking details and following up directly when I had questions. I rented a 2 bedroom unit at the Westin Villas in Maui and both the unit and property was absolutely amazing. I think we had the best unit on the resort complete with 2 outdoor patios with direct access to the beach. I would HIGHLY recommend renting with Patty and Peter.</li>
                                <label className='read-more' for="readmore">Read </label>
                            </ol>
                        </div>
                        
                    </div>
                    



                    <div className='review'>
                        <div className='reviewer-avatar-container'>
                            <img src='https://xsgames.co/randomusers/assets/avatars/male/0.jpg' className='reviewer-avatar'></img>
                        </div>
                        <div className='review-details'>
                            <ol className='name-date'>
                                <li className='reviewr-name'>Damon</li>
                                <li className='review-created'>May 2022</li>
                                <li className='review-content'>We had the perfect location for a room, first floor right in front of the pool. The resort is beautiful, and the staff is so friendly! I enjoyed it so much, we talked about buying a timeshare ourselves.</li>
                            </ol>
                        </div>
                    </div>
                    
                </div>
                
                {/*
                <div className='review'>
                    <div className='reviewer-avatar-container'>
                        <img src='https://xsgames.co/randomusers/assets/avatars/male/1.jpg' className='reviewer-avatar'></img>
                    </div>
                    <div className='review-details'>
                        <div className='name-date'>
                            <h3 className='reviewr-name'>Tim</h3>
                            <div className='review-created'>May 2022</div>
                        </div>
                        <div className='review-content'>Great spot for the kids and family and close to beach and everything at the resort. We will definitely be back.</div>
                    </div>
                </div>

                <div className='review'>
                    <div className='reviewer-avatar-container'>
                        <img src='https://xsgames.co/randomusers/assets/avatars/male/2.jpg' className='reviewer-avatar'></img>
                    </div>
                    <div className='review-details'>
                        <div className='name-date'>
                            <h3 className='reviewr-name'>Li</h3>
                            <div className='review-created'>May 2022</div>
                        </div>
                        <div className='review-content'>Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend.</div>
                    </div>
                </div>


                <div className='review'>
                    <div className='reviewer-avatar-container'>
                        <img src='https://xsgames.co/randomusers/assets/avatars/female/1.jpg' className='reviewer-avatar'></img>
                    </div>
                    <div className='review-details'>
                        <div className='name-date'>
                            <h3 className='reviewr-name'>Sharona</h3>
                            <div className='review-created'>May 2022</div>
                        </div>
                        <div className='review-content'>Beautiful location. Patty & Peter were super helpful and easy to work with!</div>
                    </div>
                </div>

                <div className='review'>
                    <div className='reviewer-avatar-container'>
                        <img src='https://xsgames.co/randomusers/assets/avatars/female/2.jpg' className='reviewer-avatar'></img>
                    </div>
                    <div className='review-details'>
                        <div className='name-date'>
                            <h3 className='reviewr-name'>Kim</h3>
                            <div className='review-created'>May 2022</div>
                        </div>
                        <div className='review-content'>The unit and the Westin offer variety of amenities you can possibly ask for. Sofa beds are very comfortable to sleep in. But there is charge for ocean view upgrade. Overall, I highly recommend to book with Patty and Peter.</div>
                    </div>
                </div>

            </section>
            <section className='hosted-by'>
                <div className='host-avatar-container'>
                    <img src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" className='host-avatar'></img>
                </div>
                <div className='hosted-by-specs'>
                    <h2>Hosted by Halis</h2>
                    <span>Joined in October 2019</span>
                </div> */}
                
            </section>
        </div>
    )
}
