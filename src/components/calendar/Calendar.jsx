import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
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
    flightNumber,
    // passangers,
    destination,
  ];

  const validateStates = (fields) => {
    for (const state of fields) {
      if (state === null || state === undefined || state === "") {
        return false;
      }
    }
    return true;
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
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex justify-center">
        {selectedDate ? (
          <div className="grid grid-cols-2 gap-6 place-content-center">
            <div className="col-span-2 flex justify-center gap-4 text-2xl">
              {selectedDate.toLocaleDateString()}

              <button onClick={() => setSelectedDate(null)}>
                <p className="text-2xl">Choose another date</p>
              </button>
            </div>

            <div className="col-span-2">
              <label htmlFor="name" className="text-2xl">
                Tell us your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded mt-1 p-2"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="destination" className="text-2xl">
                Where is your destination
              </label>
              <input
                type="text"
                id="destination"
                value={destination}
                placeholder="Tell us the street you want to go"
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border rounded mt-1 p-2"
              />
            </div>
            <div className="col-span-2">
              <Time
                selectedTime={selectedTime}
                handleTimeChange={handleTimeChange}
              />
            </div>
            <div className="col-span-2">
              <Airlines airline={airline} setAirline={handleAirlines} />
            </div>
            <div className="col-span-2">
              <label htmlFor="flightNumber" className="text-2xl">
                Flight number:
              </label>
              <input
                type="text"
                id="flightNumber"
                placeholder="Flight number"
                onChange={(e) => handleFlightNumber(e)}
                value={flightNumber}
                className="border ml-4 rounded p-2"
              />
            </div>
            <div className="col-span-2">
              <Airport setAirport={handleAirport} />
            </div>
            <div className="col-span-2 grid place-content-center grid-cols-2 grid-flow-row  ">
              <button onClick={handleSubmit} className="text-2xl">
                <p>Book</p>
                <AiOutlineWhatsApp size={30} color="green" />
              </button>
            </div>
          </div>
        ) : (
          <div className="col-span-2">
            <h2 className="text-center text-3xl mt-4 mb-4">
              ¿When is your flight?
            </h2>
            <Calendar
              locale="en"
              onChange={handleChange}
              value={selectedDate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
