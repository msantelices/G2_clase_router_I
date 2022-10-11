import { Link } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand>Dogstel</Navbar.Brand>
          {/* Links */}
          <Link to="/" className='text-white ms-3 text-decoration-none'>Home</Link>
          <Link to="/planes" className='text-white ms-3 text-decoration-none'>Planes</Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">Contacto</Link>
        </Container>
      </Navbar>
    </>
  );
}
