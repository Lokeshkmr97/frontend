import './App.css';
import About from './components/About/About';
import Client from './components/Client/Client';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Routers from './routes/Routers'


function App() {
  return (
    <>
    <Routers></Routers>
    <Services></Services>
    <Client></Client>
    <Team></Team>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
