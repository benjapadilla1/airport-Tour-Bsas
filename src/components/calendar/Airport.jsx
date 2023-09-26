import { airports } from "../../utils/data";

const Airport = ({ setAirport }) => {
  return (
    <select
      name="airport"
      defaultValue=""
      onChange={(e) => setAirport(e.target.value)}
    >
      <option value="" disabled hidden>
        Choose a airport
      </option>
      {airports.map((airport, i) => (
        <option key={i}>{airport.name}</option>
      ))}
    </select>
  );
};

export default Airport;
