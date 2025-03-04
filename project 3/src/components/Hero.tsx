import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Boost Your Career with In-Demand Skills
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students learning the skills that matter for today's job market. 
            Get certified and stand out from the crowd.
          </p>
          
          <div className="relative max-w-lg">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
          
          <div className="mt-6 text-blue-100 text-sm">
            <p>Popular: 
              <Link to="#" className="ml-2 underline hover:text-white">Web Development</Link>,
              <Link to="#" className="ml-2 underline hover:text-white">Data Science</Link>,
              <Link to="#" className="ml-2 underline hover:text-white">Machine Learning</Link>,
              <Link to="#" className="ml-2 underline hover:text-white">Python</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;