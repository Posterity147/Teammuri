import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import { HouseIcon } from 'lucide-react';

function NaviBar() {
  return (
    <Navbar expand="lg" className="flex justify-between gap-36 w-full position-top bg-black h-20" id='navbar'>
      <Container>
      <a href="http://localhost:5173/"></a>
        <Navbar.Brand>
          <Link to="/" className='no-underline font-serif text-white'><strong><b>Aardvark</b></strong></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link  className='text-white no-underline' to="/dashboard"><b><strong>Brand</strong></b></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link><Link to="/login" className='no-underline text-white'>Log in or Sign up</Link></Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
