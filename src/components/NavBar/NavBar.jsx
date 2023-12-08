import Foto from "../image/logo.jpg";
import LanguageSwitch from "./LanguageSwitch";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between navBarContainer p-4">
      <div className="flex space-x-6 text-black items-center">
        <button className="text-xl">Explore</button>
        <button className="text-xl">Book Now</button>
        <button className="text-xl">Tours</button>
      </div>
      <img src={Foto} alt="landing foto" className="w-8 h-8 object-center p-0" />
      <LanguageSwitch />
    </div>
  );
};

export default NavBar;
