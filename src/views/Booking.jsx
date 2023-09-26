import { useState } from "react"
import Calendar from "../components/calendar/Calendar"

const Booking = () => {
const [isFlight, setIsFlight] = useState(false)
  return (
    <div>
      <h1 className="text-center">Booking</h1>
      {
        !isFlight ? 
        <>
        <div className="flex justify-center flex-col">
        <h2 className="text-center">Please tell us if you arrive from a flight or you just want to schedule a transfer</h2>
        </div>
        <div className="flex align-middle justify-center gap-3">
        <button  onClick={() => setIsFlight(!isFlight)}>Flight</button>
        <button  onClick={() => setIsFlight(!isFlight)}>Transfer</button>
        </div>
        </>
      : <Calendar />     }
    </div>  )
}

export default Booking
