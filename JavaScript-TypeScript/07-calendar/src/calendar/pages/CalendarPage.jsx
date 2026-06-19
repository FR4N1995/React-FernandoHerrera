import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {addHours} from 'date-fns'
import { Navbar } from '../components/Navbar'
import { localizer } from '../../helpers'
// se creo un helper
// import enUS from 'date-fns/locale/en-US'

// const locales = {
//   'en-US': enUS,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })


const events = [{
  title: 'Birtday of the Boss',
  notes: "there are buy the key",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa"
}]

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

       <Calendar
       culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
       />
    </>
  )
}
