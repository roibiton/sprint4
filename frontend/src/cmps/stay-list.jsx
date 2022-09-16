import { StayPreview } from './stay-preview'

export function StayList({ stays, onRemoveStay, onUpdateStay }) {

    return (
        <section>
            <ul className='card-layout'>
                {stays.map(stay =>
                    <li className='preview-card' key={stay._id}>
                        <StayPreview key={stay._id} stay={stay} onRemoveStay={onRemoveStay} onUpdateStay={onUpdateStay} />
                        {/* <button onClick={() => { onAddReview(stay._id) }}>Add review</button> */}
                    </li>)}
            </ul>
        </section>
    )
}
