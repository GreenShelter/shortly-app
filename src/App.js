import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/navbar';
import Hero from './components/hero/hero';
import './App.css'

import Container from 'react-bootstrap/esm/Container';
import AdvanceStatistic from './components/advancesStatisticSection/advanceStatisticSection';
import BoostYourLinkSection from './components/boostYourLinkSection/boostYourLinkSection';

function App() {
  return (
    <div className='main'>
      <NavbarComponent />
      <Hero />
      <AdvanceStatistic />
      <BoostYourLinkSection />
    </div>
  );
}

export default App;
