import Foto from "../image/logo.jpg";
import LanguageSwitch from "./LanguageSwitch";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md flex items-center justify-between navBarContainer p-4">
      <div className="flex space-x-6 text-black items-center">
        <a href="#section1" className="text-xl">Explore</a>
        <a href="#about" className="text-xl">About us</a>
        <a href="#section2" className="text-xl">Book Now</a>
        <a href="#section3" className="text-xl">Tours</a>
      </div>
      <img src={Foto} alt="landing foto" className="w-8 h-8 object-center p-0" />
      <LanguageSwitch />
    </div>
  );
};

export default NavBar;
