import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Team from '../components/Team/Team';
import Services from '../components/Services/Services';
import Client from '../components/Client/Client';

function Routers() {
  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/client" element={<Client />} />
        {/* Add more routes for other pages */}
      </Routes>
      
    </Router>
    </>
  );
}

export default Routers;
