import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  tailwindClassName?: string;
  backgroundColor?: string;
  textColor?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isWhatsapp?: boolean;
  reason?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, tailwindClassName, backgroundColor, textColor, iconLeft, iconRight, isWhatsapp, reason }) => {

  const handleSubmit = (reason: string) => {
    let message = "Hola buenos días! ";

    switch (reason) {
      case "wppContact":
        message = "Hola, me contacto para reservar un traslado.";
        break;
      case "wppTours":
        message = "Hola, me contacto para reservar un tour. ¿Me podrías dar mas información?";
      default:
        break;
    }

    const WhatsappUrl = `https://api.whatsapp.com/send?phone=${import.meta.env.VITE_PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
    window.open(WhatsappUrl, "_blank");
  };

  const handleClick = () => {
    if (isWhatsapp) {
      handleSubmit("wppContact");
    }
    handleSubmit("wppTours");
  };


  const buttonStyle = {
    backgroundColor,
    color: textColor,
  };
  return (
    <button onClick={handleClick} className={`flex flex-row items-center ${tailwindClassName}`} style={buttonStyle}>
      <>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </>
    </button>
  );
};

export default Button;
