import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Section1 from "./components/Sections/Section1";
import Section5 from "./components/Sections/Section5";
import Section6 from "./components/Sections/Section6";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";

export default function Router() {
  return (
    <>
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* Seccion 7 */}
      <Footer />
    </>
  );
}
