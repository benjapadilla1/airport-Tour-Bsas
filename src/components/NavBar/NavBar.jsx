
import LanguageSwitch from "./LanguageSwitch";

const NavBar = () => {
  return (
    <div className="">
      <ul className="ulNavbar">
          <li className="text-3xl">Home</li>
          <li className="text-3xl">Tours</li>
          <li className="text-3xl">Booking</li>
        <LanguageSwitch/>
      </ul>
    </div>
  );
};

export default NavBar;
