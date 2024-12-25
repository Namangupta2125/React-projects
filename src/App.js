import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FeaturedTour from './components/FeaturedTour';
import Services from './components/Services';
import Footer from './components/Footer'
import Aboutus from './components/Aboutus';
function App() {
  return (
    <>  
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Services/>
      <FeaturedTour/>
      <Footer/>
    </>
  );
}

export default App;
