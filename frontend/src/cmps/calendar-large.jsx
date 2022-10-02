import "../assets/styles/cmps/react_dates_overrides.css"
import React, { useState } from "react"
import "react-dates/initialize"
// import "react-dates/lib/css/_datepicker.css"

import { DayPickerRangeController } from "react-dates"

import moment from "moment"

function DatePicker() {
    const [dates, setDates] = useState({ startDate: null, endDate: null })

    const defaultFocusedInput = "startDate"
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput)
    const handleDatesChange = (dates) => {
        setDates(dates)
    }

    const onFocusChange = (focusedInput) => {
        setFocusedInput(focusedInput)
    }

    // const renderDate = (date) => {
    //     return date ? moment(date).format("MM/DD/YY") : null
    // }

    return (
        <div className="App">
            {/* <h1> */}
            {/* {renderDate(dates.startDate)} | {renderDate(dates.endDate)} */}
            {/* </h1> */}
            <h3 className="details-calendar-headline">Select checkout date</h3>
            <span>Add your travel dates for exact pricing</span>
            {/* <Wrapper> */}
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
            />
            {/* </Wrapper> */}
        </div>
    )
}

export default DatePicker
