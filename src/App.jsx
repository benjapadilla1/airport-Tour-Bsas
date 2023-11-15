import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Section1 from "./components/Sections/Section1";
import Section5 from "./components/Sections/Section5";
import Section6 from "./components/Sections/Section6";
export default function Router() {
  return (
    <>
      <NavBar />
      <Section1/>
        {/* Seccion 1 */}
        {/* Seccion 2 */}
        {/* Seccion 3 */}
        {/* Seccion 4 */}
        <Section5 />
        <Section6/>
        {/* Seccion 7 */}
      <Footer/>
    </>
  );
}
