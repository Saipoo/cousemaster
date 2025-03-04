export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  level: string;
  bestseller?: boolean;
  category: string;
  tags: string[];
  lessons: Lesson[];
  quizzes: Quiz[];
  modules: Module[];
  objectives: string[];
  requirements: string[];
  students: number;
  lastUpdated: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  locked?: boolean;
  resources?: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'code' | 'link';
  url: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  questions: Question[];
  locked?: boolean;
  passingScore: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  items: ModuleItem[];
}

export interface ModuleItem {
  id: string;
  type: 'lesson' | 'quiz';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  course: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  enrolledCourses: EnrolledCourse[];
}

export interface EnrolledCourse {
  courseId: string;
  progress: number;
  completedLessons: string[];
  completedQuizzes: string[];
  quizScores: Record<string, number>;
  certificateIssued: boolean;
  enrollmentDate: string;
}