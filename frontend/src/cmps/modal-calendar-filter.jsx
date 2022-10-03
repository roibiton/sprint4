// import "../assets/styles/cmps/react_dates_overrides.css"
import React, { useState } from "react"
import "react-dates/initialize"
// import "react-dates/lib/css/_datepicker.css"
import { FaRegKeyboard } from "react-icons/fa";

import { DayPickerRangeController } from "react-dates"

import moment from "moment"

export const ModalCalendarFilter=({type})=> {
    const [dates, setDates] = useState({ startDate: null, endDate: null })
    const [isDayPicker, setIsDayPicker] = useState(false)
// console.log('type:',type)
    const defaultFocusedInput = "startDate"
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput)
    const handleDatesChange = (dates) => {
        setDates(dates)
    }

    const onFocusChange = (focusedInput) => {
        // console.log(onFocusChange)
        setFocusedInput(focusedInput)
    }

    //   const renderDate = (date) => {
    //     return date ? moment(date).format("MM/DD/YY") : null
    //   }

    return (
      <section className="header-filter-calendar">
        <button onClick={()=>{setIsDayPicker(!isDayPicker)}}>
        <h3 >Check in</h3>
            <h4>Add dates</h4>
        </button>
            {/* <h1>
            {renderDate(dates.startDate)} | {renderDate(dates.endDate)}
            </h1> */}
            {/* <h3 className="details-calendar-headline">Check in</h3>
            <span>Add dates</span> */}
            {/* <Wrapper> */}
            <div className="content-filter-calendar">
              {isDayPicker&&(
            <DayPickerRangeController
         
                startDate={dates.startDate}
                endDate={dates.endDate}
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput || defaultFocusedInput}
                onFocusChange={onFocusChange}
                numberOfMonths={2}
                showClearDates={true}
                // renderKeyboardShortcutsButton={<FaRegKeyboard />}
                // minimumNights={3}
            />)}
            {/* </Wrapper> */}
        </div>
        </section>
    )
}


