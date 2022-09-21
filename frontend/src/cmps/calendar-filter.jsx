// import { DateRangePicker } from 'react-date-range'

// import { addDays, format, isWeekend } from 'date-fns'
// import { useState } from 'react'

// export const CalendarFilter = () => {
//   const [state, setState] = useState({
//     selection1: {
//       startDate: addDays(new Date(), -6),
//       endDate: new Date(),
//       key: 'selection1',
//     },
//     selection2: {
//       startDate: addDays(new Date(), 1),
//       endDate: addDays(new Date(), 7),
//       key: 'selection2',
//     },
//   })

//   const customDayContent = (day) => {
//     extraDot = null
//     if (isWeekend(day)) {
//       extraDot = (
//         <div
//           style={{
//             height: '5px',
//             width: '5px',
//             borderRadius: '100%',
//             background: 'orange',
//             position: 'absolute',
//             top: 2,
//             right: 2,
//           }}
//         />
//       )
//     }
//     return (
//       <div>
//         {extraDot}
//         <span>{format(day, 'd')}</span>
//       </div>
//     )
//   }

//   return <section className="calendar">{customDayContent}</section>
// }
// ;<DateRangePicker
//   onChange={(item) => setState({ ...state, ...item })}
//   showSelectionPreview={true}
//   moveRangeOnFirstSelection={false}
//   months={2}
//   ranges={[state.selection1, state.selection2]}
//   direction="horizontal"
//   dayContentRenderer={customDayContent}
//   ariaLabels={{
//     dateInput: {
//       selection1: {
//         startDate: 'start date input of selction 1',
//         endDate: 'end date input of selction 1',
//       },
//       selection2: {
//         startDate: 'start date input of selction 2',
//         endDate: 'end date input of selction 2',
//       },
//     },
//     monthPicker: 'month picker',
//     yearPicker: 'year picker',
//     prevButton: 'previous month button',
//     nextButton: 'next month button',
//   }}
// />
