import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PAGES } from '../utils/constants';


function Menu({setCurPage}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">BVA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              onClick={() => setCurPage(PAGES.LEGISLATORS)}
            >
              {PAGES.LEGISLATORS}
            </Nav.Link>
            <Nav.Link 
              onClick={() => setCurPage(PAGES.BILLS)}
            >
              {PAGES.BILLS}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;