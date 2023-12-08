import { FaBook, FaChevronRight, FaMap } from "react-icons/fa";
import Button from "../../Button/Button";

const index = () => {
  return (
    <div className="flex">
      <div className="p-16 flex justify-start align-middle flex-col">
        <h1 className="text-4xl font-bold mb-4">Explore Buenos Aires with Our City Tours</h1>
        <p className="text-lg text-left mb-8 w-">Discover the vibrant city of Buenos Aires with our range of city tours. From historic landmarks to cultural hotpots, our tours offer a unique and immersive experience </p>
        <div className="flex flex-row items-center">
          <div className="p-4 mb-8 rounded-md">
            <FaMap />
            <h2 className="text-xl font-bold">Historic Landmarks Tour</h2>
            <p>Immerse yourself in the rich history of Buenos Aires as our expert guides take you on a journey through its iconic landmarks</p>
          </div>
          <div className="p-4 mb-8 rounded-md">
            <FaBook />
            <h2 className="text-xl font-bold">Cultural Hotpots Tour</h2>
            <p>Experience the vibrant arts, music and cuisine of Buenos Aires as we explore its cultural hotpots</p>
          </div>
          <div className="p-4 mb-8 rounded-md">
            <FaMap />
            <h2 className="text-xl font-bold">Hidden Gems Tour</h2>
            <p>Uncover lesser-known treasures of Buenos Aires, from charming neighborhoods to hidden local spots</p>
          </div>
        </div>
        <div className="flex justify-left">
          <Button tailwindClassName="border border-solid border-black px-4 py-2" textColor="black" iconRight={<FaChevronRight />}>Learn more</Button>
        </div>
      </div>
    </div>
  )
}

export default index