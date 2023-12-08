import { FaBook, FaChevronRight, FaMap } from "react-icons/fa";
import Button from "../../Button/Button";

const Index = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Explore Buenos Aires with Our City Tours</h1>
      <p className="text-lg text-center mb-8">Discover the vibrant city of Buenos Aires with our range of city tours. From historic landmarks to cultural hotspots, our tours offer a unique and immersive experience.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <TourCard icon={<FaMap />} title="Historic Landmarks Tour" description="Immerse yourself in the rich history of Buenos Aires as our expert guides take you on a journey through its iconic landmarks" />
        <TourCard icon={<FaBook />} title="Cultural Hotspots Tour" description="Experience the vibrant arts, music and cuisine of Buenos Aires as we explore its cultural hotspots" />
        <TourCard icon={<FaMap />} title="Hidden Gems Tour" description="Uncover lesser-known treasures of Buenos Aires, from charming neighborhoods to hidden local spots" />
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <Button tailwindClassName="border border-solid border-black px-4 py-2" textColor="black" iconRight={<FaChevronRight />}>Learn more</Button>
      </div>
    </div>
  );
};

const TourCard = ({ icon, title, description }) => (
  <div className="p-4 mb-8 rounded-md flex flex-col items-center justify-center text-center">
    {icon}
    <h2 className="text-xl font-bold mt-2 mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Index;
