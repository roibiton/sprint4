import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const flatpickr = require('flatpickr')

// import { FormFilterModal } from './form-filter-modal'

export const CalendarFilter = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="modal-calendar">
      <section className="calendar-filter">
        <Button variant="primary" onClick={handleShow}>
          <h2>Check in</h2>
          <h3>Add dates</h3>
        </Button>

        <Modal show={show} onHide={handleClose} className="modal-calendar">
          <Modal.Header closeButton>
            <Modal.Title>choose dates</Modal.Title>
          </Modal.Header>
          <Modal.Body>Calendar</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Exact dates
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
            Show Stays
          </Button> */}
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  )
}

// const Calendar = () => {
//   return flatpickr('range', {
//     mode: 'range',
//     minDate: 'today',
//     dateFormat: 'Y-m-d',
//     disable: [
//       function (date) {
//         // disable every multiple of 8
//         return !(date.getDate() % 8)
//       },
//     ],
//   })
// }
