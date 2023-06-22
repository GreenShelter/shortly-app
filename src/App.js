import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/navbar';
import Hero from './components/hero/hero';
import './App.css'

import Container from 'react-bootstrap/esm/Container';
import AdvanceStatistic from './components/advancesStatisticSection/advanceStatisticSection';
import BoostYourLinkSection from './components/boostYourLinkSection/boostYourLinkSection';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='main'>
      <NavbarComponent />
      <Hero />
      <AdvanceStatistic />
      <BoostYourLinkSection />
      <Footer />
    </div>
  );
}

export default App;
