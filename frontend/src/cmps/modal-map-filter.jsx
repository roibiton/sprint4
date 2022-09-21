import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export const ModalMapFilter = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section className="modal-map-filter">
      <Button variant="primary" onClick={handleShow}>
        {!show && (
          <section>
            <h2>Where</h2>
            <h3>Search destinations</h3>
          </section>
        )}
        {show && <input type="text" placeholder="search..." />}
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-map-filter">
        <Modal.Header closeButton>
          <Modal.Title>Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>Map</Modal.Body>
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
  )
}
