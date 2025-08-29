import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EduTracking from './components/EduTracking';
import About from './components/About';
import Gallery from './components/Gallery';
import HeadOfDepartment from './components/HeadOfDepartment';
import Footer from './components/Footer';
import StudentPortal from './components/StudentPortal';
import FacultyPortal from './components/FacultyPortal';
import AdminPortal from './components/AdminPortal';

function App() {
  useEffect(() => {
    console.log('App component mounted');
    console.log('Current location:', window.location.href);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/faculty-portal" element={<FacultyPortal />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <EduTracking />
              <About />
              <Gallery />
              <HeadOfDepartment />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
