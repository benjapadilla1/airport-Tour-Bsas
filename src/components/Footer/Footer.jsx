import React from "react";
import { AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";

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
        <button onClick={handleSubmit} className="text-2xl">
          <AiOutlineWhatsApp size={30} color="green" />
        </button>
        <div className="">
          <a href="mailto:<EMAIL>">
            <AiFillMail />
          </a>
        </div>
        <div>contactanos</div>
      </div>
      <div className="text-center derechosReservados">
        <p className="text-2xl">© {new Date().getFullYear()}</p>
        <p>Copyright 2023 | tuhermana | All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
