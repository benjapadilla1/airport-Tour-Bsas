import i18next from "i18next";
import { useState } from "react";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    i18next.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <button onClick={toggleLanguage} className="px-4 py-2 border border-solid border-gray-500 rounded-md">
      {capitalizeFirstLetter(language)}
    </button>
  );
};

export default LanguageSwitch;
