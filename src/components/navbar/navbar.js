import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.svg'
import './navbar.css'

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="Shortly logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar>
              <Button className='login me-3'>Login</Button>
              <Button className='register'>Register</Button>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;