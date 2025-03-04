import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Start Your Learning Journey Today</h2>
            <p className="text-gray-300 mb-8">
              Join ConnectBook and get access to our library of high-quality courses designed 
              specifically for freshers and engineering students. Boost your skills and career prospects.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>Access to all courses with a single subscription</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>Learn at your own pace with lifetime access</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>Earn certificates recognized by top employers</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <p>Connect with a community of learners and instructors</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="btn btn-primary px-6 py-3 text-center">
                Browse Courses
              </Link>
              <Link to="/register" className="btn bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 text-center">
                Sign Up Now
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students learning together" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;