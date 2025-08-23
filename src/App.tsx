import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import HeadOfDepartment from './components/HeadOfDepartment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <HeadOfDepartment />
      <Footer />
    </div>
  );
}

export default App;
