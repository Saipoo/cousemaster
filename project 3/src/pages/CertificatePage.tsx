import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Download, Share2 } from 'lucide-react';
import Certificate from '../components/Certificate';
import { getCourseById } from '../data/courses';
import { Course } from '../types';

const CertificatePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [studentName, setStudentName] = useState('John Doe'); // In a real app, this would come from user profile
  
  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      }
    }
    
    // Load completed lessons from localStorage
    const savedCompletedLessons = localStorage.getItem(`course_${courseId}_completed`);
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons));
    }
  }, [courseId]);
  
  const isFullyCompleted = () => {
    if (!course) return false;
    
    const totalItems = course.lessons.length + course.quizzes.length;
    return completedLessons.length >= totalItems;
  };
  
  if (!course) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn btn-primary">
          Browse Courses
        </Link>
      </div>
    );
  }
  
  if (!isFullyCompleted()) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Certificate Not Available</h2>
        <p className="mb-6">
          You need to complete all lessons and quizzes to earn your certificate.
        </p>
        <Link to={`/courses/${courseId}`} className="btn btn-primary">
          Continue Learning
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8">
      <div className="mb-6">
        <Link 
          to={`/courses/${courseId}`}
          className="text-blue-600 hover:underline flex items-center"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to course
        </Link>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Certificate of Completion</h1>
        <p className="text-gray-600">
          Congratulations on completing {course.title}! You can download or share your certificate.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-8">
        <Certificate 
          studentName={studentName}
          courseName={course.title}
          completionDate={new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
          instructorName={course.instructor}
        />
      </div>
      
      <div className="flex justify-center space-x-4">
        <button className="btn btn-primary flex items-center">
          <Download size={16} className="mr-2" />
          Download Certificate
        </button>
        <button className="btn btn-secondary flex items-center">
          <Share2 size={16} className="mr-2" />
          Share Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;