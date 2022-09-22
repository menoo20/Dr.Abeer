import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavbarMenu.scss";

const NavbarMenu = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">الباحثة/هبة قطب</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              الرئيسية
            </Link>
            <NavDropdown title="المحتوى" id="basic-nav-dropdown">
              <li>
                <Link to="/unit1" className="dropdown-item">
                  الوحدة الأولى
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <Link to="/unit2" className="dropdown-item">
                  الوحدة الثانية
                </Link>
              </li>
            </NavDropdown>
            <Link to="/extras" className="nav-link">
              معلومات إثرائية
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
