import { ProfileInfo, Project, JourneyStage, SkillCategory, ExperienceItem } from '@/types/portfolio';

export const profileData: ProfileInfo = {
  name: 'Vishak',
  roles: ['AI ENGINEER', 'PYTHON DEVELOPER', 'AI / ML'],
  headline: 'BUILDING INTELLIGENCE. CREATING WHAT\'S NEXT.',
  subheadline: 'An AI Engineer\'s Journey',
  editorialStatement:
    'Building practical AI systems with Python, machine learning and computer vision, one working project at a time.',
  aboutStory: [
    'I am an Artificial Intelligence & Data Science student focused on building practical AI systems and Python-based applications.',
    'I like starting from a real problem and working toward something that runs, whether that is a regression model or an interview-practice app. I document what works, what is simulated and what is still planned.',
    'I am most interested in machine learning, computer vision and intelligent applications, including AI for the automotive space.'
  ],
  education: {
    degree: 'Bachelor of Technology',
    major: 'Artificial Intelligence & Data Science',
    institution: 'Loyola Institute of Technology and Science',
    currentStatus: 'Final Year · 7th Semester',
    cgpa: '8.5 / 10.0',
    graduationYear: '2027',
    location: 'India',
    school: {
      name: 'Vidya Jyothi Matriculation Higher Secondary School',
      board: 'State Board',
    },
  },
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Python Development',
    'Backend Development',
    'Computer Vision',
    'Data Science',
    'Automotive AI',
    'Intelligent Applications'
  ],
  contact: {
    email: 'vishak3416@gmail.com',
    resumeUrl: '#experience',
    location: 'India (IST)',
    status: 'Available for AI Roles',
  },
};

export const prepPitchProject: Project = {
  id: 'preppitch',
  title: 'PREPPITCH',
  actLabel: '04 — FEATURED PROJECT',
  tagline: 'PRACTICE UNTIL YOUR PITCH IS PERFECT.',
  description:
    'PrepPitch is a mock-interview practice web app for students that I own and develop. The public GitHub repository contains a React/TypeScript prototype. It takes a candidate through interview setup, a timed question-by-question interview and a structured feedback report. With a Google Gemini API key, it generates the questions, follow-ups and rubric feedback. Without one, it falls back to a built-in question bank and rule-based scoring. Separately, I am developing the main PrepPitch application with Django/Python. It is in development and not yet in the public repository.',
  technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API', 'Web Speech API'],
  isFlagship: true,
  responsibilities: [
    'Four-step interview setup: interview type, difficulty, role and company details, and practice mode.',
    'Optional Gemini API integration (needs an API key) for question generation, one follow-up question per answer, and rubric-based feedback.',
    'Rule-based fallback, so the app still works without an API key.',
    'Questions read aloud with the browser’s built-in text-to-speech.',
    'Feedback report with category scores, a STAR checklist and a review of each answer.',
    'Progress dashboard with charts, plus a searchable bank of 22 practice questions.'
  ],
  inDevelopment: [
    'Django/Python backend',
    'Interview flow',
    'Question engine',
    'Answer evaluation',
    'Speech-to-text',
    'Adaptive interviews'
  ],
  flowSteps: [
    {
      number: '01',
      title: 'Student Input',
      detail: 'Demo sign-in with name, email and target role, saved in the browser.',
      accent: false,
    },
    {
      number: '02',
      title: 'Select Job Role',
      detail: 'Target role, company and an optional job description in the setup wizard.',
      accent: false,
    },
    {
      number: '03',
      title: 'Select Interview Type',
      detail: 'HR, behavioral, technical, campus or data-analyst, plus difficulty and practice mode.',
      accent: false,
    },
    {
      number: '04',
      title: 'Mock Interview',
      detail: 'Gemini generates five questions for the role when a key is set. Otherwise, a built-in question set is used. Questions are read aloud.',
      accent: true,
    },
    {
      number: '05',
      title: 'Answer Questions',
      detail: 'Typed answers with question and answer timers.',
      accent: false,
    },
    {
      number: '06',
      title: 'Evaluation',
      detail: 'Gemini scores the answers against a rubric. Without a key, rule-based scoring is used.',
      accent: true,
    },
    {
      number: '07',
      title: 'Score + Feedback',
      detail: 'Overall and category scores, strengths, areas to improve and a STAR checklist.',
      accent: true,
    },
    {
      number: '08',
      title: 'Performance History',
      detail: 'Sessions are saved in the browser and charted on the dashboard and progress pages.',
      accent: false,
    },
  ],
};

