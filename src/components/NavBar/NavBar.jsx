import { Link } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";

const NavBar = () => {
  return (
    <div className="bg-gray-100">
      <ul className="flex flex-row justify-evenly">
        <Link to={"/"}>
          <li className="text-3xl">Home</li>
        </Link>
        <Link to={"/tours"}>
          <li className="text-3xl">Tours</li>
        </Link>
        <Link to={"/booking"}>
          <li className="text-3xl">Booking</li>
        </Link>
        <Link to={"/contact"}>
          <li className="text-3xl">Contact</li>
        </Link>
        <LanguageSwitch />
      </ul>
    </div>
  );
};

export default NavBar;
