import { React, Component } from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
// import LoadingScreen from "react-loading-screen"


export const StayDetails = (props) => {

    const [stay, setStay] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadStay()
    }, [params.id])


    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then(stay => {
            setStay(stay)
        })
    }

    const onBack = () => {
        navigate('/')
    }



    if (!stay) return <div>loading</div>

    console.log('sdfsdf')
    return (
        <div className='show-stay'>
           <h1> hello from stay app</h1>
            <button onClick={onBack}>Back</button>
        </div>

    )
}
