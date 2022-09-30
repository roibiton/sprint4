import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const flatpickr = require('flatpickr')

// import { FormFilterModal } from './form-filter-modal'

export const WhoFilter = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="modal-who">
      <section className="calendar-filter">
        <Button variant="primary" onClick={handleShow}>
          <h2>Who</h2>
          <h3>Add guests</h3>
        </Button>

        <Modal show={show} onHide={handleClose} className="modal-who">
          <Modal.Header closeButton>
            <Modal.Title>choose dates</Modal.Title>
          </Modal.Header>

          <Modal.Body></Modal.Body>
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
