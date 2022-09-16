import { Link } from 'react-router-dom'
import { utilService } from '../services/util.service'

export function StayPreview({ stay, onRemoveStay, onUpdateStay }) {


    return (
        <div>
            <Link to={`/stay/${stay._id}`} className='info'>
                <img className='preview-img' src='https://stayinn-vacation.herokuapp.com/assets/253.fe906c29.jpeg' alt="" />
                <div className='preview-text-container'>
                    {/* <div><i className="fa-solid fa-gamepad"></i></div> */}
                    <div className='preview-title'>{stay.name}</div>
                    <p><small>{stay.type}</small></p>
                    <span>Price: <span>${stay.price.toLocaleString()}</span></span>|
                    <span>Owner: <span>{stay.owner && stay.owner.fullname}</span></span>
                    {/* <p><small>{utilService.getFormattedTime(new Date(stay.createdAt))}</small></p> */}
                </div>
            </Link>
            <section className='actions'>
                <button onClick={() => { onRemoveStay(stay._id) }}>x</button>
                <Link to={`/stay/edit/${stay._id}`} >Edit</Link>
            </section>
        </div>
    )
}
