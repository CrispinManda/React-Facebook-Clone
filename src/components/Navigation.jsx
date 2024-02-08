import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import sidebar from "../assets/sidebar.png";
import logo from "../assets/logo.png";
import messages from "../assets/messages.png";
import notification from "../assets/notification.png";
import Avatar from "../assets/Avatar.png";
import Chevrondown from "../assets/Chevrondown.png";

function Navigation() {
  return (
    <>
      <Navbar bg="white" expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand>
            <img src={sidebar} alt="" />
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Brand><b>Hiphonic</b></Navbar.Brand>
          <input type="search" placeholder="Search" className="form-control" style={{ width: '250px' }}
          />

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto"> {/* Use ms-auto to push items to the right */}
              {/* <input type="search" placeholder="Search" className="form-control" /> */}

              <img className="mt-2" src={messages} alt="" height={30} />
              <img src={notification} alt="" height={50} />
              <img src={Avatar} alt="" />
              <img className="mt-4 h" src={Chevrondown} alt="" height={10} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

    </>
  );
}

export default Navigation;
