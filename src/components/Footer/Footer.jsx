import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from "../image/logo.jpg";

function Footer() {
  return (
    <>
      <div className="border-t border-black rounded-md mt-10" />
      <div className="flex flex-wrap justify-between items-center p-4 md:p-8">
        <div className="">
          <img src={logo} alt="" className="w-24 md:w-32" />
        </div>
        <div className="flex flex-wrap">
          <a href="#section1" className="mr-4 mb-2 md:mb-0">Explore</a>
          <a href="#about" className="mr-4 mb-2 md:mb-0">Tours</a>
          <a href="#section2" className="mr-4 mb-2 md:mb-0">Contact</a>
          <a href="#section3" className="mb-2 md:mb-0">Blog</a>
        </div>
        <div className="flex gap-8 lg:justify-normal justify-center">
          <FaInstagram size={30} />
          <FaFacebookSquare size={30} />
          <IoLogoWhatsapp size={30} />
        </div>
      </div>
      <div className="text-center bg-black text-white p-4">
        <p className="text-2xl mb-4">© {new Date().getFullYear()}</p>
        <p>Copyright 2023 | BsAs Tours | All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
