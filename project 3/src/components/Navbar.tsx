import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <Link to="/" className="text-xl font-bold text-blue-600">ConnectBook</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">My Learning</Link>
            <Link to="/login" className="btn btn-secondary">Log in</Link>
            <Link to="/register" className="btn btn-primary">Sign up</Link>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search for courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow"
              />
              <Search className="absolute left-7 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-3">
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 py-2">Courses</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 py-2">My Learning</Link>
              <Link to="/login" className="btn btn-secondary w-full text-center">Log in</Link>
              <Link to="/register" className="btn btn-primary w-full text-center">Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;