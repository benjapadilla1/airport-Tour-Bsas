import i18next from "i18next";
import England from "/assets/england.png";
import Arg from "/assets/arg.webp";
const LanguageSwitch = () => {
  const ChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };
  return (
    <div className="flex gap-5 relative top-5">
      <button onClick={() => ChangeLanguage("en")}>
        <img
          src={England}
          alt="England"
          className="w-14 h-14 rounded-lg object-fill "
        />
      </button>
      <button onClick={() => ChangeLanguage("es")}>
        <img
          src={Arg}
          alt="Arg"
          className="w-14 h-14 rounded-lg object-fill "
        />
      </button>
    </div>
  );
};

export default LanguageSwitch;
