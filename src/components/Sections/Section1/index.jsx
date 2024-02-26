import BgFoto from "../../image/fondo.jpg";

const Index = ({ id }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:h-screen" id={id}>
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-10 text-center lg:text-left">Airport Transfers</h1>
        <p className="text-base lg:text-lg mb-4 lg:text-left">Transfers to and from Ezeiza International Airport.</p>
        <p className="text-base lg:text-lg mb-4 lg:text-left">Transfers to and from Jorge Newbery Aeroparque.</p>
        <p className="text-base lg:text-lg mb-4 lg:text-left">Transfers to and from Cruise Terminals - Buquebus - Colonia Express - Long-distance Buses, etc.</p>
        <p className="text-base lg:text-lg mb-4 lg:text-left">With our professional and friendly taxi service, we offer convenient transportation options for all your travel needs.</p>
        <div className="flex justify-center lg:justify-start">
        <button
          className="w-2/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={window.open("https://drive.google.com/drive/folders/19vyP1U_0mU68G7GZ2glkhdSjEqybiNMr", "_blank")}>See more photos</button>
          </div>
      </div>
      <div className="lg:w-1/2 bg-cover bg-center h-64 lg:h-auto" style={{ backgroundImage: `url(${BgFoto})` }} />
    </div>
  );
};

export default Index;