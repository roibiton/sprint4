import "../assets/styles/cmps/react_dates_overrides.css"

// import "./styles.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { useState, useEffect } from "react";
// import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

export default function App(props) {
    // const [startDate, setStartDate] = useState(null);
    // const [focusedInput, setFocusedInput] = useState(null);
    // const [endDate, setEndDate] = useState(null)
    // const handleDatesChange = ({ startDate, endDate }) => {
    //     console.log(props.dates.startDate)
        // const startDate = moment(startDate).format('DD/MM/YY')
        // const endDate = moment(endDate).format('DD/MM/YY')
    //     console.log('dates set')
    //     setStartDate(startDate)
    //     setEndDate(endDate)
    //     console.log(props.dates.startDate)
    // }


    const [dates, setDates] = useState({ startDate: null, endDate: null })
    const defaultFocusedInput = null
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput)

    // from large //
    const handleDatesChange = (dates) => {
        setDates(dates)
        props.handleDates(
            // moment(dates.startDate).format('DD, MM, YY'),
            // moment(dates.endDate).format('DD, MM, YY')
            dates.startDate,
            dates.endDate
            )
        // console.log('cal small')
        // console.log(dates)
        // console.log(typeof dates.endDate)
        // console.log(dates)
        // props.handleDates(
        // moment(dates.startDate).format('DD, MM, YY'),
        // moment(dates.endDate).format('DD, MM, YY')
        // )
    }

    const onFocusChange = (focusedInput) => {
        setFocusedInput(focusedInput)
    }

    useEffect(() => {
        console.log(props)
        if (dates.endDate && dates.startDate) {
            props.computeFees()
            // setDates(...dates, totalDays: dates.endDate.diff(dates.startDate, 'days'))
        }
    }, [handleDatesChange])

    return (
        // <div className="date-range-picker">   
        <DateRangePicker
            // startDate={startDate} // momentPropTypes.momentObj or null,
            startDate={dates.startDate}
            startDateId="unique_start_date_id" // PropTypes.string.isRequired,
            // endDate={endDate} // momentPropTypes.momentObj or null,
            endDate={dates.endDate}
            endDateId="unique_end_date_id" // PropTypes.string.isRequired,
            // onDatesChange={handleDatesChange} // PropTypes.func.isRequired,
            // focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput || defaultFocusedInput}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            showClearDates={true}
            // small={true}
            startDatePlaceholderText='Add date'
            endDatePlaceholderText='Add date'
            startDateAriaLabel=''
            customArrowIcon={' '}
            noBorder
        // id="datetime-local"
        // name="endDate"
        // label="End date"
        // data-testid="input-end-date"
        // type="date"
        // InputLabelProps={{ shrink: true }}
        // onClick={props.reserveDates}
        />
        // </div> 
    )
} 