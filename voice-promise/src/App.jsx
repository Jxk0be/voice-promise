import './index.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-screen flex justify-center'>
      <div className='max-w-[1500px] w-full'>
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Map />
        <Footer />
      </div>
    </div>
  )
}

export default App
