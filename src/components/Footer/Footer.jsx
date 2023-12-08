import React from "react";
import logo from "../image/logo.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const handleSubmit = () => {
  const message = "Hola buenos dias! ";

  const WhatsappUrl = `https://api.whatsapp.com/send?phone=${
    import.meta.env.VITE_PHONE_NUMBER
  }&text=${encodeURIComponent(message)}`;

  window.open(WhatsappUrl, "_blank");
};

function Footer() {
  return (
    <>
        <hr/>
      <div className="footerContainer">
        <div>
          <img src={logo} alt="" style={{ width: 100 }} />
        </div>
        <div className="cosasFooter">
          <p>Service</p>
          <p>Tours</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-row gap-2">
          <FaInstagram size={30} />
          <FaFacebookSquare size={30} />
          <IoLogoWhatsapp size={30} />
        </div>
      </div>
      <div className="text-center derechosReservados">
        <p className="text-2xl">© {new Date().getFullYear()}</p>
        <p>Copyright 2023 | BsAs Tours | All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
