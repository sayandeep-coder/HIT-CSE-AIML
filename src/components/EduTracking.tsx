import React from 'react';
import { Link } from 'react-router-dom';

const EduTracking: React.FC = () => {

  // Login/signup forms will be handled in separate pages

  return (
    <section id="edutracking" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            <span className="text-blue-600">Edu</span>
            <span className="text-gray-900">Tracking</span> System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A centralized system for academic achievement tracking, verification, and
            recognition. Empowering students, faculty, and administrators with
            comprehensive achievement management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Live Platform
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              Secure & Verified
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Login Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Student Login</h3>
                  <p className="text-gray-600">Track your achievements and progress</p>
                </div>
              </div>
              <Link 
                to="/student-portal" 
                className="block w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200 text-center"
              >
                Access Student Portal
              </Link>
            </div>
          </div>

          {/* Faculty Login Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Faculty Login</h3>
                  <p className="text-gray-600">Review and verify student submissions</p>
                </div>
              </div>
              <Link 
                to="/faculty-portal" 
                className="block w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition duration-200 text-center"
              >
                Access Faculty Portal
              </Link>
            </div>
          </div>

          {/* Admin Login Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-full mr-4">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Admin Login</h3>
                  <p className="text-gray-600">Manage platform and view analytics and more</p>
                </div>
              </div>
              <Link 
                to="/admin-portal" 
                className="block w-full py-3 px-4 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition duration-200 text-center"
              >
                Access Admin Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Login/Signup forms will be displayed in separate tabs */}
      </div>
    </section>
  );
};

export default EduTracking;