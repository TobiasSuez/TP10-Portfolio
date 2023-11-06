import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HouseDoorFill} from 'react-bootstrap-icons';
import { BookmarkHeart} from 'react-bootstrap-icons';
import {MDBFooter,MDBContainer,MDBCol,MDBRow,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';
import '../App.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/Home"><HouseDoorFill/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/MisCreaciones">Mis Creaciones</Nav.Link>
            <Nav.Link href="/MasInfo">Mas Info</Nav.Link>
            <div className='corazoncito'>
              <Nav.Link href="/Favoritos"><BookmarkHeart/></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


