import { Link } from 'react-router-dom'
import { utilService } from '../services/util.service'

export function StayPreview({ stay, onRemoveStay, onUpdateStay }) {


    return (
        <div>
            <Link to={`/stay/${stay._id}`} className='info'>
                <img className='preview-img' src='https://stayinn-vacation.herokuapp.com/assets/253.fe906c29.jpeg' alt="" />
                <div className='preview-text-container'>
                    {/* <div><i className="fa-solid fa-gamepad"></i></div> */}
                    <section className='preview-title-container'>
                        <div className='preview-title'>{stay.name}</div>
                        <div>
                            <img className='preview-star-img' src="https://stayinn-vacation.herokuapp.com/assets/star.692b808f.svg" alt="" />
                            <span>5.0</span>
                        </div>
                    </section>
                    <p><small>{stay.type}</small>|
                    <small>Owner: <span>{stay.owner && stay.owner.fullname}</span></small>
                    </p>
                    <span> <span>{stay.price.toLocaleString()}$</span>\night</span>
                    {/* <p><small>{utilService.getFormattedTime(new Date(stay.createdAt))}</small></p> */}
                </div>
            </Link>
            <section className='actions'>
                <button onClick={() => { onRemoveStay(stay._id) }}>❌</button>
                <Link to={`/stay/edit/${stay._id}`} ><button>🖍</button></Link>
            </section>
        </div>
    )
}
