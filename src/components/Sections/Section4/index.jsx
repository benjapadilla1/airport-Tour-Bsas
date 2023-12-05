import Button from "../../Button/Button"
import bgFoto from "../../image/bgBuenosAires.jpg"
const index = () => {
  return (
    <div className="bg-contain bg-center flex" style={{ backgroundImage: `url(${bgFoto})` }} >
      <div className="w-1/2 p-16 flex justify-center align-middle flex-col">
        <h1 className="text-white text-6xl font-bold mb-4">Book a Taxi or Tour</h1>
        <p className="text-white text-lg mb-4 text-left">Explore Buenos Aires with our reliable taxi service and exciting tours</p>
        <div className="flex gap-4 justify-left">
          <Button tailwindClassName="border border-solid border-black px-4 py-2" backgroundColor="black" textColor="white">WhatsApp</Button>
          <Button tailwindClassName="px-4 py-2" backgroundColor="grey" textColor="black">
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default index