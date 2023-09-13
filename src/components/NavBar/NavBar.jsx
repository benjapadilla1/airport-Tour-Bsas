import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mt-5">
      <ul className="flex flex-row justify-around ">
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to={"/tours"}>
          <li>Tours</li>
        </Link>
        <Link to={"/booking"}>
          <li>Booking</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
