import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from "react-icons/ai";
import Airlines from "./airlines";
import Airport from "./Airport";
import Time from "./Time";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [airport, setAirport] = useState("");
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [name, setName] = useState("");
  const [passangers, setPassangers] = useState("");
  const [destination, setDestination] = useState("");

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

  const handleFlightNumber = (e) => {
    setFlightNumber(e.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleAirlines = (airline) => {
    setAirline(airline);
  };
  const handleAirport = (airport) => {
    setAirport(airport);
  };

  const allStates = [
    selectedTime,
    selectedDate,
    airport,
    airline,
    name,
    passangers,
    destination,
  ];

  const validateStates = (fileds) => {
    for (const state of fileds) {
      if (state === null || state === undefined || state === "") {
        return false;
      }
      return true;
    }
  };
  const allFiledsSelected = validateStates(allStates);

  const handleSubmit = () => {
    if (allFiledsSelected) {
      const message = `Hello I am ${name} and I would like to appoint a date on ${selectedDate.toLocaleDateString()} at ${selectedTime}, my airline is ${airline} and my flight number is ${flightNumber}, I arrive at ${airport} and my destnation is ${destination}`;

      const WhatsappUrl = `https://api.whatsapp.com/send?phone=${
        import.meta.env.VITE_PHONE_NUMBER
      }&text=${encodeURIComponent(message)}`;

      window.open(WhatsappUrl, "_blank");
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <>
      <h2 className="text-center text-3xl mt-16 mb-4">¿When is the flight?</h2>
      <div className="flex items-center justify-center flex-col gap-6">
        {selectedDate ? (
          <>
            <button onClick={() => setSelectedDate(null)}>
              <p className="text-center flex align-middle flex-row  mt-5 text-2xl">
                <AiOutlineArrowLeft size={30} />
                Choose another date
              </p>
            </button>
            <p className="text-2xl">
              Date: {selectedDate.toLocaleDateString()}
            </p>
            <label htmlFor="">Tell us your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Where is your destination</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Time
              selectedTime={selectedTime}
              handleTimeChange={handleTimeChange}
            />
            <Airlines airline={airline} setAirline={handleAirlines} />
            <label>Flight number:</label>
            <input
              placeholder="Flight number"
              onChange={(e) => handleFlightNumber(e)}
              value={flightNumber}
              type="text"
            />
            <Airport setAirport={handleAirport} />
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
