import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Notfound from './pages/notfound'; 
function App() {
  

  return (
    <>
    <Navbar/>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}/>
      <Route path="register" element={<Register />}/>
      <Route path="login" element={<Login/>}/>
      <Route path="*" element={<Notfound/>}/>
      
    </Routes>
  </BrowserRouter>
    <Footer/>
    
     

    </>
  )
}

export default App
