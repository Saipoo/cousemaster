import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { Course } from '../types';

interface FeaturedCoursesProps {
  courses: Course[];
  title: string;
  subtitle?: string;
  viewAllLink?: string;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ 
  courses, 
  title, 
  subtitle, 
  viewAllLink 
}) => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
          {viewAllLink && (
            <Link to={viewAllLink} className="text-blue-600 hover:underline font-medium">
              View all
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;