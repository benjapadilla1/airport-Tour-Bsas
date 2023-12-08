import { AiOutlineWhatsApp } from "react-icons/ai";
import Button from "../../Button/Button";
import BgFoto from "../../image/city.jpg";

const Index = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:h-screen">
      <div
        className="lg:w-1/2 bg-no-repeat bg-center h-64 lg:h-auto relative"
        style={{ backgroundImage: `url(${BgFoto})` }}
      >
        <div className="h-2/3 w-px bg-black absolute right-0 top-1/2 transform -translate-y-1/2"></div>
      </div>
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center lg:items-start">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:text-left">Explore Buenos Aires with Our Reliable Taxi Service</h1>
        <p className="text-base lg:text-lg mb-4 lg:text-left">Discover the beauty of Buenos Aires with our professional and friendly taxi service. We offer convenient transportation options for all your travel needs.</p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-left">
          <Button tailwindClassName="border border-solid border-black px-4 py-2 mb-2 lg:mb-0 lg:mr-4" textColor="black">Book</Button>
          <Button tailwindClassName="px-4 py-2" backgroundColor="white" textColor="black" iconRight={<AiOutlineWhatsApp />}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Index;
