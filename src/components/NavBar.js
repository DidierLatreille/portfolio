import "../App.css";
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <>
        <Navbar className="NavBar" variant="white">
            <Container>
                <Navbar.Brand href="#home">
                <h1 className="TituloNavBar">Didier Latreille</h1>
                </Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item >
                      <h3 className="IndiceNav">Sobre Mi</h3>
                    </Nav.Item>
                    <Nav.Item >
                      <h3 className="IndiceNav">Trabajos</h3>
                    </Nav.Item>
                    <Nav.Item >
                      <h3 className="IndiceNav">Contacto</h3>
                    </Nav.Item>
                </Nav>
            </Container>
          </Navbar>
    </>
  );
}

export default NavBar;