import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.png";
import Logout from "../Components/Logout";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authProvider.js";
import "./navbar.css";

function NavBars() {
  const [authUser] = useAuth();

  return (
    <div className="navStick">
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            <img src={Logo} title="logo" alt="img" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/ourteam"} className="nav-link">
                Doctors
              </Link>
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <Link to={"/team"} className="dropdown-item">
                  Creators
                </Link>
                <Link to={"/service"} className="dropdown-item">
                  Services
                </Link>
              </NavDropdown>

              <NavDropdown title="User" id="basic-nav-dropdown">
                {authUser ? (
                  <Logout />
                ) : (
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                )}
                <Link to={"/user/dashboard"} className="nav-link">
                  User Dashboard
                </Link>
                <Link to={"/user/dashboard"} className="nav-link">
                  Admin Dashboard
                </Link>
              </NavDropdown>

              <Link to="/Report" className="nav-link">
                <button type="button">
                  Report
                  <span>
                    <IoIosArrowForward />
                  </span>
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
