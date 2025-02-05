import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
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
function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
          <Route path="footer" element={<Footer />} />
          <Route path='toyota' element={<Toyota />} />
          <Route path='mercedes' element={<Mercedes />} />
          <Route path='tesla' element={<Tesla />} />
          <Route path='bmw' element={<Bmw />} />
          <Route path='acura' element={<Acura />} />
          <Route path='hyundai' element={<Hyundai />} />
          <Route path='Koenigsegg' element={<Koenigsegg />} />
          <Route path='lamborghini' element={<Lamborghini />} />
          <Route path='pagani' element={<Pagani />} />
          <Route path='audi' element={<Audi />} />
          <Route path='auston' element={<Auston />} />
          <Route path='rollsroyce' element={<Rollsroyce />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
