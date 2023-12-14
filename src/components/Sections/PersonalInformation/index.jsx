import Button from "../../Button/Button";
import me from "../../image/me.jpg";


const Index = ({ id }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:h-screen" id={id}>
      <div className="p-8 lg:p-16 flex flex-col justify-center text-center lg:text-left">
        <img
          src={me}
          alt="Descripción de la imagen"
          className="mx-auto mb-4 lg:mb-8 max-w-full h-auto"
          style={{ maxWidth: "600px" }}
        />
        <p className="text-2xl lg:text-4xl font-bold mb-4">Con más de 10 años de experiencia, ofrecemos máxima seguridad en traslados con absoluta responsabilidad y puntualidad.</p>
        <p className="text-base lg:text-lg mb-4">Contamos con vehículos seguros tanto para los pasajeros como para su equipaje y mascota.</p>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <Button
            tailwindClassName="mb-2 px-4 py-2 lg:mb-0 lg:mr-4"
            backgroundColor="black"
            hoverColor="white"
            textColor="white"
          >
            Book
          </Button>
          <Button
            tailwindClassName="border border-solid border-black px-4 py-2"
            backgroundColor="white"
            textColor="black"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
