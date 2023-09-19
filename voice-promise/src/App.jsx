import './index.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-screen flex flex-col justify-center'>
      <Navbar />
      <div className='max-w-[1280px] w-full pt-[50px] centered'>
        <Hero />
        <About />
        <Contact />
        <Map />
      </div>
      <Footer />
    </div>
  )
}

export default App
