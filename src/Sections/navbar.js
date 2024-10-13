import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger icon
import { Link } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => toast(text);

function NavBars() {
  const { data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  
  return (
    <div className="navStick">
      <ToastContainer />
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            <img src={Logo} title="logo" alt="img" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle">
            <GiHamburgerMenu size={24} /> {/* Use hamburger icon */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} className="nav-link">Home</Link>
              <Link to={"/service"} className="nav-link">Service</Link>
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <Link to={"/ourteam"} className="dropdown-item">Our Team</Link>
                <Link to={""} className="dropdown-item">Creator</Link>
              </NavDropdown>
              <Link to={"/booking"} className="nav-link">Booking</Link>
              {data?.isAuthenticated ? (
                <Link
                  to=""
                  className="nav-link"
                  onClick={() => {
                    dispatch({ type: "AUTH_LOGOUT" });
                    notify("Logged out");
                  }}
                >
                  Logout
                </Link>
              ) : (
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <Link to={"/login"} className="dropdown-item">Patient</Link>
                  <a href="https://hm-system.netlify.app/" className="dropdown-item">Staff</a>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
