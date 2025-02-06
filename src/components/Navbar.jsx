import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import { HouseIcon } from 'lucide-react';

function NaviBar() {
  return (
    <nav class="navbar">
    <div class="logo">
        <a href="http://localhost:5173/" className='ml-5'>Aardvark Cars</a>
    </div>
    <ul class="nav-links">
        <li><a href="http://localhost:5173/">Home</a></li>
        <li><a href="http://localhost:5173/dashboard">Inventory</a></li>
        <li><a href="http://localhost:5173/services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="http://localhost:5173/contact" className='mr-5'>Contact</a></li>
    </ul>
    <div class="menu-icon" id="menu-icon">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
</nav>
  );
}

export default NaviBar;