export const drowsinessProject: Project = {
  id: 'drowsiness-detection',
  title: 'DRIVER DROWSINESS DETECTION',
  actLabel: '05 — VISION SYSTEM',
  tagline: 'WATCHING FOR CLOSED EYES, FRAME BY FRAME.',
  description:
    'A webcam-based drowsiness detection project built with OpenCV. It detects drowsiness using the Eye Aspect Ratio (EAR) together with a CNN-based approach.',
  technologies: ['Python', 'OpenCV', 'Computer Vision', 'CNN'],
  flowSteps: [
    {
      number: '01',
      title: 'Webcam Feed',
      detail: 'Frames are read from the webcam with OpenCV.',
      tech: 'OpenCV',
    },
    {
      number: '02',
      title: 'Eye Aspect Ratio (EAR)',
      detail: 'EAR = (||p2-p6|| + ||p3-p5||) / (2||p1-p4||), computed from six landmarks around each eye. It drops towards zero as the eye closes.',
      tech: 'EAR',
      accent: true,
    },
    {
      number: '03',
      title: 'CNN-Based Approach',
      detail: 'A convolutional neural network is used alongside EAR.',
      tech: 'CNN',
      accent: true,
    },
    {
      number: '04',
      title: 'Drowsiness Detection',
      detail: 'Drowsiness is detected from the EAR and CNN results.',
      tech: 'EAR + CNN',
      accent: true,
    },
  ],
};

export const housePriceProject: Project = {
  id: 'house-price-prediction',
  title: 'HOUSE PRICE PREDICTION',
  actLabel: '06 — PREDICTIVE ANALYTICS',
  tagline: 'A FIRST REGRESSION BASELINE FOR HOUSE PRICES.',
  description:
    'A first-phase machine learning notebook that predicts house sale prices. It fills missing values, holds out 20% of the data for testing, trains Linear Regression and Random Forest models, and compares them by mean absolute error, with a plot of actual against predicted prices.',
  technologies: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Jupyter'],
  flowSteps: [
    {
      number: '01',
      title: 'Load Data',
      detail: 'Tabular housing data is loaded from a CSV file with pandas.',
    },
    {
      number: '02',
      title: 'Missing Values',
      detail: 'Missing values are filled with each column’s mean.',
    },
    {
      number: '03',
      title: 'Features & Target',
      detail: 'SalePrice is the target. All other columns are features.',
    },
    {
      number: '04',
      title: 'Train / Test Split',
      detail: '80 / 20 split with a fixed random seed.',
    },
    {
      number: '05',
      title: 'Train Two Models',
      detail: 'Linear Regression and Random Forest Regressor are trained on the same split.',
      accent: true,
    },
    {
      number: '06',
      title: 'Evaluate',
      detail: 'Mean absolute error on the test set, plus an actual-vs-predicted scatter plot.',
      accent: true,
    },
  ],
};

export const archiveProjects: Project[] = [
  {
    id: 'movie-ticket-booking',
    title: 'Movie Ticket Booking',
    actLabel: 'ARCHIVE // 01',
    tagline: 'CONSOLE SEAT BOOKING & TKINTER SCREENS.',
    description:
      'An early Python project: a console script that lists movies, shows prices and books seats against an availability count, plus first Tkinter login and sign-up screens.',
    technologies: ['Python', 'Tkinter'],
  },
  {
    id: 'food-ordering-platform',
    title: 'Food Ordering App',
    actLabel: 'ARCHIVE // 02',
    tagline: 'MENU, CHECKOUT & LOGIN FLOW IN PYTHON.',
    description:
      'A console food-ordering flow written in a Jupyter notebook: menu display, order selection, checkout with payment options, feedback, and simple login and registration.',
    technologies: ['Python', 'Jupyter'],
  },
];

