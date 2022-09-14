import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { loadStays, addStay, updateStay, removeStay } from '../store/stay.actions.js'

import { showSuccessMsg } from '../services/event-bus.service.js'
import { stayService } from '../services/stay.service.js'

function _StayApp({ loadStays, addStay, updateStay, removeStay, stays }) {

    useEffect(() => {
        loadStays()
    }, [])

    const onRemoveStay = (stayId) => {
        removeStay(stayId)
    }
    const onAddStay = () => {
        const stay = stayService.getEmptyStay()
        stay.name = prompt('Name?')        
        addStay(stay)
    }
    const onUpdateStay = (stay) => {
        const price = +prompt('New price?')
        const stayToSave = { ...stay, price }
        updateStay(stayToSave)
    }
    
    return (
        <div>
            <h3>Stays App</h3>
            <main className="stay-app">

                <button onClick={onAddStay}>Add Stay ⛐</button>

                <ul className="stay-list">

                    {stays.map(stay =>
                        <li className="stay-preview" key={stay._id}>
                            <h4>{stay.name}</h4>
                            <h1>⛐</h1>
                            <p>Price: <span>${stay.price.toLocaleString()}</span></p>
                            <p>Owner: <span>{stay.owner && stay.owner.fullname}</span></p>
                            <div>
                                <button onClick={() => { onRemoveStay(stay._id) }}>x</button>
                                <button onClick={() => { onUpdateStay(stay) }}>Edit</button>
                            </div>

                        </li>)
                    }

                </ul>
            </main>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
    }
}
const mapDispatchToProps = {
    loadStays,
    removeStay,
    addStay,
    updateStay,
}


export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)