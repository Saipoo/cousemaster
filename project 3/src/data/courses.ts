import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'web-dev-bootcamp',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and gain the skills needed to become a full-stack web developer.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 1245,
    duration: '40 hours',
    level: 'Beginner',
    bestseller: true,
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    students: 15420,
    lastUpdated: '2025-01-15',
    objectives: [
      'Build responsive websites using HTML5 and CSS3',
      'Create interactive web applications with JavaScript',
      'Develop modern UIs with React',
      'Build backend APIs with Node.js and Express',
      'Deploy full-stack applications to production'
    ],
    requirements: [
      'No prior programming experience required',
      'Basic computer skills',
      'A computer with internet access'
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Web Development',
        items: [
          { id: 'lesson-1', type: 'lesson' },
          { id: 'lesson-2', type: 'lesson' },
          { id: 'quiz-1', type: 'quiz' }
        ]
      },
      {
        id: 'module-2',
        title: 'HTML Fundamentals',
        items: [
          { id: 'lesson-3', type: 'lesson' },
          { id: 'lesson-4', type: 'lesson' },
          { id: 'quiz-2', type: 'quiz' }
        ]
      }
    ],
    lessons: [
      {
        id: 'lesson-1',
        title: 'Course Overview',
        description: 'An introduction to the course and what you will learn.',
        videoUrl: 'https://example.com/videos/course-overview',
        duration: '10 min'
      },
      {
        id: 'lesson-2',
        title: 'Setting Up Your Development Environment',
        description: 'Learn how to set up your computer for web development.',
        videoUrl: 'https://example.com/videos/dev-environment',
        duration: '15 min'
      },
      {
        id: 'lesson-3',
        title: 'HTML Document Structure',
        description: 'Learn the basic structure of an HTML document.',
        videoUrl: 'https://example.com/videos/html-structure',
        duration: '20 min'
      },
      {
        id: 'lesson-4',
        title: 'HTML Elements and Attributes',
        description: 'Explore common HTML elements and their attributes.',
        videoUrl: 'https://example.com/videos/html-elements',
        duration: '25 min',
        resources: [
          {
            id: 'resource-1',
            title: 'HTML Cheat Sheet',
            type: 'pdf',
            url: 'https://example.com/resources/html-cheatsheet.pdf'
          }
        ]
      }
    ],
    quizzes: [
      {
        id: 'quiz-1',
        title: 'Web Development Basics Quiz',
        description: 'Test your knowledge of web development fundamentals.',
        questionCount: 5,
        passingScore: 80,
        questions: [
          {
            id: 'q1-1',
            text: 'What does HTML stand for?',
            options: [
              'Hyper Text Markup Language',
              'High Tech Modern Language',
              'Hyper Transfer Markup Language',
              'Home Tool Markup Language'
            ],
            correctAnswer: 'Hyper Text Markup Language',
            explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
          },
          {
            id: 'q1-2',
            text: 'Which of the following is NOT a web browser?',
            options: [
              'Chrome',
              'Firefox',
              'Excel',
              'Safari'
            ],
            correctAnswer: 'Excel',
            explanation: 'Excel is a spreadsheet program developed by Microsoft, not a web browser.'
          }
        ]
      },
      {
        id: 'quiz-2',
        title: 'HTML Fundamentals Quiz',
        description: 'Test your knowledge of HTML basics.',
        questionCount: 5,
        passingScore: 80,
        questions: [
          {
            id: 'q2-1',
            text: 'Which HTML tag is used to create a hyperlink?',
            options: [
              '<a>',
              '<link>',
              '<href>',
              '<url>'
            ],
            correctAnswer: '<a>',
            explanation: 'The <a> (anchor) tag is used to create hyperlinks in HTML.'
          },
          {
            id: 'q2-2',
            text: 'Which attribute is used to specify the URL in an anchor tag?',
            options: [
              'href',
              'src',
              'link',
              'url'
            ],
            correctAnswer: 'href',
            explanation: 'The href attribute specifies the URL (destination) of the link in an anchor tag.'
          }
        ]
      }
    ]
  },
  {
    id: 'data-science-python',
    title: 'Data Science with Python',
    description: 'Master data science and machine learning using Python. Learn data analysis, visualization, and how to build predictive models. Perfect for beginners looking to enter the field of data science.',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 79.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviewCount: 982,
    duration: '35 hours',
    level: 'Intermediate',
    bestseller: true,
    category: 'Data Science',
    tags: ['Python', 'Data Analysis', 'Machine Learning', 'Statistics'],
    students: 12350,
    lastUpdated: '2025-02-10',
    objectives: [
      'Master Python for data analysis',
      'Perform data cleaning and preprocessing',
      'Create compelling data visualizations',
      'Build and evaluate machine learning models',
      'Apply statistical methods to real-world problems'
    ],
    requirements: [
      'Basic programming knowledge',
      'Understanding of high school mathematics',
      'A computer with internet access'
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Data Science',
        items: [
          { id: 'lesson-1', type: 'lesson' },
          { id: 'lesson-2', type: 'lesson' },
          { id: 'quiz-1', type: 'quiz' }
        ]
      }
    ],
    lessons: [
      {
        id: 'lesson-1',
        title: 'What is Data Science?',
        description: 'An introduction to the field of data science and its applications.',
        videoUrl: 'https://example.com/videos/data-science-intro',
        duration: '15 min'
      },
      {
        id: 'lesson-2',
        title: 'Python for Data Science',
        description: 'Learn the basics of Python programming for data science.',
        videoUrl: 'https://example.com/videos/python-data-science',
        duration: '25 min'
      }
    ],
    quizzes: [
      {
        id: 'quiz-1',
        title: 'Data Science Fundamentals Quiz',
        description: 'Test your knowledge of data science basics.',
        questionCount: 5,
        passingScore: 80,
        questions: [
          {
            id: 'q1-1',
            text: 'Which of the following is NOT a common step in the data science process?',
            options: [
              'Data Collection',
              'Data Cleaning',
              'Data Encryption',
              'Data Visualization'
            ],
            correctAnswer: 'Data Encryption',
            explanation: 'While data encryption is important for security, it is not a standard step in the data science process. The typical steps include collection, cleaning, exploration, modeling, and interpretation.'
          }
        ]
      }
    ]
  },
  {
    id: 'java-programming',
    title: 'Java Programming Masterclass',
    description: 'Learn Java programming from the ground up. This course covers core Java concepts, object-oriented programming, data structures, and practical application development.',
    instructor: 'Robert Williams',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 69.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviewCount: 756,
    duration: '45 hours',
    level: 'Beginner to Intermediate',
    category: 'Programming',
    tags: ['Java', 'Object-Oriented Programming', 'Software Development'],
    students: 8750,
    lastUpdated: '2024-12-05',
    objectives: [
      'Master Java syntax and core concepts',
      'Understand object-oriented programming principles',
      'Work with data structures and algorithms',
      'Build desktop applications with Java',
      'Prepare for Java certification exams'
    ],
    requirements: [
      'No prior programming experience required',
      'Basic computer skills',
      'A computer with internet access'
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Getting Started with Java',
        items: [
          { id: 'lesson-1', type: 'lesson' },
          { id: 'quiz-1', type: 'quiz' }
        ]
      }
    ],
    lessons: [
      {
        id: 'lesson-1',
        title: 'Introduction to Java',
        description: 'Learn about Java and set up your development environment.',
        videoUrl: 'https://example.com/videos/java-intro',
        duration: '20 min'
      }
    ],
    quizzes: [
      {
        id: 'quiz-1',
        title: 'Java Basics Quiz',
        description: 'Test your knowledge of Java fundamentals.',
        questionCount: 5,
        passingScore: 80,
        questions: [
          {
            id: 'q1-1',
            text: 'What is the correct way to declare a variable in Java?',
            options: [
              'var x = 10;',
              'int x = 10;',
              'x = 10;',
              'variable x = 10;'
            ],
            correctAnswer: 'int x = 10;',
            explanation: 'In Java, variables must be declared with a type. The correct syntax for declaring an integer variable is "int x = 10;".'
          }
        ]
      }
    ]
  },
  {
    id: 'cloud-computing',
    title: 'AWS Cloud Computing Essentials',
    description: 'Learn the fundamentals of cloud computing with Amazon Web Services (AWS). This course covers core AWS services, cloud architecture, and best practices for deploying applications in the cloud.',
    instructor: 'Jennifer Lee',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviewCount: 542,
    duration: '30 hours',
    level: 'Intermediate',
    category: 'Cloud Computing',
    tags: ['AWS', 'Cloud', 'DevOps', 'Infrastructure'],
    students: 6320,
    lastUpdated: '2025-03-01',
    objectives: [
      'Understand cloud computing concepts and benefits',
      'Navigate the AWS Management Console',
      'Deploy applications on AWS',
      'Implement security best practices',
      'Prepare for AWS certification exams'
    ],
    requirements: [
      'Basic IT knowledge',
      'Understanding of networking concepts',
      'A computer with internet access'
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Cloud Computing',
        items: [
          { id: 'lesson-1', type: 'lesson' },
          { id: 'quiz-1', type: 'quiz' }
        ]
      }
    ],
    lessons: [
      {
        id: 'lesson-1',
        title: 'What is Cloud Computing?',
        description: 'An introduction to cloud computing concepts and service models.',
        videoUrl: 'https://example.com/videos/cloud-intro',
        duration: '15 min'
      }
    ],
    quizzes: [
      {
        id: 'quiz-1',
        title: 'Cloud Computing Basics Quiz',
        description: 'Test your knowledge of cloud computing fundamentals.',
        questionCount: 5,
        passingScore: 80,
        questions: [
          {
            id: 'q1-1',
            text: 'Which of the following is NOT a cloud service model?',
            options: [
              'Infrastructure as a Service (IaaS)',
              'Platform as a Service (PaaS)',
              'Software as a Service (SaaS)',
              'Hardware as a Service (HaaS)'
            ],
            correctAnswer: 'Hardware as a Service (HaaS)',
            explanation: 'The three main cloud service models are IaaS, PaaS, and SaaS. "Hardware as a Service" is not a standard cloud service model.'
          }
        ]
      }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'React Native Mobile App Development',
    description: 'Learn to build cross-platform mobile applications using React Native. This course covers everything you need to create professional mobile apps for both iOS and Android platforms.',
    instructor: 'David Kim',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    price: 84.99,
    originalPrice: 169.99,
    rating: 4.7,
    reviewCount: 423,
    duration: '38 hours',
    level: 'Intermediate',
    category: 'Mobile Development',
    tags: ['React Native', 'JavaScript', 'iOS', 'Android', 'Mobile'],
    students: 5840,
    lastUpdated: '2025-01-20',
    objectives: [
      'Build cross-platform mobile apps with React Native',
      'Understand mobile UI/UX principles',
      'Implement navigation and state management',
      'Access device features like camera and location',
      'Deploy apps to app stores'
    ],
    requirements: [
      'Basic JavaScript knowledge',
      'Familiarity with React is helpful but not required',
      'A computer with internet access'
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Getting Started with React Native',
        items: [
          { id: 'lesson-1', type: 'lesson' },
          { id: 'quiz-1', type: 'quiz' }
        ]
      }
    ],
    lessons: [
      {
        id: 'lesson-1',
        title: 'Introduction to React Native',
        description: 'Learn what React Native is and how it works for cross-platform development.',
        videoUrl: 'https://example.com/videos/react-native-intro',
        duration: '18 min'
      }
    ],
    quizzes: [
      {
        id: 'quiz-1',
        title: 'React Native Fundamentals Quiz',
        description: 'Test your knowledge of React Native basics.',
        questionCount: 5,
        passingScore: 80,
        questions: [
          {
            id: 'q1-1',
            text: 'Which company developed React Native?',
            options: [
              'Google',
              'Apple',
              'Facebook (Meta)',
              'Microsoft'
            ],
            correctAnswer: 'Facebook (Meta)',
            explanation: 'React Native was developed by Facebook (now Meta) and was first released in 2015.'
          }
        ]
      }
    ]
  }
];

export const featuredCourses = courses.filter(course => course.bestseller);

export const testimonials = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    text: 'The Web Development Bootcamp completely transformed my career. I went from knowing nothing about coding to landing a job as a junior developer in just 4 months!',
    course: 'Complete Web Development Bootcamp'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Data Analyst',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    text: 'The Data Science with Python course provided me with the exact skills I needed for my job. The instructor explains complex concepts in a way that\'s easy to understand.',
    course: 'Data Science with Python'
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    role: 'Computer Science Student',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    rating: 4,
    text: 'As a CS student, the Java Programming Masterclass helped me understand OOP concepts much better than my university courses. Highly recommended!',
    course: 'Java Programming Masterclass'
  }
];

export const categories = [
  'Web Development',
  'Data Science',
  'Programming',
  'Cloud Computing',
  'Mobile Development',
  'DevOps',
  'Artificial Intelligence',
  'Cybersecurity'
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};