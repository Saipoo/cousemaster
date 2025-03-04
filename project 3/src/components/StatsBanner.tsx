import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsBanner: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10" />
            </div>
            <div className="text-3xl font-bold mb-1">50,000+</div>
            <div className="text-blue-100">Active Students</div>
          </div>
          
          <div>
            <div className="flex justify-center mb-4">
              <BookOpen className="h-10 w-10" />
            </div>
            <div className="text-3xl font-bold mb-1">200+</div>
            <div className="text-blue-100">Quality Courses</div>
          </div>
          
          <div>
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10" />
            </div>
            <div className="text-3xl font-bold mb-1">15,000+</div>
            <div className="text-blue-100">Certificates Issued</div>
          </div>
          
          <div>
            <div className="flex justify-center mb-4">
              <Globe className="h-10 w-10" />
            </div>
            <div className="text-3xl font-bold mb-1">100+</div>
            <div className="text-blue-100">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;