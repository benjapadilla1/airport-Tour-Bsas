import { useState } from "react";
import ReactModal from "react-modal";
import me from "../../image/me.jpg";

const Index = ({ id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [passengerCount, setPassengerCount] = useState(1);
  const [luggageCount, setLuggageCount] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBook = () => {
    const message = `Hola Buenos Días, me gustaría reservar un traslado. Los detalles son los siguientes: \n\nOrigen: ${origin}\nDestino: ${destination}\nPasajeros: ${passengerCount}\nEquipaje: ${luggageCount}`;

    const WhatsappUrl = `https://api.whatsapp.com/send?phone=${import.meta.env.VITE_PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
    window.open(WhatsappUrl, "_blank");

    setPassengerCount(1)
    setDestination("")
    setOrigin("")
    setLuggageCount(1)
    closeModal();
  };

  return (
    <div className="lg:flex lg:h-screen" id={id}>
      <div className="lg:flex lg:items-center lg:w-1/2">
        <div className="lg:w-2/3 lg:m-auto lg:text-center">
          <img
            src={me}
            alt="Description of the image"
            className="mx-auto mb-8 max-w-full h-auto rounded-lg"
            style={{ maxWidth: "600px" }}
          />
          <p className="text-xl lg:text-3xl font-bold mb-4">
            With over 10 years of experience, we offer maximum security in transfers with absolute responsibility and punctuality.
          </p>
          <p className="text-base lg:text-lg mb-8">
            We have safe vehicles for both passengers and their luggage and pets.
          </p>
        </div>
      </div>

      <div className="lg:w-2/3 lg:m-auto lg:text-center">
        <p>
          <button onClick={openModal} className="text-blue-500 underline cursor-pointer">
            Book to wait for them or travel, even with luggage, etc.
          </button>
        </p>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Travel Reservation"
          className="bg-white p-8 rounded-lg shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          overlayClassName="bg-black fixed inset-0"
        >
          <h2 className="text-2xl font-bold mb-4">Travel Reservation</h2>

          <div className="mb-4">
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
              Origin:
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="passengerCount" className="block text-sm font-medium text-gray-700">
              Number of Passengers:
            </label>
            <input
              type="number"
              id="passengerCount"
              name="passengerCount"
              value={passengerCount}
              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="luggageCount" className="block text-sm font-medium text-gray-700">
              Number of Luggage:
            </label>
            <input
              type="number"
              id="luggageCount"
              name="luggageCount"
              value={luggageCount}
              onChange={(e) => setLuggageCount(parseInt(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="flex justify-center gap-5">
            <button onClick={handleBook} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Book Now
            </button>

            <button onClick={closeModal} className="bg-red-600 px-4 py-2 rounded-md text-blue-500">
              Cancel
            </button>
          </div>
        </ReactModal>
      </div>
    </div>
  );
};

export default Index;
