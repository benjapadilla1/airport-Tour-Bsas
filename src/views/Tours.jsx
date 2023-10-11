import { useTranslation } from "react-i18next";
import toursData from "/locales/en/tours.json?url";
const Tours = () => {
  const { t } = useTranslation(["tours"]);
  return (
    <div className=" min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">{t("tours")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(toursData).map((tourId) => (
          <div key={tourId} className="bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-semibold mb-2">
              {t(`${tourId}.title`)}
            </h2>
            <p className="text-gray-700">{t(`${tourId}.description`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
