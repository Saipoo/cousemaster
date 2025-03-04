import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Award, User, BookOpen, MessageCircle, Play } from 'lucide-react';
import { getCourseById } from '../data/courses';
import { Course } from '../types';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      }
    }
  }, [courseId]);
  
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
  
  return (
    <div>
      <div className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Link to="/courses" className="text-blue-400 hover:underline">
                  Courses
                </Link>
                <span className="mx-2">›</span>
                <span className="text-gray-300">{course.category}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-xl mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center text-sm mb-4">
                <div className="flex items-center mr-4">
                  <div className="flex items-center text-yellow-400 mr-1">
                    <span className="font-bold mr-1">{course.rating.toFixed(1)}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.floor(course.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-300">({course.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-center mr-4">
                  <User size={16} className="mr-1" />
                  <span>{course.students} students</span>
                </div>
                
                <div className="flex items-center mr-4">
                  <Clock size={16} className="mr-1" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <Award size={16} className="mr-1" />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-gray-300">Created by </span>
                <a href="#" className="text-blue-400 hover:underline">{course.instructor}</a>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  Last updated {course.lastUpdated}
                </span>
                {course.bestseller && (
                  <span className="bg-yellow-500 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded">
                    BESTSELLER
                  </span>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Play size={48} className="text-white opacity-80" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold">${course.price.toFixed(2)}</span>
                    {course.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">${course.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <button className="btn btn-primary w-full mb-3 py-3 text-center">
                    Enroll Now
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mb-6">
                    30-Day Money-Back Guarantee
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">This course includes:</h3>
                    
                    <div className="flex items-start">
                      <BookOpen className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p>{course.lessons.length} lessons</p>
                        <p className="text-sm text-gray-500">{course.duration} of content</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MessageCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p>Access to Q&A</p>
                        <p className="text-sm text-gray-500">Get your questions answered</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p>Certificate of completion</p>
                        <p className="text-sm text-gray-500">Earn a certificate when you finish</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 ${
                activeTab === 'overview'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`pb-4 px-1 ${
                activeTab === 'curriculum'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`pb-4 px-1 ${
                activeTab === 'instructor'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Instructor
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 px-1 ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>
        
        {activeTab === 'overview' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{objective}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                {course.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{course.description}</p>
                <p>
                  This course is designed specifically for freshers and engineering students looking to boost their skills and career prospects. 
                  You'll learn through a combination of video lectures, hands-on exercises, and quizzes to test your knowledge.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Who this course is for</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Engineering students looking to enhance their skills</li>
                <li>Fresh graduates preparing for job interviews</li>
                <li>Professionals wanting to upskill in {course.category}</li>
                <li>Anyone interested in learning {course.category} from scratch</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'curriculum' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Course Content</h2>
              <div className="text-sm text-gray-600">
                {course.lessons.length} lessons • {course.quizzes.length} quizzes • {course.duration} total
              </div>
            </div>
            
            <div className="space-y-4">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 px-6 py-4">
                    <h3 className="font-semibold">
                      Module {moduleIndex + 1}: {module.title}
                    </h3>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {module.items.map((item) => {
                      if (item.type === 'lesson') {
                        const lesson = course.lessons.find(l => l.id === item.id);
                        if (!lesson) return null;
                        
                        return (
                          <div key={lesson.id} className="px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <Play size={16} className="text-blue-600 mr-3" />
                              <div>
                                <p>{lesson.title}</p>
                                <p className="text-sm text-gray-500">{lesson.duration}</p>
                              </div>
                            </div>
                            <Link 
                              to={`/courses/${course.id}/lessons/${lesson.id}`}
                              className="text-blue-600 hover:underline text-sm"
                            >
                              Preview
                            </Link>
                          </div>
                        );
                      } else if (item.type === 'quiz') {
                        const quiz = course.quizzes.find(q => q.id === item.id);
                        if (!quiz) return null;
                        
                        return (
                          <div key={quiz.id} className="px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <svg className="h-4 w-4 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <div>
                                <p>{quiz.title}</p>
                                <p className="text-sm text-gray-500">{quiz.questionCount} questions</p>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">Quiz</span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'instructor' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
            
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt={course.instructor} 
                className="w-32 h-32 rounded-full object-cover"
              />
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{course.instructor}</h3>
                <p className="text-gray-600 mb-4">Expert in {course.category}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{course.rating.toFixed(1)} Instructor Rating</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-gray-500 mr-1" />
                    <span>{course.reviewCount} Reviews</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-500 mr-1" />
                    <span>{course.students} Students</span>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  {course.instructor} is a seasoned professional with over 10 years of experience in {course.category}. 
                  They have worked with leading companies and have helped thousands of students master the skills needed to succeed in today's competitive job market.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div>
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                
                <div className="flex items-center mb-2">
                  <div className="text-5xl font-bold mr-4">{course.rating.toFixed(1)}</div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          fill={i < Math.floor(course.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">Course Rating</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    // Calculate percentage based on rating distribution
                    // This is just a mock calculation
                    let percentage = 0;
                    if (rating === 5) percentage = 65;
                    else if (rating === 4) percentage = 25;
                    else if (rating === 3) percentage = 7;
                    else if (rating === 2) percentage = 2;
                    else percentage = 1;
                    
                    return (
                      <div key={rating} className="flex items-center">
                        <div className="flex items-center w-20">
                          <span className="mr-1">{rating}</span>
                          <Star size={14} className="text-yellow-400" fill="currentColor" />
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                          <div 
                            className="bg-yellow-400 h-2.5 rounded-full" 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="w-12 text-right text-sm text-gray-600">
                          {percentage}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Leave a Review</h3>
                  <div className="flex text-gray-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        className="cursor-pointer hover:text-yellow-400"
                      />
                    ))}
                  </div>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Write your review here..."
                  ></textarea>
                  <button className="btn btn-primary mt-2">Submit Review</button>
                </div>
                
                <div className="space-y-6">
                  {/* Mock reviews */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                        alt="Reviewer" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">Sarah J.</div>
                        <div className="text-sm text-gray-500">2 weeks ago</div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p>
                      This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand. 
                      I've already started applying what I learned in my projects.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                        alt="Reviewer" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">Michael T.</div>
                        <div className="text-sm text-gray-500">1 month ago</div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill="currentColor"
                        />
                      ))}
                      <Star size={16} />
                    </div>
                    <p>
                      Great course with lots of practical examples. I would have liked more advanced topics, 
                      but overall it's perfect for beginners and intermediate learners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;