import i18next from "i18next";
import Arg from "/assets/arg.webp";
import England from "/assets/england.png";
const LanguageSwitch = () => {
  const ChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };
  return (
    <div className="botonesLenguaje">
      <button onClick={() => ChangeLanguage("en")}>
        <img
          src={England}
          alt="England"
          className="banderas w-10 h-10 object-fill "
        />
      </button>
      <button onClick={() => ChangeLanguage("es")}>
        <img
          src={Arg}
          alt="Arg"
          className="banderas w-10 h-10 object-fill "
        />
      </button>
    </div>
  );
};

export default LanguageSwitch;
