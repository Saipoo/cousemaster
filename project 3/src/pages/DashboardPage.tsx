import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock, BarChart2, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';
import { Course } from '../types';

const DashboardPage: React.FC = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [completionData, setCompletionData] = useState<Record<string, number>>({});
  
  useEffect(() => {
    // In a real app, this would come from an API
    // For demo purposes, we'll assume the user is enrolled in the first 3 courses
    setEnrolledCourses(courses.slice(0, 3));
    
    // Mock completion data
    const mockCompletionData: Record<string, number> = {};
    courses.slice(0, 3).forEach(course => {
      mockCompletionData[course.id] = Math.floor(Math.random() * 100);
    });
    setCompletionData(mockCompletionData);
  }, []);
  
  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Learning Dashboard</h1>
        <Link to="/courses" className="btn btn-primary">
          Browse More Courses
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Enrolled Courses</h3>
              <p className="text-gray-500">{enrolledCourses.length} courses</p>
            </div>
          </div>
          <div className="text-3xl font-bold">{enrolledCourses.length}</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Completed Lessons</h3>
              <p className="text-gray-500">Keep up the good work!</p>
            </div>
          </div>
          <div className="text-3xl font-bold">12</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Certificates Earned</h3>
              <p className="text-gray-500">Show off your achievements</p>
            </div>
          </div>
          <div className="text-3xl font-bold">1</div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
        
        {enrolledCourses.length > 0 ? (
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      className="w-full md:w-48 h-32 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
                    />
                    
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock size={14} className="mr-1" />
                        <span>{course.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{course.instructor}</span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{completionData[course.id] || 0}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${completionData[course.id] || 0}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Link 
                          to={`/courses/${course.id}`} 
                          className="btn btn-secondary text-sm"
                        >
                          Course Details
                        </Link>
                        <Link 
                          to={`/courses/${course.id}/lessons/${course.lessons[0].id}`} 
                          className="btn btn-primary text-sm"
                        >
                          Continue Learning
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
            <p className="text-gray-600 mb-6">
              You haven't enrolled in any courses yet. Browse our catalog to get started.
            </p>
            <Link to="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
          </div>
        )}
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Your Certificates</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-blue-50 p-4 rounded-lg mb-4 md:mb-0 md:mr-6">
              <Award className="h-16 w-16 text-blue-600" />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">Web Development Bootcamp</h3>
              <p className="text-gray-600 mb-4">Completed on March 15, 2025</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Link 
                  to={`/courses/web-dev-bootcamp/certificate`} 
                  className="btn btn-primary text-sm"
                >
                  View Certificate
                </Link>
                <button className="btn btn-secondary text-sm">
                  Download PDF
                </button>
                <button className="btn btn-secondary text-sm">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(3, 6).map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{course.title}</h3>
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
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${course.price.toFixed(2)}</span>
                  <Link to={`/courses/${course.id}`} className="btn btn-primary text-sm">
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

// Star component for ratings
const Star: React.FC<{ size: number; fill: string; className: string }> = ({ 
  size, 
  fill, 
  className 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};