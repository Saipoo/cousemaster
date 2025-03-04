import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Award, AlertCircle } from 'lucide-react';
import QuizQuestion from '../components/QuizQuestion';
import LessonSidebar from '../components/LessonSidebar';
import { getCourseById } from '../data/courses';
import { Course, Quiz } from '../types';

const QuizPage: React.FC = () => {
  const { courseId, quizId } = useParams<{ courseId: string; quizId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        
        if (quizId) {
          const foundQuiz = foundCourse.quizzes.find(q => q.id === quizId);
          if (foundQuiz) {
            setQuiz(foundQuiz);
            setUserAnswers(new Array(foundQuiz.questions.length).fill(false));
          }
        }
      }
    }
    
    // Load completed lessons from localStorage
    const savedCompletedLessons = localStorage.getItem(`course_${courseId}_completed`);
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons));
    }
  }, [courseId, quizId]);
  
  const handleAnswer = (questionIndex: number, isCorrect: boolean) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[questionIndex] = isCorrect;
    setUserAnswers(newUserAnswers);
  };
  
  const calculateScore = () => {
    if (!userAnswers.length) return 0;
    
    const correctAnswers = userAnswers.filter(answer => answer).length;
    return Math.round((correctAnswers / userAnswers.length) * 100);
  };
  
  const handleSubmitQuiz = () => {
    setShowResults(true);
    setQuizSubmitted(true);
    
    const score = calculateScore();
    if (quiz && score >= quiz.passingScore) {
      // Mark quiz as completed
      if (!completedLessons.includes(quizId || '')) {
        const newCompletedLessons = [...completedLessons, quizId || ''];
        setCompletedLessons(newCompletedLessons);
        
        // Save to localStorage
        localStorage.setItem(`course_${courseId}_completed`, JSON.stringify(newCompletedLessons));
      }
    }
  };
  
  if (!course || !quiz) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz not found</h2>
        <p className="mb-6">The quiz you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn btn-primary">
          Browse Courses
        </Link>
      </div>
    );
  }
  
  const score = calculateScore();
  const isPassing = score >= quiz.passingScore;
  
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
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
            <p className="text-gray-600 mb-4">{quiz.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Award size={16} className="mr-1" />
                <span>Passing score: {quiz.passingScore}%</span>
              </div>
              <div>
                <span>{quiz.questionCount} questions</span>
              </div>
            </div>
            
            {!quizSubmitted && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <div>
                    <p className="font-medium text-blue-700">Quiz Instructions</p>
                    <p className="text-blue-600">
                      Read each question carefully and select the best answer. You need to score at least {quiz.passingScore}% to pass this quiz.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {quizSubmitted && (
              <div className={`mb-6 p-4 rounded-md ${
                isPassing ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
              } border-l-4`}>
                <div className="flex">
                  {isPassing ? (
                    <Award className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <div>
                    <p className={`font-medium ${isPassing ? 'text-green-700' : 'text-red-700'}`}>
                      {isPassing ? 'Congratulations!' : 'Not quite there yet!'}
                    </p>
                    <p className={isPassing ? 'text-green-600' : 'text-red-600'}>
                      Your score: {score}% {isPassing ? '(Passed)' : `(${quiz.passingScore}% required to pass)`}
                    </p>
                    {!isPassing && (
                      <button 
                        onClick={() => {
                          setShowResults(false);
                          setQuizSubmitted(false);
                          setUserAnswers(new Array(quiz.questions.length).fill(false));
                        }}
                        className="mt-2 text-red-600 underline"
                      >
                        Retry Quiz
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {quiz.questions.map((question, index) => (
            <QuizQuestion 
              key={question.id}
              question={question}
              questionNumber={index + 1}
              onAnswer={(isCorrect) => handleAnswer(index, isCorrect)}
              showResults={showResults}
            />
          ))}
          
          {!quizSubmitted && (
            <div className="flex justify-end mt-6">
              <button 
                onClick={handleSubmitQuiz}
                className="btn btn-primary"
              >
                Submit Quiz
              </button>
            </div>
          )}
          
          {quizSubmitted && isPassing && (
            <div className="flex justify-center mt-8">
              <Link 
                to={`/courses/${courseId}`}
                className="btn btn-primary flex items-center"
              >
                Continue Learning
                <ChevronLeft size={16} className="ml-2" />
              </Link>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <LessonSidebar course={course} completedLessons={completedLessons} />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;