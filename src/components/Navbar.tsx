import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Department Name - Left Side */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/logo.png`}
                  alt="Department Logo" 
                  className="w-12 h-12 mr-3"
                  onError={(e) => {
                    console.log('Logo failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-lg font-semibold text-gray-800">CSE(AI & ML)</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-primary hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="#research" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Research</a>
              <a href="#gallery" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#academics" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Academics</a>
              <a href="#students" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Student's Chapter</a>
              <a href="#iscsai" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">ISCSAI 2025</a>
              <a href="#contact" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#research" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Research</a>
            <a href="#gallery" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#academics" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Academics</a>
            <a href="#students" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Student's Chapter</a>
            <a href="#iscsai" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">ISCSAI 2025</a>
            <a href="#contact" className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