export const journeyStages: JourneyStage[] = [
  {
    stageNumber: 'STAGE 01',
    title: 'Pythonic Foundations',
    description:
      'Learned Python through hands-on exercises: control flow, functions, classes, file handling, Tkinter GUIs and MySQL-backed scripts.',
    tagline: 'THE CORE SYNTAX OF THOUGHT',
  },
  {
    stageNumber: 'STAGE 02',
    title: 'Machine Learning',
    description:
      'Built regression workflows with scikit-learn: train/test splits, Linear Regression and Random Forest models, and error metrics. Along the way, practised NumPy, pandas, Matplotlib and Seaborn.',
    tagline: 'DISCOVERING PATTERNS IN DATA',
  },
  {
    stageNumber: 'STAGE 03',
    title: 'Deep Learning',
    description:
      'Studying neural network fundamentals through a deep learning internship, and applying a CNN-based approach in drowsiness detection.',
    tagline: 'NEURAL WEIGHTS & CONVERGENCE',
  },
  {
    stageNumber: 'STAGE 04',
    title: 'Computer Vision',
    description:
      'Working with OpenCV on webcam-based drowsiness detection, using the Eye Aspect Ratio together with a CNN-based approach.',
    tagline: 'TEACHING MACHINES TO SEE',
  },
  {
    stageNumber: 'STAGE 05',
    title: 'Natural Language Processing',
    description:
      'Exploring how text is represented and compared: tokens, embeddings and similarity measures.',
    tagline: 'DECIPHERING HUMAN LANGUAGE',
  },
  {
    stageNumber: 'STAGE 06',
    title: 'Generative AI & Intelligent Apps',
    description:
      'Integrated the Google Gemini API into the PrepPitch prototype for question generation, follow-up questions and rubric-based feedback, with a rule-based fallback. Now developing the main PrepPitch application with Django/Python, not yet public.',
    tagline: 'ORCHESTRATING COGNITIVE SYSTEMS',
  },
  {
    stageNumber: 'STAGE 07 • HORIZON',
    title: 'Production AI Engineering',
    description:
      'Next: server-side APIs, reliable data pipelines, and deploying models that real users depend on.',
    tagline: 'ENGINEERING FOR THE FUTURE',
    isHorizon: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['scikit-learn', 'Regression models', 'Gemini API', 'Deep Learning (learning)'],
  },
  {
    category: 'Computer Vision',
    skills: ['OpenCV', 'Eye Aspect Ratio (EAR)', 'CNNs'],
  },
  {
    category: 'Data Science',
    skills: ['NumPy', 'pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    category: 'Backend Systems',
    skills: ['Flask', 'MySQL', 'Django (in development)'],
  },
  {
    category: 'Tooling & Ops',
    skills: ['Git', 'GitHub'],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Nexvra Solutions',
    role: 'Python Developer / Python Developer Intern',
    type: 'Internship',
    badge: 'Independently Secured',
    highlight: 'Independently secured through my own job search and external application, not through college placement.',
    period: 'From 7 September 2026',
    location: 'Marthandam',
    description:
      'Python development work across backend development, databases and APIs.',
    responsibilities: [
      'Python backend development',
      'Working with databases and APIs',
      'Testing and debugging'
    ],
  },
  {
    company: 'IT Desk',
    role: 'Python Training / Machine Learning Intern',
    type: 'Internship',
    description: 'Python course and machine learning internship, focused on practical Python and ML learning.',
  },
  {
    company: 'G-Tech',
    role: 'Deep Learning Intern',
    type: 'Internship',
    description: 'Internship focused on learning deep learning.',
  },
  {
    company: 'MyInspection',
    role: 'Internship / Student Role',
    type: 'Internship',
  },
];
