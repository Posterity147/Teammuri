import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FacebookIcon, InstagramIcon, TwitterIcon, HouseIcon, UserSearch, ScrollText, MapPin, Phone, Mail } from 'lucide-react';
function Footer() {
  return (
    <footer className=" text-gray-600 py-4 mt-5" id='footer'>
      <Container>
        <Row>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className='text-gray-200'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="http://localhost:5173/" className="text-gray-300 hover:text-white no-underline"> <HouseIcon size={20} color='green' className='inline mr-2' /> Home</a></li>
              <li><a href="http://localhost:5173/contact" className="text-gray-300 hover:text-white no-underline"> <UserSearch size={20} color='green' className='inline mr-2'/>Contact us</a></li>
              <li><a href="http://localhost:5173/login" className="text-gray-200 hover:text-white no-underline"> <ScrollText size={20} color='cyan' className='inline mr-2'/>Register</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className='text-gray-200'>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://twitter.com/TrueCar" className="text-gray-300 hover:text-white no-underline"> <TwitterIcon size={20} color='blue' className='inline mr-2' />X(Formely Twitter)</a></li>
              <li><a href="https://www.facebook.com/TrueCar" className="text-gray-300 hover:text-white no-underline"> <FacebookIcon size={20} color='blue'className='inline mr-2'/>Facebook</a></li>
              <li><a href="https://www.instagram.com/truecar/" className="text-gray-300 hover:text-white no-underline"> <InstagramIcon size={20} color='purple' className='inline mr-2'/>Instagram</a></li>
              
            </ul>
          </Col>
        </Row>
        <img src="" alt="" />
      </Container>
      <div>
  <h3 className="text-2xl font-semibold mb-4 text-center text-white">Contact Us</h3>
  <p className="text-gray-300 mb-2">
    <MapPin className="inline-block mr-2" />
     95, Babakekere compound Adeta, Ilorin,Kwara State
  </p>
  <p className="text-gray-300 mb-2">
    <Phone className="inline-block mr-2" />
    +234 9035667678
  </p>
  <p className="text-gray-300">
    <Mail className="inline-block mr-2" />
    contact@aardvark.com
  </p>
</div>

      <div className="text-center text-white py-2">
        &copy; {new Date().getFullYear()} Aardvark. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;