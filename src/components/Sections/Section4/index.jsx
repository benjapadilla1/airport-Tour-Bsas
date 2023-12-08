import Button from "../../Button/Button";
import bgFoto from "../../image/bgBuenosAires.jpg";

const Index = () => {
  return (
    <div className="lg:bg-contain bg-cover bg-center flex flex-col lg:flex-row lg:bg-repeat bg-no-repeat" style={{ backgroundImage: `url(${bgFoto})` }}>
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left">Book a Taxi or Tour</h1>
        <p className="text-white text-base lg:text-lg mb-4 text-center lg:text-left">Explore Buenos Aires with our reliable taxi service and exciting tours</p>
        <div className="flex flex-row gap-4 justify-center lg:justify-left">
          <Button tailwindClassName="border border-solid border-black px-4 py-2" backgroundColor="black" textColor="white">WhatsApp</Button>
          <Button tailwindClassName="px-4 py-2" backgroundColor="grey" textColor="black">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
