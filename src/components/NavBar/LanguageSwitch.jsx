import i18next from "i18next";
import England from "/assets/england.png";
import Arg from "/assets/arg.webp";
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
          className="banderas w-10 h-10 rounded-lg object-fill "
        />
      </button>
      <button onClick={() => ChangeLanguage("es")}>
        <img
          src={Arg}
          alt="Arg"
          className="banderas w-10 h-10 rounded-lg object-fill "
        />
      </button>
    </div>
  );
};

export default LanguageSwitch;
