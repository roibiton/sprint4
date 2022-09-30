import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
// import { Component, React } from 'react'



import Apartment from '../assets/img/img-modal-filter/Apartment.jpeg'
import House from '../assets/img/img-modal-filter/House.jpeg'
import Hotel from '../assets/img/img-modal-filter/Hotel.jpeg'
import Guesthouse from '../assets/img/img-modal-filter/Guesthouse.jpeg'

export const FormFilterModal =({setDataFilterBy ,filterBy})=> {
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const onSelectedTypeHouse=(element)=>{
   setDataFilterBy('room','roomType',element)
  }

  const onSelectedBedAndRoom=(element,num)=>{
    setDataFilterBy('room',element,num)
  }
  const onSelectedCheackBox=(element)=>{
    setDataFilterBy('amenities',element,)
  }

  const getRoomsBeds = (element) => {
    return (
      <div>
        <h3 className="title-element">{element}</h3>
        <button className="btn btn-room any" >Any</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,1)}}>1</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,2)}}>2</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,3)}}>3</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,4)}}>4</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,5)}}>5</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,6)}}>6</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,7)}}>7</button>
        <button className="btn btn-room" onClick={()=>{onSelectedBedAndRoom(element,8)}}>8+</button>
      </div>
    )
  }
  const getFilterPropertyType = () => {
    return (
      <div>
        <button className="btn btn-proerty-type" onClick={()=>{onSelectedTypeHouse('house')}}>
        <img src={House} />
          <h3>House</h3>
        </button>
        <button className="btn btn-proerty-type"  onClick={()=>{onSelectedTypeHouse('apartment')}}>
        <img src={Apartment} />
          <h3>Apartment</h3>
        </button>
        <button className="btn btn-proerty-type"  onClick={()=>{onSelectedTypeHouse('guesthouse')}}>
        <img src={Guesthouse} />
          <h3>Guesthouse</h3>
        </button>
        <button className="btn btn-proerty-type"  onClick={()=>{onSelectedTypeHouse('hotel')}}>
        <img src={Hotel} />
          <h3>Hotel</h3>
        </button>
      </div>
    )
  }
 

  
    return (
      <section className="main-form-filter">
        <article className="price-range">Price Range</article>

        <article className="type-of-place">
          <h1>Type of place</h1>
          <div className="entire-place">
            <input type="checkbox" id="entire-place"></input>
            <label htmlFor="entire-place">Entire place</label>
            <h3>A place all to yourself</h3>
          </div>
          <div className="shared-room">
            <input type="checkbox" id="shared-room"></input>
            <label htmlFor="shared-room">Shared room</label>
            <h3>
              A sleeping space and common areas that may be shared with others
            </h3>
          </div>
          <div className="private-room">
            <input type="checkbox" id="private-room"></input>
            <label htmlFor="private-room">Private room</label>
            <h3>
              Your own room in a home or a hotel, plus some shared common spaces
            </h3>
          </div>
        </article>

        <article className="rooms-and-beds">
          {getRoomsBeds('Bedrooms')}
          {getRoomsBeds('Beds')}
          {getRoomsBeds('Bathrooms')}
        </article>

        <article className="property-type">
          <h1>Property type</h1>
          {getFilterPropertyType()}
        </article>

        <article className="amenities">
          <h1>Amenities</h1>
          <h3>Essentials</h3>
          <div className="container-amenities">
          <div className="btn-checkbox wifi">
          <Checkbox {...label} defaultChecked color="default" checked={filterBy.amenities.Wifi}
           onClick={()=>{onSelectedCheackBox("Wifi")}}/>
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div className="btn-checkbox washer">
          <Checkbox {...label} defaultChecked color="default" checked={filterBy.amenities.Washer}
          onClick={()=>{onSelectedCheackBox("Washer")}}/>
            <label htmlFor="washer">Washer</label>
          </div>
          <div className="btn-checkbox air-conditioning">
          <Checkbox {...label} defaultChecked color="default" checked={filterBy.amenities.AirConditioning}
          onClick={()=>{onSelectedCheackBox("AirConditioning")}}/>
            <label htmlFor="air-conditioning">Air conditioning</label>
          </div>
          <div className="btn-checkbox kitchen">
          <Checkbox {...label} defaultChecked color="default" checked={filterBy.amenities.Kitchen} 
          onClick={()=>{onSelectedCheackBox("kitchen")}}/>
            <label htmlFor="kitchen">Kitchen</label>
          </div>
          </div>
        </article>

        
      </section>
    )
  
}
