import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Computer Engineering */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Computer Engineering (AI & ML)</h3>
              <p className="text-lg leading-relaxed">
                Computer Engineering with AI & ML specialization integrates electrical engineering and computer science to develop intelligent systems. Our program focuses on hardware-software integration, machine learning algorithms, neural networks, and AI applications in real-world scenarios.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Faculty</div>
              </div>
            </div>
          </div>

          {/* Right Side - Computer Science */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-secondary to-gray-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Computer Science (AI & ML)</h3>
              <p className="text-lg leading-relaxed">
                Computer Science with AI & ML specialization focuses on intelligent algorithms, data structures, and computational systems. Our program emphasizes machine learning, deep learning, natural language processing, computer vision, and the development of AI-powered applications that solve complex real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Research Areas</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
            <p className="text-gray-600">Updated curriculum aligned with industry standards and emerging technologies.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Industry Connect</h3>
            <p className="text-gray-600">Strong partnerships with leading tech companies for internships and placements.</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 6a1 1 0 000 2h4a1 1 0 100-2H8zm-1 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Research Excellence</h3>
            <p className="text-gray-600">Cutting-edge research in AI, ML, cybersecurity, and software engineering.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
