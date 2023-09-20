import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { hoursOfDay } from "../../utils/data";
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from "react-icons/ai";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [aerolinea, setAerolinea] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
	
  const handleChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date > today) {
      const isValid = selectedDate
        ? date.toString() === selectedDate.toString()
        : true;
      if (isValid) {
        setSelectedDate(date);
      } else {
        alert("Invalid date");
      }
    } else {
      alert("You cannot choose a past or current date");
    }
  };
	const handleInputChange = (e) => {
		if (e.target.placeholder === "Flight number") {
			setFlightNumber(e.target.value);
		} else{
			setAerolinea(e.target.value)
		}
	}
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleSubmit = () => {
    console.log(selectedDate, selectedTime);
    if (selectedTime && selectedDate) {
      const message = `Hello I would like to appoint a date on ${selectedDate.toLocaleDateString()} at ${selectedTime}, my aerolinea is ${aerolinea} and my flight number is ${flightNumber} `;

      const WhatsappUrl = `https://api.whatsapp.com/send?phone=${
        import.meta.env.VITE_PHONE_NUMBER
      }&text=${encodeURIComponent(message)}`;

      window.open(WhatsappUrl, "_blank");
    } else {
      alert("Please select a date and time before sending the message");
    }
  };
  return (
    <>
      <h2 className="text-center text-3xl mt-16 mb-4">Book a Date</h2>
      <div className="flex items-center justify-center flex-col gap-6">
        {selectedDate ? (
          <>
            <button onClick={() => setSelectedDate(null)}>
              <p className="text-center flex align-middle flex-row text-2xl">
                <AiOutlineArrowLeft size={30} />
                Choose another date
              </p>
            </button>
            <p className="text-2xl">
              Date: {selectedDate.toLocaleDateString()}
            </p>
            <p className="text-2xl">Select a Time:</p>
            <select
              onChange={(e) => handleTimeChange(e.target.value)}
              value={selectedTime || ""}
              className="text-xl"
            >
              <option value="" disabled hidden>
                Time
              </option>
              {hoursOfDay.map((hour, i) => (
                <option key={i} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
						<label >Aerolinea:</label>
						<input placeholder="Aeroline name" onChange={handleInputChange}   value={aerolinea}/>
						<label >Flight number:</label>
						<input placeholder="Flight number" onChange={handleInputChange}  value={flightNumber}/>
            <button onClick={handleSubmit}>
              <p className="text-center flex align-middle flex-row text-2xl">
                Book via Whatsapp
                <AiOutlineWhatsApp size={30} color="green" />
              </p>
            </button>
          </>
        ) : (
          <Calendar locale="en" onChange={handleChange} value={selectedDate} />
        )}
      </div>
    </>
  );
};

export default Booking;
