import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Contact = () => {
  const [selectedDate, setSelectedDate] = useState([]);

  const handleChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date >= today) {
      const isValid = selectedDate.some(
        (selectedDate) => date.toDateString() === selectedDate.toDateString()
      );
      if (!isValid) {
        setSelectedDate([...selectedDate, date]);
        console.log(selectedDate);
      } else {
        alert("Invalid date");
      }
    } else {
      alert("You cannot choose a past date");
    }
  };

  return (
    <>
      <h2 className="text-center mt-16 mb-4">Book a Date</h2>
      <div className="flex items-center justify-center ">
        <Calendar onChange={handleChange} value={selectedDate} />
      </div>
    </>
  );
};

export default Contact;
