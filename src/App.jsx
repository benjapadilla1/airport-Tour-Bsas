import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Tours from "./views/Tours";
import Booking from "./views/Booking";
import NavBar from "./components/NavBar/NavBar";

export default function Router() {
  return (
    <div className="navBar bg-gray  ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}
