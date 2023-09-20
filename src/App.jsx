import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Tours from "./views/Tours";
import Contact from "./views/Contact";
import Booking from "./views/Booking";
import NavBar from "./components/NavBar/NavBar";

export default function Router() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
