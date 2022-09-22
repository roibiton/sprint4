import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import greece from '../assets/img/greece.webp'
import america from '../assets/img/america.webp'
import italy from '../assets/img/italy.webp'
import midale from '../assets/img/midale.webp'
import us from '../assets/img/us.webp'
import flexibale from '../assets/img/flexibale.jpeg'

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
        {/* {show && <input type="text" placeholder="search..." />} */}
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-map-filter">
        <Modal.Header closeButton>
          <Modal.Title>Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="gallery-img-filter">
            <article>
              <img src={greece} />
            </article>
            <article>
              <img src={america} />
            </article>
            <article>
              <img src={us} />
            </article>
            <article>
              <img src={italy} />
            </article>
            <article>
              <img src={midale} />
            </article>
            <article>
              <img src={flexibale} />
            </article>
          </section>
        </Modal.Body>
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
