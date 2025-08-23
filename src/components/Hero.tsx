import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "AI and Machine Learning",
      title: "Artificial Intelligence & Machine Learning"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Computer Science",
      title: "Computer Science & Engineering"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Data Science",
      title: "Data Science & Analytics"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Code Snippet */}
          <div className="space-y-6">
            <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# Welcome to AI & ML
class Department:
    def __init__(self):
        self.name = "Computer Science & Engineering (AI & ML)"
        self.location = "Haldia Institute of Technology"
        self.excellence = True
    
    def innovate(self):
        return "Building the future with AI"
    
    def inspire(self):
        return "Empowering minds with ML"

# Start your journey
department = Department()
print(department.innovate())
print(department.inspire())`}</code>
              </pre>
            </div>
            <div className="text-center lg:text-left">
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                KNOW MORE →
              </button>
            </div>
          </div>

          {/* Right Side - Quote and Title */}
          <div className="text-center lg:text-left space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-20">
              <blockquote className="text-white text-2xl lg:text-3xl font-light leading-relaxed">
                "Everyone should learn to program a computer, because it teaches you how to think."
              </blockquote>
              <cite className="block mt-4 text-primary text-lg font-medium">
                — Steve Jobs
              </cite>
            </div>
            
            <div className="text-white space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Benefits of studying
              </h1>
              <h2 className="text-5xl lg:text-7xl font-bold text-primary">
                AI & ML
              </h2>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
