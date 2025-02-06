import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FacebookIcon, InstagramIcon, TwitterIcon, HouseIcon, UserSearch, ScrollText } from 'lucide-react';
function Footer() {
  return (
    <footer className=" text-gray-600 py-4 mt-5" id='footer'>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className='text-gray-200'>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-gray-300 hover:text-white">Our Story</a></li>
              <li><a href="#!" className="text-gray-300 hover:text-white">Mission</a></li>
              <li><a href="#!" className="text-gray-300 hover:text-white">Values</a></li>
            </ul>
          </Col>
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
              <li><a href="https://twitter.com/TrueCar" className="text-gray-300 hover:text-white no-underline"> <TwitterIcon size={20} color='blue' className='inline mr-2' /> X</a></li>
              <li><a href="https://www.facebook.com/TrueCar" className="text-gray-300 hover:text-white no-underline"> <FacebookIcon size={20} color='blue'className='inline mr-2'/> Facebook</a></li>
              <li><a href="https://www.instagram.com/truecar/" className="text-gray-300 hover:text-white no-underline"> <InstagramIcon size={20} color='purple' className='inline mr-2'/>Instagram</a></li>
              
            </ul>
          </Col>
        </Row>
        <p className='mt-24 text-gray-300'>* Between 1/1/23 and 3/31/23, the average savings off MSRP experienced by consumers who connected with a TrueCar Certified Dealer through the Employee Auto Buying Program and who were identified as buying a new vehicle from that Certified Dealer was $796. Your actual savings may vary based on multiple factors, including the vehicle you select, region, dealer, and applicable vehicle-specific manufacturer incentives, which are subject to change. The MSRP is determined by the manufacturer and may not reflect the price at which vehicles are generally sold in the dealer's trade area, as many vehicles are sold below MSRP. Each dealer sets its own pricing.

For questions about the TrueCar Auto Buying Service please call 1-888-878-3227.

Certified Dealers are contractually obligated by TrueCar to meet certain customer service requirements and complete the TrueCar Dealer Certification Program.

TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles shown on this website are offered for sale by licensed motor vehicle dealers. All vehicles are subject to prior sale. By accessing this website, you agree to the TrueCar Terms of Service and Privacy Policy.

Terms of ServicePrivacy PolicyCalifornia PrivacyDo Not Sell Or Share My Personal Information</p>
      </Container>
      <div className="text-center text-white py-2">
        &copy; {new Date().getFullYear()} Aardvark. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;