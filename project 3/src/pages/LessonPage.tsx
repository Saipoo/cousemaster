import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import LessonSidebar from '../components/LessonSidebar';
import { getCourseById } from '../data/courses';
import { Course, Lesson } from '../types';

const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        
        if (lessonId) {
          const foundLesson = foundCourse.lessons.find(l => l.id === lessonId);
          if (foundLesson) {
            setLesson(foundLesson);
          }
        }
      }
    }
    
    // Load completed lessons from localStorage
    const savedCompletedLessons = localStorage.getItem(`course_${courseId}_completed`);
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons));
    }
  }, [courseId, lessonId]);
  
  const markLessonComplete = () => {
    if (!lessonId || completedLessons.includes(lessonId)) return;
    
    const newCompletedLessons = [...completedLessons, lessonId];
    setCompletedLessons(newCompletedLessons);
    
    // Save to localStorage
    localStorage.setItem(`course_${courseId}_completed`, JSON.stringify(newCompletedLessons));
  };
  
  const navigateToNextLesson = () => {
    if (!course || !lesson) return;
    
    // Find current module and item index
    let currentModuleIndex = -1;
    let currentItemIndex = -1;
    
    for (let i = 0; i < course.modules.length; i++) {
      const itemIndex = course.modules[i].items.findIndex(
        item => item.type === 'lesson' && item.id === lessonId
      );
      
      if (itemIndex !== -1) {
        currentModuleIndex = i;
        currentItemIndex = itemIndex;
        break;
      }
    }
    
    if (currentModuleIndex === -1 || currentItemIndex === -1) return;
    
    // Find next item
    const currentModule = course.modules[currentModuleIndex];
    
    if (currentItemIndex < currentModule.items.length - 1) {
      // Next item in the same module
      const nextItem = currentModule.items[currentItemIndex + 1];
      
      if (nextItem.type === 'lesson') {
        navigate(`/courses/${courseId}/lessons/${nextItem.id}`);
      } else if (nextItem.type === 'quiz') {
        navigate(`/courses/${courseId}/quizzes/${nextItem.id}`);
      }
    } else if (currentModuleIndex < course.modules.length - 1) {
      // First item in the next module
      const nextModule = course.modules[currentModuleIndex + 1];
      const nextItem = nextModule.items[0];
      
      if (nextItem.type === 'lesson') {
        navigate(`/courses/${courseId}/lessons/${nextItem.id}`);
      } else if (nextItem.type === 'quiz') {
        navigate(`/courses/${courseId}/quizzes/${nextItem.id}`);
      }
    }
  };
  
  if (!course || !lesson) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <p className="mb-6">The lesson you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn btn-primary">
          Browse Courses
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Link 
              to={`/courses/${courseId}`}
              className="text-blue-600 hover:underline flex items-center"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to course
            </Link>
          </div>
          
          <VideoPlayer videoUrl={lesson.videoUrl} title={lesson.title} />
          
          <div className="mt-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <button 
              onClick={markLessonComplete}
              className={`btn ${
                completedLessons.includes(lessonId || '') 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'btn-primary'
              }`}
              disabled={completedLessons.includes(lessonId || '')}
            >
              {completedLessons.includes(lessonId || '') ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
          
          <div className="mt-6 prose max-w-none">
            <h2>Lesson Description</h2>
            <p>{lesson.description}</p>
            
            {lesson.resources && lesson.resources.length > 0 && (
              <>
                <h2>Resources</h2>
                <div className="space-y-3 not-prose">
                  {lesson.resources.map((resource) => (
                    <a 
                      key={resource.id}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border rounded-md hover:bg-gray-50"
                    >
                      <Download size={16} className="mr-3 text-blue-600" />
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-600">{resource.type.toUpperCase()}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )}
            
            <div className="mt-8 flex justify-between not-prose">
              <button 
                onClick={() => navigate(-1)}
                className="btn btn-secondary flex items-center"
              >
                <ChevronLeft size={16} className="mr-1" />
                Previous
              </button>
              
              <button 
                onClick={navigateToNextLesson}
                className="btn btn-primary flex items-center"
              >
                Next
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <LessonSidebar course={course} completedLessons={completedLessons} />
        </div>
      </div>
    </div>
  );
};

export default LessonPage;