import { AiOutlineWhatsApp } from "react-icons/ai"
import Button from "../../Button/Button"

const index = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://static.eldiario.es/clip/adec5662-9d7a-49c5-8a06-8c87a5155f86_16-9-discover-aspect-ratio_default_0.jpg")' }} />
      <div className="w-1/2 p-16 flex justify-center align-middle flex-col">
        <h1 className="text-6xl font-bold mb-4">Explore Buenos Aires with Our Reliable Taxi Service</h1>
        <p className="text-lg mb-4">Discover the beauty of Buenos Aires with our professional and friendly taxi service. We offer convenient transportation options for all your travel needs.</p>
        <div className="flex justify-left">
          <Button tailwindClassName="border border-solid border-black px-4 py-2" textColor="black">Book</Button>
          <Button tailwindClassName="px-4 py-2" backgroundColor="white" textColor="black" iconRight={<AiOutlineWhatsApp />}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default index