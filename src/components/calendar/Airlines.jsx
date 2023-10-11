import { useState } from "react";
import { internationalairlines, nationalAirlines } from "../../utils/data";

function Airlines({ airline, setAirline }) {
  const [isInternational, setIsInternational] = useState(false);

  const handleInputChange = (e) => {
    setAirline(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsInternational(e.target.checked);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 align-middle">
        <label htmlFor="internationalCheckbox" className="text-2xl">
          Mark the following checkbox if your flight is international
        </label>
        <input
          type="checkbox"
          name="international"
          id="internationalCheckbox"
          onChange={handleCheckboxChange}
        />
      </div>

      {isInternational ? (
        <select
          placeholder="Airline"
          defaultValue=""
          value={airline}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Airline
          </option>
          {internationalairlines.map((company, i) => (
            <option key={i} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      ) : (
        <select
          placeholder="Airline"
          value={airline}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Airline
          </option>
          {nationalAirlines.map((company, i) => (
            <option key={i} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Airlines;
