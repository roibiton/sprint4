import { React, Component } from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import LoadingScreen from "react-loading-screen"


export const StayDetails = (props) => {

    const debugging = true
    const [stay, setStay] = useState(null)
    const params = useParams()
    // const navigate = useNavigate()
    useEffect(() => {
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
                        <h1 className='headline-content'>stay.name</h1>
                    </div>
                    <div className='location-name'>
                        <button className='location-link'><span className='location-contnet'>stay.location</span></button>
                    </div>
                    <div className='headline-buttons'>
                        <div className='share-buttons'>
                            <button className='share-icon'>share.icon</button>
                            <button className='share-button'>Share</button>
                        </div>
                        <div className='save-buttons'>
                            <button className='like-icon'>heart.icon</button>
                            <button className='like-button'>Save</button>
                        </div>
                    </div>
                </header>
                <main>
                    <section className='preview-imgs'>
                        {/* <img className='large-preview'>large img</img> */}
                        {/* <img className='small-preview'>1/4 small img</img> */}
                        {/* <img className='small-preview'>2/4 small img</img> */}
                        {/* <img className='small-preview'>3/4 small img</img> */}
                        {/* <img className='small-preview'>4/4 small img</img> */}
                    </section>
                    <section className='place-details-container'>
                        <div className='host-details'>
                            <div className='hosted-by'>Entrie (place.type) hosted by (host.name)</div>
                            <ol className='place-detail-list'>
                            <li className='guests-num'>(5) guests</li>
                            <li className='bedrooms'>(2) bedrooms</li>
                            <li className='beds'>(2) beds</li>
                            <li className='baths'>(2) beths</li>
                            </ol>
                            <div className='host-img-container'>
                                {/* <img className='host-img'>img</img> */}
                            </div>
                        </div>
                    </section>
                    <br></br>
                </main>
        </div>

    )
}
