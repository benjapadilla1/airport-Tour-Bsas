import Button from "../../Button/Button";
import BgFoto from "../../image/fondo.jpg";

const Index = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:h-screen">
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:text-left">Discover the beauty of Buenos Aires</h1>
        <p className="text-base lg:text-lg mb-4 lg:text-left">Discover the beauty of Buenos Aires with our professional and friendly taxi service. We offer convenient transportation options for all your travel needs.</p>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <Button tailwindClassName="mb-2 px-4 py-2 lg:mb-0 lg:mr-4" backgroundColor="black" hoverColor="white" textColor="white">Book</Button>
          <Button tailwindClassName="border border-solid border-black px-4 py-2" backgroundColor="white" textColor="black">Learn More</Button>
        </div>
      </div>
      <div className="lg:w-1/2 bg-cover bg-center h-64 lg:h-auto" style={{ backgroundImage: `url(${BgFoto})` }} />
    </div>
  );
};

export default Index;
