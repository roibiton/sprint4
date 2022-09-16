import { React, Component } from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import LoadingScreen from "react-loading-screen"
import { MdIosShare } from 'react-icons/md'
import { FiHeart, FiStar } from 'react-icons/fi'


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
                    <h1 className='headline-content'>Adrasan da Sonsuzluk Havuzlu Mağara Villa (No:5)</h1>
                </div>
                <div className='sub-headline'>
                    <div className='location-name'>
                        <div className='location-link'>
                            <span className='location-contnet'>Kumluca, Antalya, Turkey</span>
                        </div>
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
            </header>
            <main>
                <section className='preview-imgs'>
                    <img src="https://stayinn-vacation.herokuapp.com/assets/202.7a346774.jpeg" className='large-preview'></img>
                    <img src="https://stayinn-vacation.herokuapp.com/assets/016.788b9ce3.jpeg" className='small-preview'></img>
                    <img src="https://stayinn-vacation.herokuapp.com/assets/121.d365d6fa.jpeg" className='small-preview'></img>
                    <img src="https://stayinn-vacation.herokuapp.com/assets/070.822f9f43.jpeg" className='small-preview'></img>
                    <img src="https://stayinn-vacation.herokuapp.com/assets/141.84d5af48.jpeg" className='small-preview'></img>
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
                            <img src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" className='host-img'></img>
                        </div>
                    </div>
                </section>
                <br></br>
                <section className='stay-highlights'>host choice icon and few words
                    <div className='host-highlight-fst-opt'>
                        <div className='highlight-icon'>pool.icon</div>
                        <p className='highlight-header'>Dive right in</p>
                        <p className='highlight-desc'>This is one of the few places in the area with a pool</p>
                    </div>
                </section>
                <br></br>
                <section className='air-cover'>
                    <div className='air-cover-headline'></div>
                    <p className='air-cover-desc'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                    <button className='air-cover-btn'>Learn more</button>
                    {/* learn more opens modal with booking protection */}
                </section>
            </main>
        </div>

    )
}
