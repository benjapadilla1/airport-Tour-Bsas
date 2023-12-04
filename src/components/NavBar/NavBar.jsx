
import Foto from "../image/logo.jpg";
import LanguageSwitch from "./LanguageSwitch";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between navBarContainer p-4">
    <ul className="flex space-x-4 text-black">
      <button className="text-xl">Explore</button>
      <button className="text-xl">Book Now</button>
      <button className="text-xl">Tours</button>
    </ul>
    <div className="text-white text-2xl font-bold">
      <img src={Foto} alt="landing foto" className="w-8 h-8" />
    </div>
    <LanguageSwitch />
  </div>
  );
};

export default NavBar;
