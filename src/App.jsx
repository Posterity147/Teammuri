import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import CheckoutPage from "./pages/Checkout";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Notfound from './pages/Notfound';
import Toyota from './pages/Toyota';
import Mercedes from './pages/Mercedes';
import Tesla from './pages/Tesla';
import Bmw from './pages/Bmw';
import Acura from './pages/Acura';
import Audi from './pages/Audi';
import Hyundai from './pages/Hyundai';
import Koenigsegg from './pages/Koenigsegg';
import Lamborghini from './pages/Lamborghini';
import Pagani from './pages/Pagani';
import Auston from './pages/Auston';
import Rollsroyce from './pages/Rollsroyce';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Payment from './pages/Payment';
import About from './pages/About';
import Financing from './pages/Financing';
import Choose from './pages/Choose';
import Roads from './pages/Roads';
import Customization from './pages/Customization';
import Dealership from './pages/Dealership';
import Carsales from './pages/Carsales';
import Vehiclemaintenance from './pages/Vehiclemaintenance';
import Testdrives from './pages/Testdrives';
import Customer from "./pages/Customer";
import Signup from "./pages/Signup";
import Buynow from "./pages/Buynow";
import Carselection from "./pages/Carselection";

function App() {
  return (

    
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/toyota" element={<Toyota />} />
          <Route path="/mercedes" element={<Mercedes />} />
          <Route path="/tesla" element={<Tesla />} />
          <Route path="/bmw" element={<Bmw />} />
          <Route path="/acura" element={<Acura />} />
          <Route path="/hyundai" element={<Hyundai />} />
          <Route path="/koenigsegg" element={<Koenigsegg />} />
          <Route path="/lamborghini" element={<Lamborghini />} />
          <Route path="/pagani" element={<Pagani />} />
          <Route path="/audi" element={<Audi />} />
          <Route path="/auston" element={<Auston />} />
          <Route path="/rollsroyce" element={<Rollsroyce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/roads" element={<Roads />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/checkout" element={< CheckoutPage />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/dealership" element={<Dealership />} />
          <Route path="/carsales" element={<Carsales />} />
          <Route path="/vehiclemaintenance" element={<Vehiclemaintenance />} />
          <Route path="/testdrives" element={<Testdrives />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/carselection" element={<Carselection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;

