import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Certificates from "./pages/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
