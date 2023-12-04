import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
import Section5 from "./components/Sections/Section5";
import Section6 from "./components/Sections/Section6";
import Section7 from "./components/Sections/Section7";
export default function Router() {
  return (
    <>
      <NavBar />
      <Section1 id="section1"  />
      <Section2 id="section2"  />
      <Section3 id="section3"  />
      <Section4 id="section4"  />
      <Section5 id="section5"  />
      <Section6 id="section6"  />
      <Section7 id="section7" />
      <Footer />
    </>
  );
}
