import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavbarMenu.scss";


const NavbarMenu = () => {
  return (
    <Navbar  expand="lg" >
      <Container>
        <Navbar.Brand href="#home">الباحثة/هبة قطب</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">الرئيسية</Nav.Link>



            <NavDropdown title="المحتوى" id="basic-nav-dropdown" >
              <li><Link to="/unit1" class="dropdown-item">الوحدة الأولى</Link></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><Link to="/unit2" class="dropdown-item">الوحدة الثانية</Link></li>
              </NavDropdown>






            {/* <NavDropdown title="المحتوى" id="basic-nav-dropdown" >
              <Link to="/unit1" className="NavDropdown-Item">
                الوحدة الأولى
              </Link>
              <li><hr class="dropdown-divider"></hr></li>
              <Link to="/unit2" className="NavDropdown-Item">
                الوحدة الثانية
              </Link>
            </NavDropdown> */}
            <Nav.Link href="#link">معلومات إثرائية</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
