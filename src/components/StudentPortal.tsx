import React, { useState } from 'react';

const StudentPortal: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleLoginSignup = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Student Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {showLogin ? "Access your academic achievements" : "Create your student account"}
          </p>
        </div>

        {showLogin ? (
          // Login Form
          <div className="mt-8">
            <div className="bg-cream-50 p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
              <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">
                Welcome back, Student!
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Don't have an account? 
                <button 
                  onClick={toggleLoginSignup} 
                  className="text-orange-500 font-medium ml-1 hover:underline"
                >
                  Sign up
                </button>
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      id="password" 
                      placeholder="Enter your password" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    />
                    <button 
                      type="button" 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <a href="#" className="text-orange-500 hover:underline">Forgot Password?</a>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-200"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        ) : (
          // Signup Form
          <div className="mt-8">
            <div className="bg-cream-50 p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
              <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">
                Sign Up as Student
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Already have an account? 
                <button 
                  onClick={toggleLoginSignup} 
                  className="text-orange-500 font-medium ml-1 hover:underline"
                >
                  Login
                </button>
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="collegeId" className="block text-gray-700 font-medium mb-2">College ID</label>
                  <input 
                    type="text" 
                    id="collegeId" 
                    placeholder="Enter your college ID" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="batch" className="block text-gray-700 font-medium mb-2">Batch</label>
                  <div className="relative">
                    <select 
                      id="batch" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none"
                    >
                      <option value="">Select a batch</option>
                      <option value="2022-2026">2022-2026</option>
                      <option value="2023-2027">2023-2027</option>
                      <option value="2024-2028">2024-2028</option>
                      <option value="2025-2029">2025-2029</option>
                      <option value="2026-2030">2026-2030</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="universityRoll" className="block text-gray-700 font-medium mb-2">University Roll No</label>
                  <input 
                    type="text" 
                    id="universityRoll" 
                    placeholder="Enter your university roll number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="universityReg" className="block text-gray-700 font-medium mb-2">University Registration No</label>
                  <input 
                    type="text" 
                    id="universityReg" 
                    placeholder="Enter your university registration number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-gray-700 font-medium mb-2">Department</label>
                  <div className="relative">
                    <select 
                      id="department" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none"
                    >
                      <option value="CSE-AIML">CSE-AIML</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    placeholder="Enter your 10-digit mobile number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">Gender</label>
                  <div className="relative">
                    <select 
                      id="gender" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      id="password" 
                      placeholder="Min. 8 characters" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    />
                    <button 
                      type="button" 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-gray-700 font-medium mb-2">Enter a password. Must contain:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-gray-400">✕</span>
                      At least 8 characters
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-gray-400">✕</span>
                      At least 1 number
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-gray-400">✕</span>
                      At least 1 lowercase letter
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-gray-400">✕</span>
                      At least 1 uppercase letter
                    </li>
                  </ul>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-200 mt-6"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPortal;