import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Play, FileText, HelpCircle, CheckCircle, Lock } from 'lucide-react';
import { Course, Lesson, Quiz } from '../types';

interface LessonSidebarProps {
  course: Course;
  completedLessons: string[];
}

const LessonSidebar: React.FC<LessonSidebarProps> = ({ course, completedLessons }) => {
  const { courseId, lessonId, quizId } = useParams();
  
  const isLessonCompleted = (id: string) => completedLessons.includes(id);
  const isCurrentLesson = (id: string) => id === lessonId;
  const isCurrentQuiz = (id: string) => id === quizId;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
      <h3 className="font-bold text-lg mb-4">Course Content</h3>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{course.lessons.length} lessons • {course.quizzes.length} quizzes</span>
          <span>{course.duration}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ 
              width: `${(completedLessons.length / (course.lessons.length + course.quizzes.length)) * 100}%` 
            }}
          ></div>
        </div>
      </div>
      
      <div className="space-y-1">
        {course.modules.map((module, index) => (
          <div key={module.id} className="mb-4">
            <h4 className="font-medium mb-2">
              Module {index + 1}: {module.title}
            </h4>
            
            <div className="space-y-1 pl-2">
              {module.items.map((item) => {
                if (item.type === 'lesson') {
                  const lesson = course.lessons.find(l => l.id === item.id) as Lesson;
                  return (
                    <Link
                      key={lesson.id}
                      to={`/courses/${courseId}/lessons/${lesson.id}`}
                      className={`flex items-center p-2 rounded-md text-sm ${
                        isCurrentLesson(lesson.id)
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {lesson.locked ? (
                        <Lock size={16} className="mr-2 text-gray-400" />
                      ) : isLessonCompleted(lesson.id) ? (
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                      ) : (
                        <Play size={16} className="mr-2 text-blue-600" />
                      )}
                      <span className={lesson.locked ? 'text-gray-400' : ''}>
                        {lesson.title}
                      </span>
                      <span className="ml-auto text-xs text-gray-500">{lesson.duration}</span>
                    </Link>
                  );
                } else if (item.type === 'quiz') {
                  const quiz = course.quizzes.find(q => q.id === item.id) as Quiz;
                  return (
                    <Link
                      key={quiz.id}
                      to={`/courses/${courseId}/quizzes/${quiz.id}`}
                      className={`flex items-center p-2 rounded-md text-sm ${
                        isCurrentQuiz(quiz.id)
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {quiz.locked ? (
                        <Lock size={16} className="mr-2 text-gray-400" />
                      ) : isLessonCompleted(quiz.id) ? (
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                      ) : (
                        <HelpCircle size={16} className="mr-2 text-purple-600" />
                      )}
                      <span className={quiz.locked ? 'text-gray-400' : ''}>
                        {quiz.title}
                      </span>
                      <span className="ml-auto text-xs text-gray-500">{quiz.questionCount} questions</span>
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        ))}
      </div>
      
      {completedLessons.length === (course.lessons.length + course.quizzes.length) && (
        <Link 
          to={`/courses/${courseId}/certificate`}
          className="mt-4 btn btn-primary w-full flex items-center justify-center"
        >
          <FileText size={16} className="mr-2" />
          View Certificate
        </Link>
      )}
    </div>
  );
};

export default LessonSidebar;