import NavbarMenu from "./components/NavbarMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Container from "react-bootstrap/esm/Container";
import Extras from "./pages/Extras";
import Socialbar from "./components/parts/Socialbar";
import Footer from "./components/parts/Footer";
import Unit1 from "./pages/Unit1";
import Unit2 from "./pages/Unit2"
import About from "./pages/About";
// import Routes
function App() {
  return (
    <div className="App" dir="rtl">
      <Socialbar/>
      <NavbarMenu />
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/unit1" element={<Unit1 />} />
          <Route path="/unit2" element={<Unit2  />} />
          <Route path="/extras" element={<Extras/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
