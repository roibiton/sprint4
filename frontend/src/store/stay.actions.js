import { stayService } from "../services/stay.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

// Action Creators:
export function getActionRemoveStay(stayId) {
    return {
        type: 'REMOVE_STAY',
        stayId: stayId
    }
}
export function getActionAddStay(stay) {
    return {
        type: 'ADD_STAY',
        stay
    }
}
export function getActionUpdateStay(stay) {
    return {
        type: 'UPDATE_STAY',
        stay
    }
}

export function loadStays() {
    return async (dispatch) => {
        try {
            const stays = await stayService.query()
            console.log('Stays from DB:', stays)
            dispatch({
                type: 'SET_STAYS',
                stays
            })

        } catch (err) {
            showErrorMsg('Cannot load stays')
            console.log('Cannot load stays', err)
        }
    }
}

export function removeStay(stayId) {
    
    return async (dispatch) => {
        try {
            await stayService.remove(stayId)
            console.log('Deleted Succesfully!');
            dispatch(getActionRemoveStay(stayId))
            showSuccessMsg('Stay removed')
        } catch (err) {
            showErrorMsg('Cannot remove stay')
            console.log('Cannot remove stay', err)
        }
    }
}

export function addStay(stay) {
    return async (dispatch) => {
        try {
            const savedStay = await stayService.save(stay)
            console.log('Added Stay', savedStay);
            dispatch(getActionAddStay(savedStay))
            showSuccessMsg('Stay added')
        } catch (err) {
            showErrorMsg('Cannot add stay')
            console.log('Cannot add stay', err)
        }
    }
}

export function updateStay(stay) {
        return async (dispatch) => {
            try {
                const savedStay = await stayService.save(stay)
                console.log('Updated Stay:', savedStay);
                dispatch(getActionUpdateStay(savedStay))
                showSuccessMsg('Stay updated')
            } catch (err) {
                showErrorMsg('Cannot update stay')
                console.log('Cannot save stay', err)
            }
        }
    }


    // Demo for Optimistic Mutation 
    // (IOW - Assuming the server call will work, so updating the UI first)
    export function onRemoveStayOptimistic(stayId) {

        return (dispatch, getState) => {

            dispatch({
                type: 'REMOVE_STAY',
                stayId: stayId
            })
            showSuccessMsg('Stay removed')

            stayService.remove(stayId)
                .then(() => {
                    console.log('Server Reported - Deleted Succesfully');
                })
                .catch(err => {
                    showErrorMsg('Cannot remove stay')
                    console.log('Cannot load stays', err)
                    dispatch({
                        type: 'UNDO_REMOVE_STAY',
                    })
                })
        }
    }