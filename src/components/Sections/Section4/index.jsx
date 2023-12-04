import Button from "../../Button/Button"

const index = () => {
  return (
    <div className="bg-cover bg-center flex" style={{ backgroundImage: 'url("https://static.eldiario.es/clip/adec5662-9d7a-49c5-8a06-8c87a5155f86_16-9-discover-aspect-ratio_default_0.jpg")' }} >
      <div className="w-1/2 p-16 flex justify-center align-middle flex-col">
        <h1 className="text-6xl font-bold mb-4">Book a Taxi or Tour</h1>
        <p className="text-lg mb-4">Explore Buenos Aires with our reliable taxi service and exciting tours</p>
        <div className="flex gap-4 justify-left">
          <Button tailwindClassName="border border-solid border-black px-4 py-2" backgroundColor="black" textColor="black">WhatsApp</Button>
          <Button tailwindClassName="px-4 py-2" backgroundColor="grey" textColor="black">
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default index