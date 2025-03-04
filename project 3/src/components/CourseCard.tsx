import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Award } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="card group hover:scale-[1.02] transition-all duration-200">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        {course.bestseller && (
          <div className="absolute top-4 left-0 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1">
            BESTSELLER
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-500 mr-1">
            <span className="font-bold mr-1">{course.rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < Math.floor(course.rating) ? "currentColor" : "none"} 
                  className="text-yellow-400"
                />
              ))}
            </div>
          </div>
          <span className="text-gray-500 text-xs">({course.reviewCount})</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock size={14} className="mr-1" />
          <span>{course.duration}</span>
          <span className="mx-2">•</span>
          <Award size={14} className="mr-1" />
          <span>{course.level}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${course.price.toFixed(2)}</span>
          {course.originalPrice && (
            <span className="text-gray-500 line-through text-sm">${course.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;