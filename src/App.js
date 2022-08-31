import NavbarMenu from "./NavbarMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Unit from "./pages/Unit";
import Container from "react-bootstrap/esm/Container";
import Extras from "./pages/Extras";

// import Routes
function App() {
  return (
    <div className="App" dir="rtl">
      <NavbarMenu />
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/unit1" element={<Unit number={1}/>} />
          <Route path="/unit2" element={<Unit number={2} />} />
          <Route path="/extras" element={<Extras/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
