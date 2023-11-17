import React from "react";
import { AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import logo from "../image/logo.jpg";
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
      <div className="footerContainer">
        <div>
          <img src={logo} alt=""style={{"width":100}} />
{/*         <button onClick={handleSubmit} className="text-2xl">
          <AiOutlineWhatsApp size={30} color="green" />
        </button> */}
        </div>
        <div className="cosasFooter">
          {/*           <a href="mailto:<EMAIL>">
            <AiFillMail />
          </a> */}
          <p>Service</p>
          <p>Tours</p>
          <p>Contact</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>
        <div>
          <p>Contactanos</p>
        </div>
      </div>
      <hr className="font-bold"/>
      <div className="text-center derechosReservados">
        <p className="text-2xl">© {new Date().getFullYear()}</p>
        <p>Copyright 2023 | tuhermana | All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
