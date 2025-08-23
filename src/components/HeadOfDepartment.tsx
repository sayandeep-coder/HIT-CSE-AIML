import React from 'react';

const HeadOfDepartment: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Head of The Department | DESK</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Profile */}
          <div className="text-center lg:text-left">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-8 shadow-lg">
              <div className="flex flex-col items-center lg:items-start space-y-6">
                {/* Profile Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  
                </div>

                {/* Name and Title */}
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">DR. Bidesh Chakrobarty</h3>
                  <p className="text-xl font-semibold mb-4">PROFESSOR & HEAD</p>
                  <p className="text-lg">M.Tech., Ph.D.</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Welcome Message */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-primary p-8 rounded-lg shadow-lg">
              <blockquote className="text-gray-800 text-lg leading-relaxed">
                "I welcome all the students to the Department of Computer Science and Engineering. Our motto is to provide quality technical education to our students and develop leadership qualities through which they can create employment for others. The process of learning is extremely important in life. What you learn, how you learn and where you learn play a crucial role in developing one's intellectual capability, besides career. Along with academic knowledge, we also train our Engineers to face the challenges in life by providing many value added courses to enhance their career prospects. The excellent infrastructure, teaching faculty of the best kind ensuring quality education such as interaction among students, parents and staff, along with a Training and Placement Cell ensures a bright future to its students. Department has an excellent infrastructural and computing facilities and provides a conducive environment to promote academic and research excellence in the department. The highly energetic and motivated teaching fraternity of the Department of Computer Science and Engineering look forward to the overall growth of the department and they aim at doing something extraordinarily remarkable in the academic area of Computer Science and Engineering. I congratulate to the team of faculty members and the students for their brilliant and original efforts. I wish all the Students and Faculty a great academic career."
              </blockquote>
            </div>

            <div className="text-center lg:text-left">
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                SEE THE COMPLETE FACULTY DETAILS →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">RESEARCH</h3>
            <p className="text-lg italic">"If we knew what it was we were doing, It would not be called research, would it?"</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-secondary to-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">STUDENT'S CHAPTER</h3>
            <p className="text-lg">Experience the journey of our students along their path of excellence.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">ACADEMICS</h3>
            <p className="text-lg">Education is a way of imparting knowledge, skills and learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadOfDepartment;
