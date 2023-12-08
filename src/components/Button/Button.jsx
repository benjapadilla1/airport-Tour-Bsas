const handleSubmit = () => {
  const message = "Hola buenos dias! ";

  const WhatsappUrl = `https://api.whatsapp.com/send?phone=${import.meta.env.VITE_PHONE_NUMBER
    }&text=${encodeURIComponent(message)}`;

  window.open(WhatsappUrl, "_blank");
};


const Button = ({ onClick, children, tailwindClassName, backgroundColor, textColor, iconLeft, iconRight }) => {

  const buttonStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <button onClick={onClick} className={`flex flex-row items-center ${tailwindClassName}`} style={buttonStyle} >
      <>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
      </>
    </button>
  )
}

export default Button