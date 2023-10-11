import { hoursOfDay } from "../../utils/data";

const Time = ({ handleTimeChange, selectedTime }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="text-2xl">Select the time you arrive:</p>
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
    </div>
  );
};

export default Time;
